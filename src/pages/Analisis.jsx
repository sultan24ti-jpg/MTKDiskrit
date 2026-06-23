import { useState } from "react";
import Navbar from "../components/navbar";

export default function Analisis() {
  // Membuat state untuk menyimpan panjang digit password (default: 6)
  const [digit, setDigit] = useState(6);

  // Menghitung total kombinasi secara dinamis (10 pangkat digit)
  const totalKombinasi = Math.pow(10, digit);

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

          {/* Bagian Kombinatorika Password yang Diubah */}
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

          <section className="section-block">
            <h2>Tabel Kebenaran</h2>
            <div className="table-wrapper">
              <table className="simple-table">
                <thead>
                  <tr>
                    <th>U</th>
                    <th>P</th>
                    <th>A</th>
                    <th>O</th>
                    <th>R</th>
                    <th>Login</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                    <td>1</td>
                    <td>0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}