import React from "react";
import Header from "./components/header";
import Kitchen from "./components/kitchen";
import Hall from "./components/hall";
import InfoBox from "./components/infoBox";
import OrderDetails from "./components/orderCard.js";
import OrderModal from "./components/orderModal.js";
import Button, { ButtonLogout } from "./components/Button.js";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./components/register";
import Login from "./components/login";

// const logout = () => {
//   firebase
//     .auth()
//     .signOut()
//     .then(() => {
//       window.location.href = "/";
//       console.log("Logging out");
//     });
// };

export default function App() {
  return (
    <div>
      <Header />
      <Router>
        <div>
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
              <ButtonLogout name="Logout" />
              <Kitchen />
            </Route>

            {/* HALL */}
            <Route path="/Hall">
              <div className="hall-template text-align">
                <ButtonLogout name="Logout" />
                <div className="menu">
                  <Hall />
                  <OrderDetails />
                  <OrderModal className="hidden" />
                </div>
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
