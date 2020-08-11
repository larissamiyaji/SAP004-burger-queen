import React, { useState, useEffect } from "react";
// import init from "../firebase"
import { useHistory } from "react-router-dom";
import { firebaseAuth } from "../firebase";
import { firebaseStore } from "../firebase";
import firebase from "../firebase";
import Input from "./Input";
import InfoBox from "./InfoBox";
import Button from "./Button";
import { urls } from "../Routes";
import "../App.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [occupation, setoccupation] = useState("");
  const returnPage = (event) => {
    event.preventDefault();
    window.location.href = "/";
  };

  const history = useHistory();

  useEffect(() => {}, [name, email, password, occupation, history]);

  const prevent = (event) => {
    event.preventDefault();
    cadastrar(email, password, name, occupation);
  };

  const cadastrar = (email, password, name, occupation, userId) => {
    firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        firebaseStore
          .collection("users")
          .doc(firebaseAuth.currentUser.uid)
          .set({
            email: email,
            password: password,
            Name: name,
            occupation: occupation,
            userUid: firebase.auth().currentUser.uid,
          });
        console.log(firebase.auth().currentUser.uid);
      })
      .then(() => {
        if (occupation === "Cozinha") {
          history.push(urls.kitchen.path);
        } else {
          history.push(urls.hall.path);
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <h2 className="sub-title">Cadastrar</h2>
      <form className="form-box">
        <Input
          className="input"
          type="text"
          id="input-name"
          placeholder="Digite seu nome"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
          required
        />
        <Input
          className="input"
          type="email"
          id="input-email"
          placeholder="Digite o e-mail"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          required
        />
        <Input
          className="input"
          type="password"
          id="input-password"
          placeholder="Digite uma senha"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
          required
        />
        <div className="occupation">
          <label className="label">Escolha sua função:</label>
          <div className="radio-buttons occupation-options">
            <label className="label">Cozinha</label>
            <Input
              type="radio"
              id="input-area-cozinha"
              name="area"
              value="Cozinha"
              onChange={(e) => setoccupation(e.currentTarget.value)}
              required
            />
          </div>
          <div className="radio-buttons occupation-options">
            <label className="label">Salão</label>
            <Input
              type="radio"
              id="input-area-salao"
              name="area"
              value="Salão"
              onChange={(e) => setoccupation(e.currentTarget.value)}
              required
            />
          </div>
        </div>
        <Button onClick={returnPage} name="Voltar" type="submit" />
        <Button onClick={prevent} name="Cadastrar" type="submit" />
      </form>
      <InfoBox
        kitchenText="Para ser direcionado para a página da Cozinha, selecione
                  cozinha nas opções acima."
        hallText="Para ser direcionado para a página do Salão, selecione
                  salão nas opções acima."
        titleKitchen="Cozinha"
        titleHall="Salão"
      />
    </div>
  );
};

export default Register;
