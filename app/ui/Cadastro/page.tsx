"use client";
import React, { useState } from "react";
import axios from "axios";
import styles from "../ui.module.css";

export default function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [username, setUsername] = useState("");
  const [dataNasc, setDataNasc] = useState("");
  const [tipo, setTipo] = useState("user"); // Tipo de usuário, default "user"
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const calculateAge = (birthDate: string | number | Date) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDifference = today.getMonth() - birthDateObj.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDateObj.getDate())
    ) {
      age--;
    }
    return age;
  };

  const handleCadastro = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    const idade = calculateAge(dataNasc);

    if (idade < 18) {
      alert(
        `Foi identificado que você é menor de idade, possui apenas ${idade} anos. Sempre peça ajuda de um responsável.`
      );
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/register", {
        email,
        senha,
        username,
        data_nasc: dataNasc,
        idade, // A idade é calculada pelo sistema
        tipo,
      });
    
      if (response.status === 201) {
        setSuccessMessage("Usuário registrado com sucesso!");
        setErrorMessage("");
      } else {
        setErrorMessage("Erro ao registrar usuário. Por favor, tente novamente.");
        setSuccessMessage("");
      }
    } catch (error) {
      if (error instanceof Error) {
        if (axios.isAxiosError(error)) {
          // Verifica se é um erro do Axios
          if (error.response && error.response.data.message) {
            if (error.response.data.message.includes("E-mail ou nome de usuário já está em uso")) {
              setErrorMessage("E-mail ou nome de usuário já está em uso.");
              alert("Usuário ou e-mail já se encontra em nosso banco de dados.");
            } else {
              setErrorMessage("Ocorreu um erro ao tentar registrar. Por favor, tente novamente.");
            }
          } else {
            console.error("Erro ao registrar usuário:", error.message);
            setErrorMessage("Ocorreu um erro ao tentar registrar. Por favor, tente novamente.");
          }
        } else {
          console.error("Erro inesperado:", error.message);
          setErrorMessage("Ocorreu um erro inesperado. Por favor, tente novamente.");
        }
      } else {
        console.error("Erro desconhecido:", error);
        setErrorMessage("Ocorreu um erro desconhecido. Por favor, tente novamente.");
      }
      setSuccessMessage("");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.loginLogo}>Cadastro</h1>
        <form onSubmit={handleCadastro}>
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
          <div className={styles.formGroup}>
            <label htmlFor="userName">Nome de Usuário</label>
            <input
              className={styles.formControl}
              id="userName"
              type="text"
              placeholder="Nome de Usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="userDataNasc">Data de Nascimento</label>
            <input
              className={styles.formControl}
              id="userDataNasc"
              type="date"
              value={dataNasc}
              onChange={(e) => setDataNasc(e.target.value)}
              required
            />
          </div>
          {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
          {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
          <button type="submit" className={styles.submitBtn}>Cadastrar</button>
        </form>
        <p className={styles.loginLink}>
          Já possui uma conta? <a href="/ui/login">Faça login</a>
        </p>
      </div>
    </div>
  );
}
