import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <h1>MindCare</h1>
      <p>Your mental health matters</p>
      <Link to="/psychologists">Find a psychologist</Link>
    </div>
  );
}
