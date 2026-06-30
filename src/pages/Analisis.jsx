import { useState } from "react";
import Navbar from "../components/navbar";

export default function Analisis() {
  // Membuat state untuk menyimpan panjang digit password (default: 6)
  const [digit, setDigit] = useState(6);

  // Menghitung total kombinasi secara dinamis (10 pangkat digit)
  const totalKombinasi = Math.pow(10, digit);

  // Data Tabel Kebenaran dari Foto (16 Kombinasi)
  const truthTableData = [
    { p: "F", q: "F", r: "F", s: "F", status: "DENY", note: "Username tidak ditemukan" },
    { p: "F", q: "F", r: "F", s: "T", status: "DENY", note: "Username tidak ditemukan" },
    { p: "F", q: "F", r: "T", s: "F", status: "DENY", note: "Username tidak ditemukan" },
    { p: "F", q: "F", r: "T", s: "T", status: "DENY", note: "Username tidak ditemukan" },
    { p: "F", q: "T", r: "F", s: "F", status: "DENY", note: "Username tidak ditemukan" },
    { p: "F", q: "T", r: "F", s: "T", status: "DENY", note: "Username tidak ditemukan" },
    { p: "F", q: "T", r: "T", s: "F", status: "DENY", note: "Username tidak ditemukan" },
    { p: "F", q: "T", r: "T", s: "T", status: "DENY", note: "Username tidak ditemukan" },
    { p: "T", q: "F", r: "F", s: "F", status: "DENY", note: "Password salah" },
    { p: "T", q: "F", r: "F", s: "T", status: "DENY", note: "Password salah" },
    { p: "T", q: "F", r: "T", s: "F", status: "DENY", note: "Password salah" },
    { p: "T", q: "F", r: "T", s: "T", status: "DENY", note: "Password salah" },
    { p: "T", q: "T", r: "F", s: "F", status: "DENY", note: "Akun tidak aktif" },
    { p: "T", q: "T", r: "F", s: "T", status: "DENY", note: "Akun tidak aktif" },
    { p: "T", q: "T", r: "T", s: "F", status: "DENY", note: "Role tidak valid" },
    { p: "T", q: "T", r: "T", s: "T", status: "GRANT ✓", note: "Login Berhasil semua proposisi True" },
  ];

  return (
    <div className="app-shell">
      <div className="page">
        <Navbar />

        <div className="card">
          <div className="card-header">
            <p className="eyebrow">Analisis</p>
            <h1>Matematika Diskrit</h1>
          </div>

          <section className="section-block">
            <h2>Himpunan User</h2>
            <p>s = {'{Admin, Dosen, Mahasiswa}'}</p>
          </section>

          <section className="section-block">
            <h2>Himpunan Status</h2>
            <p>r = {'{Aktif, Tidak Aktif}'}</p>
          </section>

          {/* Bagian Kombinatorika Password */}
          <section className="section-block">
            <h2>Kombinatorika Password</h2>
            <div style={{ marginBottom: "12px", display: "flex", gap: "8px", alignItems: "center" }}>
              <label htmlFor="digit-input">Jumlah Digit Password:</label>
              <input
                id="digit-input"
                type="number"
                min="1"
                max="15" 
                value={digit}
                onChange={(e) => setDigit(Number(e.target.value))}
                style={{
                  padding: "4px 8px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  width: "60px",
                  backgroundColor: "transparent",
                  color: "inherit"
                }}
              />
            </div>
            <p>
              10<sup>{digit}</sup> = {totalKombinasi.toLocaleString('id-ID')} kombinasi
            </p>
          </section>

          {/* Bagian Tabel Kebenaran Sesuai Foto */}
          <section className="section-block">
            <h2>Tabel Kebenaran Validasi</h2>
            <p style={{ marginBottom: "16px", fontSize: "0.95rem", color: "#555" }}>
              Berikut adalah tabel kebenaran lengkap sistem LogicAuth untuk 4 variabel utama (p, q, r, s) dengan 2<sup>4</sup> = 16 kombinasi:
            </p>
            
            <div className="table-wrapper">
              <table className="simple-table">
                <thead>
                  <tr>
                    <th>p<br/><span className="table-subtitle">(Username)</span></th>
                    <th>q<br/><span className="table-subtitle">(Password Hash)</span></th>
                    <th>r<br/><span className="table-subtitle">(is_active)</span></th>
                    <th>s<br/><span className="table-subtitle">(Role Valid)</span></th>
                    <th>LOGIN_SUCCESS</th>
                    <th>Keterangan</th>
                  </tr>
                </thead>
                <tbody>
                  {truthTableData.map((row, index) => (
                    <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#ffffff" }}>
                      <td className="center-cell">{row.p}</td>
                      <td className="center-cell">{row.q}</td>
                      <td className="center-cell">{row.r}</td>
                      <td className="center-cell">{row.s}</td>
                      <td className={`status-cell ${row.status === "DENY" ? "status-deny" : "status-grant"}`}>
                        {row.status}
                      </td>
                      <td className="note-cell">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p style={{ marginTop: "16px", fontSize: "0.95rem", lineHeight: "1.5" }}>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}