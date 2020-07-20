import React from "react";
import '../App.css';


const Login = () => (
    <div className='login'>
        <h2 >Cadastro</h2>
        <form >
        <label for="name">Nome:</label><br></br>
         <input type="text"  name="name"></input><br></br>
         <br></br>
        <label for="email">E-mail:</label><br></br>
         <input type="text"  name="email"></input><br></br>
         <br></br>
         <label for="password">Senha:</label><br></br>
         <input type="text"  name="password"></input>
         <br></br>
         <input type="submit" value="Submit"></input>
         <br></br>
         <input type="radio" name="hall" value="hall">
         <label for="hall">Salão</label><br></br>
         <input type="radio" name="kitchen" value="kitchen">
         <label for="kitchen">Cozinha</label><br></br>
        </form>
       
    </div>
);

export default Login;