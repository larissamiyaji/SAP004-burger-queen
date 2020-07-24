import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { firebaseAuth } from '../firebase';
import { firebaseStore } from '../firebase';
import Input from './input';
import Button from './Button';
import { urls } from '../Routes';
import "../App.css";


  const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [ocupation, setOcupation] = useState('');
  const returnPage = (event) => {
    event.preventDefault();
    window.location.href = "/";
  };

  const history = useHistory();

  useEffect(() => {}, [name, email, password, ocupation, history]);

  const prevent = (event) => {
    event.preventDefault();
    cadastrar(email, password, name, ocupation);
  };

  const cadastrar = (email, password, name, ocupation) => {
    firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        firebaseStore
          .collection('users')
          .doc(firebaseAuth.currentUser.uid)
          .set({
            displayName: name,
            Ocupation: ocupation,
            email: email,
            password: password,
            userId: firebaseAuth.currentUser.uid,
          });
      })
      .then(() => {
        if (ocupation === 'Cozinha') {
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
    <form >
      <Input
        type="text"
        id="input-name"
        placeholder="Digite seu Nome"
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
        required
      /><br></br>
      <Input
        type="email"
        id="input-email"
        placeholder="Digite o e-mail"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
        required
      /><br></br>
      <Input
        type="password"
        id="input-password"
        placeholder="Digite uma senha"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
        required
      />
      <div>
        <label >Cozinha</label>
        <Input
          type="radio"
          id="input-area-cozinha"
          name="area"
          value="Cozinha"
          onChange={(e) => setOcupation(e.currentTarget.value)}
          required
        />
        <label >Salão</label>
        <Input
          type="radio"
          id="input-area-salao"
          name="area"
          value="Salão"
          onChange={(e) => setOcupation(e.currentTarget.value)}
          required
        />
      </div>
      <Button  onClick={prevent} name="Cadastrar" type="submit" />
      <Button onClick={returnPage} name="voltar" type="submit" />
     
    </form>
    </div>
  );
};

export default Register;