import React, { useState } from "react";
import "../App.css";
import Input from "./input";
import Button from "./Button";
// import firebase from "../firebase";
import { database } from "firebase";
import { useHistory } from "react-router-dom";
import { firebaseAuth } from "../firebase";
import { urls } from "../Routes";

const Login = () => {
  const history = useHistory();
  const [user, setUser] = useState({ email: "", password: "", occupation: "" });

  const handleClick = () => {
    firebaseAuth
      .signInWithEmailAndPassword(user.email, user.password, user.occupation)
      .then((credential) => {
        database
          .collection("users")
          .doc(credential.user.userId)
          .get()
          .then((querySnapshot) => {
            if (querySnapshot.data().occupation === "Cozinha") {
              history.push(urls.kitchen.path);
            } else {
              history.push(urls.hall.path);
            }
          });
      })
      .catch((error) => {
        alert(error.message);
      });
    console.log(handleClick);
  };

  return (
    <div className="login">
      <h2 className="sub-title">Login</h2>
      <form className="form-box">
          <Input
            type="email"
            id="input-email"
            placeholder="Digite o e-mail"
            value={user.email}
            onChange={(e) => {
              setUser((state) => ({ ...state, email: e.target.value }));
              e.persist();
            }}
            className="input"
          />
          <Input
            type="password"
            id="input-password"
            placeholder="Digite uma senha"
            value={user.password}
            onChange={(e) => {
              setUser((state) => ({ ...state, password: e.target.value }));
              e.persist();
            }}
          />
        <Button onClick={handleClick} name="Entrar" type="submit" />
        <p className="p-bottom">
          Ainda não possui conta? <a href="/Register">Cadastre-se</a>
        </p>
      </form>
    </div>
  );
};
export default Login;
