import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "../../context/AuthContext.jsx";
import iziToast from "izitoast";
import styles from "../Auth/AuthForm.module.css";

const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().required("Phone number is required"),
  time: yup.string().required("Meeting time is required"),
  comment: yup
    .string()
    .required("Comment is required")
    .min(10, "Minimum 10 characters"),
});
export default function AppointmentForm({ psychologist, onSuccess }) {
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: user?.displayName || "",
      email: user?.email || "",
      phone: "",
      time: "",
      comment: "",
    },
  });

  const submitHandler = async (data) => {
    try {
      console.log("Appointment request:", {
        ...data,
        psychologistName: psychologist?.name,
      });

      await new Promise((resolve) => setTimeout(resolve, 500));

      iziToast.success({
        title: "Request sent",
        message: `Your appointment request with ${
          psychologist?.name || "the psychologist"
        } has been sent.`,
        position: "topRight",
      });

      reset();

      if (onSuccess) onSuccess();
    } catch (error) {
      console.error(error);

      iziToast.error({
        title: "Something went wrong",
        message:
          error.message ||
          "Could not send your appointment request. Please try again.",
        position: "topRight",
      });
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(submitHandler)}>
      <p className={styles.appointmentText}>
        You are on the verge of changing your life for the better. Fill out the
        short form below to book your personal appointment with a professional
        psychologist.
      </p>

      {psychologist && (
        <div className={styles.psychInfo}>
          <img
            src={psychologist.avatar_url}
            alt={psychologist.name}
            className={styles.psychAvatar}
          />
          <div>
            <p className={styles.psychLabel}>Your psychologist</p>
            <p className={styles.psychName}>{psychologist.name}</p>
          </div>
        </div>
      )}

      <div className={styles.field}>
        <label className={styles.label} htmlFor="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          className={styles.input}
          {...register("name")}
        />
        {errors.name && <p className={styles.error}>{errors.name.message}</p>}
      </div>

      <div className={styles.inlineRow}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            className={styles.input}
            {...register("phone")}
          />
          {errors.phone && (
            <p className={styles.error}>{errors.phone.message}</p>
          )}
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="time">
            Meeting time
          </label>
          <input
            id="time"
            type="time"
            className={styles.input}
            {...register("time")}
          />
          {errors.time && <p className={styles.error}>{errors.time.message}</p>}
        </div>
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          className={styles.input}
          {...register("email")}
        />
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="comment">
          Comment
        </label>
        <textarea
          id="comment"
          className={`${styles.input} ${styles.textarea}`}
          rows={3}
          {...register("comment")}
        />
        {errors.comment && (
          <p className={styles.error}>{errors.comment.message}</p>
        )}
      </div>

      <button
        className={styles.submitBtn}
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
