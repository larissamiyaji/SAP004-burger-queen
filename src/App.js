import React from "react";
import firebase from "./firebase";
import Header from "./components/Header/Header";
import Hall from "./components/Hall/Hall";
import Kitchen from "./components/Kitchen/Kitchen";
import Login from "./components/Login/Login";
import OrderModal from "./components/OrderModal";
import Register from "./components/Register/Register";
import ButtonLogout from "./components/LogoutButton/LogoutButton";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Menu from "./components/Menu";
// import init from "./firebase"


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
    <div className="main-background">
      <Header />
      <Router>
        <div>
          <Switch>
            {/* REGISTER */}
            <Route path="/Register">
              <Register />
            </Route>
            {/* KITCHEN */}
            <Route path="/Kitchen">
              <ButtonLogout onClick={logout} /*name="Sair"*/ />
              <Kitchen />
            </Route>

            {/* HALL */}
            <Route path="/Hall">
              {/* <Menu /> */}
              <div className="hall-template text-align">
                <ButtonLogout onClick={logout} /*name="Sair"*/ />
                <div className="menu">
                  <Hall />
                  <OrderModal className="hidden" />
                </div>
              </div>
            </Route>

            {/* LOGIN */}
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
