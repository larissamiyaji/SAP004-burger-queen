import React from "react";
import "../App.css"; 

const Login = () => {
  return (
  <div className="login">
    <h2 className="sub-title">Login</h2>
    <form>
      <label htmlFor="email" className="label">E-mail:</label>
      <br></br>
      <input className="input" type="text" name="email"></input>
      <br></br>
      <br></br>
      <label htmlFor="password" className="label">Senha:</label>
      <br></br>
      <input className="input" type="text" name="password"></input>
      <br></br>
      <input type="submit" className="form-button" value="Entrar"></input>
    </form>
    <p className="p-bottom">Ainda não possui conta? <a href="/Register">Cadastre-se</a></p>
  </div>
);} 

export default Login;
