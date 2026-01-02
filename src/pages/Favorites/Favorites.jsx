import { useEffect, useState } from "react";
import { ref, get } from "firebase/database";
import { database, auth } from "../../firebase/config";
import PsychologistCard from "../../components/PsychologistCard/PsychologistCard";

export default function Favorites() {
  const [list, setList] = useState([]);

  useEffect(() => {
    if (!auth.currentUser) return;
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    get(ref(database, "psychologists")).then((snapshot) => {
      const res = snapshot.val();
      const all = Object.entries(res).map(([id, v]) => ({ id, ...v }));
      setList(all.filter((p) => favs.includes(p.id)));
    });
  }, []);

  return (
    <div className="favorites-page">
      {list.map((psychologist) => (
        <PsychologistCard key={psychologist.id} data={psychologist} />
      ))}
    </div>
  );
}
