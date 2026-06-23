import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register"; // 1. Tambahkan import Register di sini
import AdminDashboard from "./pages/AdminDashboard";
import MahasiswaDashboard from "./pages/MahasiswaDashboard";
import DosenDashboard from "./pages/DosenDashboard";
import Analisis from "./pages/Analisis";
import RequireRole from "./components/RequireRole";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        
        {/* 2. Tambahkan route untuk halaman registrasi */}
        <Route path="/register" element={<Register />} /> 
        
        <Route
          path="/dashboard/admin"
          element={
            <RequireRole role="Admin">
              <AdminDashboard />
            </RequireRole>
          }
        />
        <Route
          path="/dashboard/mahasiswa"
          element={
            <RequireRole role="Mahasiswa">
              <MahasiswaDashboard />
            </RequireRole>
          }
        />
        <Route
          path="/dashboard/dosen"
          element={
            <RequireRole role="Dosen">
              <DosenDashboard />
            </RequireRole>
          }
        />
        <Route path="/analisis" element={<Analisis />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;