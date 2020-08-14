import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import firebase, { firebaseStore, firebaseAuth } from "../../firebase";
import Input from "../Input/Input";
import InfoBox from "../InfoBox/InfoBox";
import Button from "../Button/Button";
import { urls } from "../../Routes";
import "./Register.css";

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

  const cadastrar = (email, password, name, occupation) => {
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
              className="radio"
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
              className="radio"
              onChange={(e) => setoccupation(e.currentTarget.value)}
              required
            />
          </div>
        </div>
        <Button onClick={returnPage} name="Voltar" type="submit" />
        <Button onClick={prevent} name="Cadastrar" type="submit" />
      </form>
      <InfoBox
        kitchenText="Selecione a função Cozinha caso você faça parte da equipe de cozinheiros e ajudantes de cozinha."
        hallText="Selecione a função Salão caso você faça parte da equipe de garçons."
        titleKitchen="Cozinha"
        titleHall="Salão"
      />
    </div>
  );
};

export default Register;
