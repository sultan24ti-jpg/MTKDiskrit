import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";

export default function Dashboard() {
  const navigate = useNavigate();
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;

  if (!user) {
    return (
      <div className="app-shell">
        <div className="page">
          <div className="card centered-card">
            <h1>Belum Login</h1>
            <p>Silakan kembali ke halaman login.</p>
            <button onClick={() => navigate("/")}>Ke Login</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app-shell">
      <div className="page">
        <Navbar />

        <div className="card">
          <div className="card-header">
            <p className="eyebrow">Dashboard</p>
            <h1>Halo, {user.username}</h1>
          </div>

          <div className="info-grid">
            <div className="info-card">
              <h2>Username</h2>
              <p>{user.username}</p>
            </div>
            <div className="info-card">
              <h2>Role</h2>
              <p>{user.role}</p>
            </div>
            <div className="info-card">
              <h2>Status</h2>
              <p>{user.is_active ? "Aktif" : "Tidak Aktif"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
