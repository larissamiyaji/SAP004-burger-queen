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
              <label htmlFor="name" className="label">Nome:</label>
              <br></br>
              <input className="input" type="text" name="name"></input>
              <br></br>
              <br></br>
              <label htmlFor="email" className="label">E-mail:</label>
              <br></br>
              <input className="input" type="email" name="email"></input>
              <br></br>
              <br></br> 
              <label htmlFor="password" className="label">Senha:</label>
              <br></br>
              <input className="input" type="password" name="password"></input>
              <br></br>
              <br></br>
              <label className="label">Escolha sua área de trabalho:</label>
              <select value={this.state.value} onChange={this.handleChange} className="select">
                <option value="cozinha">Cozinha</option>
                <option value="salao">Salão</option>
              </select>
            </label>
            <br></br>
            <br></br>
            <input type="submit" value="Cadastrar" className="form-button" />
          </form>
        );
      }
    }
    
    
  export default Option;