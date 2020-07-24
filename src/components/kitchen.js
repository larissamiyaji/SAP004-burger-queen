import React, { Component } from "react";
import '../App.css';
import Button from './Button';



class Kitchen extends Component {
    
    render()
    {
        const returnPage = (event) => {
            event.preventDefault();
            window.location.href = "/";
          };
        return(
          <div><h1>Logou</h1>
          <Button onClick={returnPage} name="voltar" type="submit" />
    </div> 
        )
}}

export default Kitchen;