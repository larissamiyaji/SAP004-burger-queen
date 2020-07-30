import React from "react";
import firebase from "firebase";
import Header from "./components/header";
import Hall from "./components/hall";
import InfoBox from "./components/infoBox";
import Kitchen from "./components/kitchen";
import Login from "./components/login";
import OrderDetails from "./components/orderCard.js";
import OrderModal from "./components/orderModal.js";
import Register from "./components/register";
import ButtonLogout from "./components/LogoutButton.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu"

const logout = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      window.location.href = "/";
      console.log("Logging out");
    });
};

export default function App() {
  return (
    <div>
      <Header />
      <Router>
        <div>
          <Switch>
            {/* REGISTER */}
            <Route path="/Register">
              <Register />
              <InfoBox>
                <section className="description">
                  <div className="kitchen-hall">
                    <h3>Cozinha</h3>
                    <p>
                      Para ser direcionado para a página da Cozinha, selecione
                      cozinha nas opções acima.
                    </p>
                    <h3>Salão</h3>
                    <p>
                      Para ser direcionado para a página do Salão, selecione
                      salão nas opções acima.
                    </p>
                  </div>
                </section>
              </InfoBox>
            </Route>
            {/* KITCHEN */}
            <Route path="/Kitchen">
              <ButtonLogout onClick={logout}>Logout</ButtonLogout>
              <Kitchen />
            </Route>

            {/* HALL */}
            <Route path="/Hall">
              <Menu />
              <div className="hall-template text-align">
                <ButtonLogout onClick={logout}>Logout</ButtonLogout>
                <div className="menu">
                  <Hall />
                  <OrderDetails />
                  <OrderModal className="hidden" />
                </div>
              </div>
            </Route>

            {/* LOGIN */}
            <Route path="/">
              <Login />
              <InfoBox>
                <section className="description">
                  <div className="burger-queen-description">
                    <h3>Sobre Burger Queen</h3>
                    <p>
                      Lorem Ipsum é simplesmente uma simulação de texto da
                      indústria tipográfica e de impressos, e vem sendo
                      utilizado desde o século XVI
                    </p>
                  </div>
                </section>
              </InfoBox>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
