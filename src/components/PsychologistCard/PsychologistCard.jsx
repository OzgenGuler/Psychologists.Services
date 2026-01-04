// import { useState, useEffect } from "react";
// import { auth } from "../../firebase/config";
// import AppointmentModal from "../AppointmentModal/AppointmentModal";

// export default function PsychologistCard({ data }) {
//   const [fav, setFav] = useState(false);
//   const [open, setOpen] = useState(false);
//   useEffect(() => {
//     const f = JSON.parse(localStorage.getItem("favorites")) || [];
//     setFav(f.includes(data.id));
//   }, []);
//   const toggleFav = () => {
//     if (!auth.currentUser) {
//       alert("Please log in to manage favorites.");
//       return;
//     }
//     const f = JSON.parse(localStorage.getItem("favorites")) || [];
//     const updated = fav ? f.filter((i) => i !== data.id) : [...f, data.id];
//     localStorage.setItem("favorites", JSON.stringify(updated));
//     setFav(!fav);
//   };
//   return (
//     <div className="psychologist-card">
//       <img src={data.avatar_url} alt={data.name} />
//       <h3>{data.name}</h3>
//       <p>{data.specialization}</p>
//       <p>${data.price_per_hour}</p>
//       <button onClick={toggleFav} style={{ color: fav ? "red" : "gray" }}>
//         <svg
//           width="25"
//           height="22"
//           viewBox="0 0 25 22"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M21.8989 2.74614C21.3456 2.19257 20.6886 1.75343 19.9655 1.45382C19.2425 1.15421 18.4674 1 17.6847 1C16.902 1 16.127 1.15421 15.4039 1.45382C14.6809 1.75343 14.0239 2.19257 13.4706 2.74614L12.3222 3.89448L11.1739 2.74614C10.0562 1.62848 8.54035 1.00058 6.95973 1.00058C5.37911 1.00058 3.86323 1.62848 2.74557 2.74614C1.6279 3.86381 1 5.37969 1 6.96031C1 8.54093 1.6279 10.0568 2.74557 11.1745L3.8939 12.3228L12.3222 20.7511L20.7506 12.3228L21.8989 11.1745C22.4525 10.6212 22.8916 9.96419 23.1912 9.24111C23.4908 8.51803 23.645 7.74301 23.645 6.96031C23.645 6.17762 23.4908 5.40259 23.1912 4.67951C22.8916 3.95643 22.4525 3.29946 21.8989 2.74614Z"
//             stroke="#191A15"
//             stroke-width="2"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//           />
//         </svg>
//       </button>
//       <button onClick={() => setOpen(true)}>Make an appointment</button>
//       {open && <AppointmentModal onClose={() => setOpen(false)} />}
//     </div>
//   );
// }
import { useState } from "react";
import styles from "./PsychologistCard.module.css";
import { useAuth } from "../../context/AuthContext";
import { useFavorites } from "../../context/FavoritesContext";
import Modal from "../Modal/Modal";
import AppointmentForm from "../AppointmentModal/AppointmentModal";
import iziToast from "izitoast";

export default function PsychologistCard({ psychologist }) {
  const { user } = useAuth();
  const { isFavorite, toggleFavorite } = useFavorites();

  const [isExpanded, setIsExpanded] = useState(false);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  if (!psychologist || typeof psychologist !== "object") return null;

  const {
    name = "Unknown",
    experience = 0,
    price_per_hour = 0,
    rating = 0,
    specialization = "",
    initial_consultation = "",
    about = "",
    license = "",
    reviews = [],
  } = psychologist;

  const favorite = isFavorite(psychologist);

  const handleHeartClick = () => {
    if (!user) {
      iziToast.error({
        title: "Unauthorized",
        message: "Only authorized users can manage favorites.",
        position: "topRight",
      });
      return;
    }

    toggleFavorite(psychologist);

    if (favorite) {
      iziToast.info({
        title: "Removed",
        message: `${name} removed from favorites`,
        position: "topRight",
      });
    } else {
      iziToast.success({
        title: "Added",
        message: `${name} added to favorites`,
        position: "topRight",
      });
    }
  };

  const toggleDetails = () => setIsExpanded((prev) => !prev);

  const openAppointment = () => {
    if (!user) {
      iziToast.error({
        title: "Unauthorized",
        message: "Only authorized users can make an appointment.",
        position: "topRight",
      });
      return;
    }
    setIsAppointmentOpen(true);
  };

  const closeAppointment = () => setIsAppointmentOpen(false);

  return (
    <>
      <article
        className={`${styles.card} ${isExpanded ? styles.cardExpanded : ""}`}
      >
        <div className={styles.topRow}>
          <div className={styles.left}>
            <div className={styles.avatarWrapper}>
              <img
                src={psychologist.avatar_url}
                alt={name}
                className={styles.avatarImg}
              />
            </div>

            <div className={styles.mainInfo}>
              <div className={styles.nameRow}>
                <p className={styles.role}>Psychologist</p>
                <h2 className={styles.name}>{name}</h2>
              </div>

              <div className={styles.metaRow}>
                <span className={styles.metaChip}>
                  Experience: <span>{experience} years</span>
                </span>

                {license && (
                  <span className={styles.metaChip}>
                    License: <span>{license}</span>
                  </span>
                )}
              </div>

              <div className={styles.metaRow}>
                {specialization && (
                  <span className={styles.metaChip}>
                    Specialization: <span>{specialization}</span>
                  </span>
                )}

                {initial_consultation && (
                  <span className={styles.metaChip}>
                    Initial consultation: <span>{initial_consultation}</span>
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>
                <span className={styles.infoStar}>★</span> Rating:
              </span>
              <span className={styles.infoValue}>{rating}</span>

              <span className={styles.infoLabel}>Price / 1 hour:</span>
              <span className={styles.infoPrice}>{price_per_hour}$</span>

              <button
                className={`${styles.heartBtn} ${
                  favorite ? styles.heartActive : ""
                }`}
                type="button"
                onClick={handleHeartClick}
              >
                {favorite ? "♥" : "♡"}
              </button>
            </div>
          </div>
        </div>

        {about && <p className={styles.about}>{about}</p>}

        {isExpanded && Array.isArray(reviews) && reviews.length > 0 && (
          <div className={styles.reviewsSection}>
            <ul className={styles.reviewsList}>
              {reviews.map((rev, index) => (
                <li key={index} className={styles.reviewItem}>
                  <div className={styles.reviewTop}>
                    <span className={styles.reviewerBadge}>
                      {rev.reviewer?.[0] || "U"}
                    </span>

                    <div className={styles.reviewHeaderText}>
                      <span className={styles.reviewerName}>
                        {rev.reviewer || "Anonymous"}
                      </span>
                      {rev.rating && (
                        <span className={styles.reviewRating}>
                          ★ {rev.rating}
                        </span>
                      )}
                    </div>
                  </div>

                  {rev.comment && (
                    <p className={styles.reviewComment}>{rev.comment}</p>
                  )}
                </li>
              ))}
            </ul>

            <button
              className={styles.appointmentBtn}
              type="button"
              onClick={openAppointment}
            >
              Make an appointment
            </button>
          </div>
        )}

        <div className={styles.bottomRow}>
          <button
            className={styles.readMoreBtn}
            type="button"
            onClick={toggleDetails}
          >
            {isExpanded ? "Hide" : "Read more"}
          </button>
        </div>
      </article>

      <Modal
        isOpen={isAppointmentOpen}
        onClose={closeAppointment}
        title={`Make an appointment with ${name}`}
      >
        <AppointmentForm
          psychologist={psychologist}
          onSuccess={closeAppointment}
        />
      </Modal>
    </>
  );
}
