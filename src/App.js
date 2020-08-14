import React from "react";
import firebase from "./firebase";
import Header from "./components/Header/Header";
import Hall from "./components/Hall/Hall";
import Kitchen from "./components/Kitchen/Kitchen";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import ButtonLogout from "./components/LogoutButton/LogoutButton";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const logout = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      window.location.href = "/";
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
            </Route>
            {/* KITCHEN */}
            <Route path="/Kitchen">
              <ButtonLogout onClick={logout} />
              <Kitchen />
            </Route>

            {/* HALL */}
            <Route path="/Hall">
              <div className="hall-template text-align">
                <ButtonLogout onClick={logout} />
                <div className="menu">
                  <Hall />
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
