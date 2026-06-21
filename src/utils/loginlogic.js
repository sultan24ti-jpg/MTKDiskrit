import { supabase } from "../services/supabase";

/**
 * Fungsi untuk memproses login langsung ke database Supabase
 */
export const handleLogin = async (username, password, inputOtp) => {
  try {
    // 1. Ambil data user berdasarkan username dari tabel 'users'
    const { data: user, error } = await supabase
      .from("users")
      .select("*")
      .eq("username", username)
      .single(); // Mengembalikan 1 data atau null jika tidak ada

    // 2. Cek apakah username terdaftar
    if (error || !user) {
      alert("Username tidak ditemukan");
      return null;
    }

    // 3. Cek apakah password cocok dengan kolom 'password_hash' di Supabase
    if (user.password_hash !== password) {
      alert("Password salah!");
      return null;
    }

    // 4. Cek status keaktifan akun (is_active)
    if (!user.is_active) {
      alert("Akun Anda tidak aktif!");
      return null;
    }

    // 5. Cek apakah OTP sesuai dengan di database (opsional, jika form login pakai input OTP)
    if (inputOtp && user.otp !== inputOtp) {
      alert("Kode OTP salah!");
      return null;
    }

    // 6. Jika semua lolos, simpan data ke localStorage untuk sesi login
    localStorage.setItem("user", JSON.stringify(user));
    alert("Login Berhasil!");
    
    return user; // mengembalikan data user beserta rolenya

  } catch (err) {
    console.error("Login error:", err);
    alert("Terjadi kesalahan sistem.");
    return null;
  }
};

/**
 * Fungsi validasi lama kamu (tetap dipertahankan jika masih dibutuhkan file lain)
 */
export const validateLogin = (usernameValid, passwordValid, accountActive, otpValid, roleValid) => {
  return usernameValid && passwordValid && accountActive && otpValid && roleValid;
};