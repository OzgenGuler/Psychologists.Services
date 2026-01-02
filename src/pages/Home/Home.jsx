import { useNavigate } from "react-router-dom";
import imagepsy from "../../assets/imagepsy.png";
import icon from "../../assets/icon.png";
import styles from "./Home.module.css";

export default function Home() {
  const navigate = useNavigate();
  return (
    <section className={styles.home}>
      <div className={styles.home_content}>
        <h1 className={styles.home_title}>
          The road to the <span>depths</span> of the human soul
        </h1>
        <p className={styles.home_description}>
          We help you to reveal your potential, overcome challenges and find a
          guide in your own life with the help of our experienced psychologists.
        </p>
        <button
          className={styles.home_button}
          onClick={() => navigate("/psychologists")}
        >
          Get Started
          <svg
            className={styles.arrow}
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M5 12h14M13 6l6 6-6 6"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className={styles.home_image}>
        <img
          src={imagepsy}
          alt="Psychologist Illustration"
          className={styles.imagepsy}
        />
        <img src={icon} alt="icon-add" className={styles.icon_add} />
        <svg
          className={styles.question}
          width="45"
          height="45"
          viewBox="0 0 45 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="-2.24496"
            y="8.1078"
            width="40"
            height="40"
            rx="10"
            transform="rotate(-15 -2.24496 8.1078)"
            fill="#4535AF"
          />
          <path
            d="M19.255 19.0675C19.255 17.8954 20.1519 16.9425 21.255 16.9425H22.255C23.3582 16.9425 24.255 17.8954 24.255 19.0675V19.187C24.255 19.9109 23.9082 20.5849 23.3363 20.9734L22.0175 21.8732C21.6303 22.1377 21.3118 22.5013 21.0913 22.9306C20.8707 23.3598 20.7551 23.8411 20.755 24.3302V24.38C20.755 24.9677 21.2019 25.4425 21.755 25.4425C22.3082 25.4425 22.755 24.9677 22.755 24.38V24.3335C22.755 24.0613 22.8863 23.8089 23.0988 23.6628L24.4175 22.763C25.5613 21.9794 26.255 20.6347 26.255 19.187V19.0675C26.255 16.7201 24.4644 14.8175 22.255 14.8175H21.255C19.0457 14.8175 17.255 16.7201 17.255 19.0675C17.255 19.6552 17.7019 20.13 18.255 20.13C18.8082 20.13 19.255 19.6552 19.255 19.0675ZM21.755 29.6925C22.0866 29.6925 22.4045 29.5526 22.6389 29.3035C22.8733 29.0544 23.005 28.7166 23.005 28.3644C23.005 28.0121 22.8733 27.6743 22.6389 27.4253C22.4045 27.1762 22.0866 27.0363 21.755 27.0363C21.4235 27.0363 21.1056 27.1762 20.8712 27.4253C20.6367 27.6743 20.505 28.0121 20.505 28.3644C20.505 28.7166 20.6367 29.0544 20.8712 29.3035C21.1056 29.5526 21.4235 29.6925 21.755 29.6925Z"
            fill="#FBFBFB"
          />
        </svg>
        <div className={styles.expert_container}>
          <div className={styles.expert_item}>
            <span className={styles.check}>✓</span>
          </div>
          <div className={styles.expert_text}>
            <p className={styles.expert_title}>Experienced Psychologists</p>
            <p className={styles.expert_number}>15,000</p>
          </div>
        </div>
      </div>
    </section>
  );
}
