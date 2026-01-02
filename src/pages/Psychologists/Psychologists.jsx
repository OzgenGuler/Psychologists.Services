import { useEffect, useState } from "react";
import { ref, get } from "firebase/database";
import { database } from "../../firebase/config";
import PsychologistCard from "../../components/PsychologistCard/PsychologistCard";
import Sortbar from "../../components/Sortbar/Sortbar";
import { object } from "yup";

export default function Psychologists() {
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(3);
  const [sort, setSort] = useState("az");

  useEffect(() => {
    get(ref(database, "psychologists")).then((snapshot) => {
      const res = snapshot.val();
      setData(object.entries(res).map(([id, v]) => ({ id, ...v })));
    });
  }, []);
  const sorted = [...data].sort((a, b) => {
    if (sort === "az") return a.name.localeCompare(b.name);
    if (sort === "za") return b.name.localeCompare(a.name);
    if (sort === "priceAsc") return a.price_per_hour - b.price_per_hour;
    if (sort === "priceDesc") return b.price_per_hour - a.price_per_hour;
    if (sort === "rating") return a.rating - b.rating;
  });
  return (
    <>
      <Sortbar setSort={setSort} />
      <div className="psychologists-page">
        {sorted.slice(0, visible).map((psychologist) => (
          <PsychologistCard key={psychologist.id} data={psychologist} />
        ))}
      </div>
      {visible < sorted.length && (
        <button className="load-more" onClick={() => setVisible((v) => v + 3)}>
          Load More
        </button>
      )}
    </>
  );
}
