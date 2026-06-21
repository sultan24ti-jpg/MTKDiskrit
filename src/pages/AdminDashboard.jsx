import Navbar from "../components/navbar";

export default function AdminDashboard() {
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;

  return (
    <div className="app-shell">
      <div className="page">
        <Navbar />

        <div className="card">
          <div className="card-header">
            <p className="eyebrow">Admin Dashboard</p>
            <h1>Halo, {user?.username}</h1>
          </div>

          <div className="info-grid">
            <div className="info-card">
              <h2>Role</h2>
              <p>{user?.role}</p>
            </div>
            <div className="info-card">
              <h2>Akses</h2>
              <p>Kelola data dan lihat laporan.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
