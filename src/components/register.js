import React from "react";
import '../App.css';


const Login = () => (
    <div className='login'>
        <h2 >Cadastro</h2>
        <form >
        <label htmlFor="name">Nome:</label><br></br>
         <input type="text"  name="name" /><br></br>
         <br></br>
        <label htmlFor="email">E-mail:</label><br></br>
         <input type="text"  name="email" /><br></br>
         <br></br>
         <label htmlFor="password">Senha:</label><br></br>
         <input type="text"  name="password" />
         <br></br>
         <input type="submit" value="Submit" />
         <br></br>
         <input type="radio" name="hall" value="hall" />
         <label htmlFor="hall">Salão</label><br></br>
         <input type="radio" name="kitchen" value="kitchen" />
         <label htmlFor="kitchen">Cozinha</label><br></br>
        </form>
    </div>
);

export default Login;