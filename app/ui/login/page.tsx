"use client";
import React, { useState } from "react";
import axios from "axios";
import styles from "../ui.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        senha,
      });
    
      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        const username = response.data.username; // Obtém o nome de usuário da resposta
        alert(`Login Realizado com Sucesso, seja bem-vindo: ${username}`);
        window.location.href = "/";
      } else {
        setErrorMessage("Credenciais inválidas. Por favor, tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      setErrorMessage("Ocorreu um erro ao tentar fazer login. Por favor, tente novamente.");
    }
    
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.loginLogo}>Login</h1>
        <form onSubmit={handleLogin}>
          <div className={styles.formGroup}>
            <label htmlFor="userEmail">E-mail</label>
            <input
              className={styles.formControl}
              id="userEmail"
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="userPassword">Senha</label>
            <input
              className={styles.formControl}
              id="userPassword"
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>
          {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
          <button type="submit" className={styles.submitBtn}>Entrar</button>
        </form>
        <p className={styles.signupLink}>
          Não possui um usuário? <a href="/ui/Cadastro">Cadastre-se agora</a>
        </p>
      </div>
    </div>
  );
}
