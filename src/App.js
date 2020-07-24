import React from "react";
import Header from "./components/header";
import Kitchen from "./components/kitchen";
import Hall from "./components/hall";
import InfoBox from "./components/infoBox";
import OrderDetails from "./components/orderCard.js";
import OrderModal from "./components/orderModal.js";
import "./App.css";
//  import firebase from "./firebase.js";
import {
  BrowserRouter as Router,
  Switch,
  Route /*Link*/,
} from "react-router-dom";
import Register from "./components/register";
import Login from "./components/login";

export default function App() {
  return (
    <div>
      <Header />
      <Router>
        <div>
          {/*<nav className="navbar">
            <ul className="navbar-options">
              <li>
                <Link to="/" className="link-style">Login</Link>
              </li>
              <li>
                <Link to="/Register" className="link-style">Cadastro</Link>
              </li>
            </ul>
          </nav>*/}

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            {/* REGISTER */}
            <Route path="/Register">
              <div>
                <Register />
                <InfoBox />
              </div>
            </Route>
            {/* KITCHEN */}
            <Route path="/Kitchen">
              <Kitchen />
            </Route>

            {/* HALL */}
            <Route path="/Hall">
              <div className="hall-template text-align">
                <Hall />
                <OrderDetails />
                <OrderModal />
              </div>
            </Route>

            {/* LOGIN */}
            <Route path="/">
              <div>
                <Login />
                <InfoBox />
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
