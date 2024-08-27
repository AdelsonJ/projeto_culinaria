
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./ui.module.css"; // Importar o CSS para estilização

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        senha,
      });

      // Verifica se o login foi bem-sucedido
      if (response.data.success) {
        // Armazena o token no localStorage (ou cookies)
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard"); // Redireciona para a página principal após o login
      } else {
        setErrorMessage("Credenciais inválidas. Por favor, tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      setErrorMessage("Ocorreu um erro ao tentar fazer login. Por favor, tente novamente.");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="login-logo">Login</h1>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="userEmail">E-mail</label>
            <input
              className="form-control"
              id="userEmail"
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="userPassword">Senha</label>
            <input
              className="form-control"
              id="userPassword"
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit" className="submit-btn">Entrar</button>
        </form>
        <p>
          <a href="/RecuperarSenha">Esqueceu a senha?</a>
        </p>
        <p className="signup-link">
          Não possui um usuário? <a href="/Cadastro">Cadastre-se agora</a>
        </p>
      </div>
    </div>
  );
}
