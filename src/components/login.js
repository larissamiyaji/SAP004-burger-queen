import React from "react";
import '../App.css';



const Login = () => (
    <div className='login'>
        <h2 >Login</h2>
        <form >
        <label htmlfor="email">E-mail:</label><br></br>
         <input className='input' type="text"  name="email"></input><br></br>
         <br></br>
         <label htmlfor="password">Senha:</label><br></br>
         <input type="text"  name="password"></input>
         <br></br>
         <input type="submit" value="Submit"></input>
        </form>
      
    </div>
);

export default Login;