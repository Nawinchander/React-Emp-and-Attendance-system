import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Dashboard</Link> |{" "}
      <Link to="/apply-leave">Apply Leave</Link> |{" "}
      <Link to="/manager">Manager Panel</Link>
    </nav>
  );
}