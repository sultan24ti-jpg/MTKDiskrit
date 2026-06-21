import Navbar from "../components/navbar";

export default function Analisis() {
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

          <section className="section-block">
            <h2>Kombinatorika OTP</h2>
            <p>10⁶ = 1.000.000 kombinasi</p>
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
