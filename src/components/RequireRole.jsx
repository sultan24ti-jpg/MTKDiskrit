import { Navigate } from "react-router-dom";

const normalizeRole = (role) =>
  String(role || "").trim().toLowerCase();

export default function RequireRole({ role, children }) {
  const storedUser = localStorage.getItem("user");
  if (!storedUser) {
    return <Navigate to="/" replace />;
  }

  const user = JSON.parse(storedUser);
  if (normalizeRole(user.role) !== normalizeRole(role)) {
    return <Navigate to="/" replace />;
  }

  return children;
}
