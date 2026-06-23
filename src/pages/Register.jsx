import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../services/supabase";
import CryptoJS from "crypto-js";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("mahasiswa"); // default role

  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!username || !password) {
      alert("Username dan Password tidak boleh kosong!");
      return;
    }

    // 1. Enkripsi password ke MD5 string sebelum dikirim
    const hashedPassword = CryptoJS.MD5(password).toString();

    // 2. Insert data ke tabel 'users' di Supabase
    const { error } = await supabase
      .from("users")
      .insert([
        {
          username: username,
          password_hash: hashedPassword, // Otomatis terenkripsi di DB
          role: role,
          is_active: true
        }
      ]);

    if (error) {
      alert("Registrasi gagal: " + error.message);
    } else {
      alert("Akun berhasil dibuat!");
      navigate("/"); // Kembalikan ke halaman login
    }
  };

  return (
    <div className="app-shell">
      <div className="page">
        <div className="card login-card">
          <div className="card-header">
            <p className="eyebrow">Mulai Sekarang</p>
            <h1>Daftar Akun</h1>
          </div>

          <div className="form-group">
            <input
              value={username}
              placeholder="Username Baru"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            
            {/* Dropdown Pilihan Role */}
            <select 
              value={role} 
              onChange={(e) => setRole(e.target.value)}
              style={{ padding: "12px", borderRadius: "8px", border: "1px solid #ccc" }}
            >
              <option value="admin">Admin</option>
              <option value="mahasiswa">Mahasiswa</option>
              <option value="dosen">Dosen</option>
            </select>
          </div>

          <button className="primary-button" onClick={handleRegister}>
            Daftar
          </button>

          <p style={{ textAlign: "center", marginTop: "15px", fontSize: "14px" }}>
            Sudah punya akun?{" "}
            <span 
              onClick={() => navigate("/")} 
              style={{ color: "#7c4dff", cursor: "pointer", fontWeight: "bold" }}
            >
              Login di sini
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}