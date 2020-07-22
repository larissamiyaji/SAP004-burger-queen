import React from "react";
import '../App.css';


class Option extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'salao'};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('Você escolheu: ' + this.state.value);
        event.preventDefault();
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              <label htmlfor="name">Nome:</label>
              <br></br>
              <input type="text" name="name"></input>
              <br></br>
              <br></br>
              <label htmlfor="email">E-mail:</label>
              <br></br>
              <input type="text" name="email"></input>
              <br></br>
              <br></br> 
              <label htmlfor="password">Senha:</label>
              <br></br>
              <input type="text" name="password"></input>
              <br></br>
              <br></br>
              Escolha sua area de trabalho:
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="cozinha">Cozinha</option>
                <option value="salao">Salão</option>
              </select>
            </label>
            <br></br>
            <br></br>
            <input type="submit" value="Submit" />
          </form>
        );
      }
    }
    
    
  export default Option;