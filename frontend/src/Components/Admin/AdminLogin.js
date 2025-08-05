import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import carrepairtwo from "../../assets/carrepairtwo.jpg";
import styles from "./AdminLogin.module.css";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "prtiwary.ece@gmail.com" && password === "golU@1234") {
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div
      className={styles.loginContainer}
      style={{ backgroundImage: `url(${carrepairtwo})` }}
    >
      <div className={styles.overlay}></div>
      <h2 className={styles.heading}>Admin Login</h2>
      <form onSubmit={handleLogin} className={styles.loginForm}>
        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
