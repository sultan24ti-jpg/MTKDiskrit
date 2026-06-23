import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../services/supabase";
import CryptoJS from "crypto-js";

const allowedRoles = ["admin", "mahasiswa", "dosen"];

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    // 1. Ambil data user berdasarkan username
    const { data } = await supabase
      .from("users")
      .select("*")
      .eq("username", username)
      .single();

    if (!data) {
      alert("Username tidak ditemukan");
      return;
    }

    // 2. Enkripsi password inputan ke MD5 string
    const hashedPasswordInput = CryptoJS.MD5(password).toString();

    // 3. Cocokkan hash hasil enkripsi dengan password_hash di database
    if (data.password_hash !== hashedPasswordInput) {
      alert("Password salah!");
      return;
    }

    // 4. Cek apakah user aktif
    if (!data.is_active) {
      alert("Akun Anda tidak aktif!");
      return;
    }

    // 5. Validasi role
    const role = String(data.role || "").trim().toLowerCase();
    if (!allowedRoles.includes(role)) {
      alert("Role tidak valid. Gunakan Admin, Mahasiswa, atau Dosen.");
      return;
    }

    // 6. Simpan data user ke localStorage jika sukses login
    localStorage.setItem("user", JSON.stringify(data));

    // 7. Arahkan ke dashboard yang sesuai
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
          {/* Taruh ini di bawah tag <button> Login Anda */}
<p style={{ textAlign: "center", marginTop: "15px", fontSize: "14px" }}>
  Belum punya akun?{" "}
  <span 
    onClick={() => navigate("/register")} 
    style={{ color: "#7c4dff", cursor: "pointer", fontWeight: "bold" }}
  >
    Daftar di sini
  </span>
</p>
        </div>
      </div>
    </div>
  );
}