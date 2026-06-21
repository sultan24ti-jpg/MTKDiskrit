import { Link, useNavigate } from "react-router-dom";

const getDashboardPath = () => {
  const storedUser = localStorage.getItem("user");
  if (!storedUser) return "/";

  const user = JSON.parse(storedUser);
  const role = String(user.role || "").toLowerCase();

  if (role === "admin") return "/dashboard/admin";
  if (role === "mahasiswa") return "/dashboard/mahasiswa";
  if (role === "dosen") return "/dashboard/dosen";
  return "/";
};

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav className="navbar">
      <Link className="nav-link" to={getDashboardPath()}>
        Dashboard
      </Link>
      <Link className="nav-link" to="/analisis">
        Analisis
      </Link>
      <button className="nav-link" type="button" onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
}
