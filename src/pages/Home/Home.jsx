import { useNavigate } from "react-router-dom";
import imagepsy from "../../assets/imagepsy.png";
// import icon from "../../assets/icon.png";
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
        <img
          src={imagepsy}
          alt="Psychologist Illustration"
          className={styles.imagepsy}
        />
        {/* <img src={icon} alt="icon-add" className={styles.icon_add} /> */}
        <svg
          className={styles.icon_add}
          width="59"
          height="59"
          viewBox="0 0 59 59"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="12.4681"
            width="48.1733"
            height="48.1733"
            rx="10"
            transform="rotate(15 12.4681 0)"
            fill="#FBC75E"
          />
          <g clip-path="url(#clip0_1_41)">
            <path
              d="M31.8771 34.6007L31.4493 36.1973L20.2728 33.2026L20.7006 31.6059C20.7006 31.6059 21.5562 28.4126 27.1445 29.91C32.7328 31.4074 31.8771 34.6007 31.8771 34.6007ZM31.1151 26.2679C31.2632 25.7153 31.2441 25.1312 31.0602 24.5894C30.8763 24.0477 30.5359 23.5726 30.082 23.2243C29.6281 22.876 29.0811 22.6702 28.5102 22.6327C27.9393 22.5953 27.3701 22.728 26.8747 23.0141C26.3792 23.3002 25.9797 23.7267 25.7266 24.2398C25.4736 24.753 25.3784 25.3296 25.4531 25.8968C25.5277 26.464 25.7689 26.9964 26.1462 27.4265C26.5234 27.8567 27.0197 28.1653 27.5723 28.3134C28.3134 28.5119 29.1029 28.408 29.7674 28.0244C30.4318 27.6408 30.9166 27.009 31.1151 26.2679ZM32.6849 31.3945C33.0739 31.9058 33.3461 32.4962 33.4824 33.124C33.6187 33.7518 33.6157 34.4019 33.4738 35.0285L33.0459 36.6251L36.2392 37.4808L36.667 35.8841C36.667 35.8841 37.4435 32.9862 32.6849 31.3945ZM33.8596 24.0086C33.3109 23.8583 32.7295 23.8786 32.1927 24.0667C32.496 24.8742 32.5391 25.7564 32.3159 26.5897C32.0926 27.4229 31.6142 28.1653 30.9477 28.713C31.3185 29.1444 31.8119 29.4526 32.3623 29.5968C33.1033 29.7954 33.8929 29.6914 34.5573 29.3078C35.2217 28.9242 35.7065 28.2924 35.9051 27.5514C36.1036 26.8103 35.9997 26.0208 35.6161 25.3564C35.2325 24.6919 34.6007 24.2071 33.8596 24.0086Z"
              fill="#FBFBFB"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_41">
              <rect
                width="19.8356"
                height="19.8356"
                fill="white"
                transform="translate(22.7404 17.6066) rotate(15)"
              />
            </clipPath>
          </defs>
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
