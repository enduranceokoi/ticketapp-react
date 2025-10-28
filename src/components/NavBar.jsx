import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav style={{ background: "#222", padding: "1rem" }}>
      <Link to="/" style={{ color: "#fff", marginRight: "1rem" }}>Home</Link>
      <Link to="/auth/login" style={{ color: "#fff", marginRight: "1rem" }}>Login</Link>
      <Link to="/auth/signup" style={{ color: "#fff", marginRight: "1rem" }}>Signup</Link>
      <Link to="/dashboard" style={{ color: "#fff", marginRight: "1rem" }}>Dashboard</Link>
      <Link to="/tickets" style={{ color: "#fff" }}>Tickets</Link>
    </nav>
  );
}
