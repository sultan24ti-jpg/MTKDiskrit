import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../services/supabase";

const allowedRoles = ["admin", "mahasiswa", "dosen"];

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    const { data } = await supabase
      .from("users")
      .select("*")
      .eq("username", username)
      .single();

    if (!data) {
      alert("Username tidak ditemukan");
      return;
    }

    if (data.password_hash !== password) {
      alert("Password salah!");
      return;
    }

    if (!data.is_active) {
      alert("Akun Anda tidak aktif!");
      return;
    }

    const role = String(data.role || "").trim().toLowerCase();
    if (!allowedRoles.includes(role)) {
      alert("Role tidak valid. Gunakan Admin, Mahasiswa, atau Dosen.");
      return;
    }

    localStorage.setItem("user", JSON.stringify(data));

    const route =
      role === "admin"
        ? "/dashboard/admin"
        : role === "mahasiswa"
        ? "/dashboard/mahasiswa"
        : "/dashboard/dosen";

    navigate(route);
  };

  return (
    <div className="app-shell">
      <div className="page">
        <div className="card login-card">
          <div className="card-header">
            <p className="eyebrow">Selamat Datang</p>
            <h1>LogicAuth</h1>
          </div>

          <div className="form-group">
            <input
              value={username}
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="primary-button" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
