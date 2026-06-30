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
            <p>U = {'{Admin, Dosen, Mahasiswa, Guest}'}</p>
          </section>

          <section className="section-block">
            <h2>Himpunan Status</h2>
            <p>S = {'{Aktif, Tidak Aktif}'}</p>
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
            <h2>4.3 Tabel Kebenaran Validasi</h2>
            <p style={{ marginBottom: "16px", fontSize: "0.95rem", color: "#555" }}>
              Berikut adalah tabel kebenaran lengkap sistem LogicAuth untuk 4 variabel utama (p, q, r, s) dengan 2<sup>4</sup> = 16 kombinasi:
            </p>
            
            <div className="table-wrapper" style={{ overflowX: "auto" }}>
              <table className="simple-table" style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ backgroundColor: "#20547a", color: "#ffffff" }}>
                    <th style={{ padding: "8px", border: "1px solid #ddd" }}>p<br/><span style={{ fontWeight: "normal", fontSize: "0.85rem" }}>(Username)</span></th>
                    <th style={{ padding: "8px", border: "1px solid #ddd" }}>q<br/><span style={{ fontWeight: "normal", fontSize: "0.85rem" }}>(Password Hash)</span></th>
                    <th style={{ padding: "8px", border: "1px solid #ddd" }}>r<br/><span style={{ fontWeight: "normal", fontSize: "0.85rem" }}>(is_active)</span></th>
                    <th style={{ padding: "8px", border: "1px solid #ddd" }}>s (Role Valid)</th>
                    <th style={{ padding: "8px", border: "1px solid #ddd" }}>LOGIN_SUCCESS</th>
                    <th style={{ padding: "8px", border: "1px solid #ddd" }}>Keterangan</th>
                  </tr>
                </thead>
                <tbody>
                  {truthTableData.map((row, index) => (
                    <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#ffffff" }}>
                      <td style={{ padding: "8px", textAlign: "center", border: "1px solid #ddd" }}>{row.p}</td>
                      <td style={{ padding: "8px", textAlign: "center", border: "1px solid #ddd" }}>{row.q}</td>
                      <td style={{ padding: "8px", textAlign: "center", border: "1px solid #ddd" }}>{row.r}</td>
                      <td style={{ padding: "8px", textAlign: "center", border: "1px solid #ddd" }}>{row.s}</td>
                      <td style={{ 
                        padding: "8px", 
                        textAlign: "center", 
                        border: "1px solid #ddd",
                        fontWeight: "bold",
                        color: row.status === "DENY" ? "#d32f2f" : "#1976d2"
                      }}>
                        {row.status}
                      </td>
                      <td style={{ padding: "8px", border: "1px solid #ddd", fontSize: "0.9rem" }}>{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p style={{ marginTop: "16px", fontSize: "0.95rem", lineHeight: "1.5" }}>
              Dari tabel kebenaran di atas, terlihat bahwa LOGIN_SUCCESS hanya bernilai True pada satu kondisi dari 16 kemungkinan, yaitu ketika keempat proposisi p, q, r, dan s semuanya bernilai True. Ini menunjukkan bahwa konjungsi (AND) dalam validasi login sangat ketat dan merupakan pilihan yang tepat untuk keamanan.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}