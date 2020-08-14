import React, { useState } from "react";
import { firebaseAuth, firebaseStore } from "../../firebase";
import { urls } from "../../Routes";
import { useHistory } from "react-router-dom";
import Input from "../Input/Input";
import Button from "../Button/Button";
import InfoBox from "../InfoBox/InfoBox";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  function handleLogin() {
    const userId = firebaseAuth.currentUser.uid;
    firebaseStore
      .collection("users")
      .doc(userId)
      .get()
      .then((doc) => {
        if (doc.data().occupation === "Salão") {
          history.push(urls.hall.path);
        } else {
          history.push(urls.kitchen.path);
        }
      })
      .catch((error) => {
        alert(error.message);
      });
    console.log("User uid:", userId);
  }

  function handleClick(e) {
    e.preventDefault();
    signIn(email, password);
  }

  function signIn(email, password) {
    firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        handleLogin();
        console.log("LOGOU");
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode);
        alert(errorMessage);
      });
  }

  return (
    <div className="login">
      <h2 className="sub-title">Login</h2>
      <form className="form-box">
        <Input
          className="input"
          type="text"
          id="input-email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          required
        />
        <Input
          className="input"
          type="password"
          id="input-password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
          required
        />
        <Button onClick={handleClick} name="Entrar" />

        <p className="p-bottom">
          Ainda não possui conta? <a href="/Register">Cadastre-se</a>
        </p>
      </form>
      <InfoBox
        titleBurgerQueen="Sobre Burger Queen"
        aboutBurgerQueen="Burger Queen é um app voltado para os funcionários do restaurante Outer World
         "
      />
    </div>
  );
}

export default Login;
