import React from "react";
import Header from "./components/header";
import Kitchen from "./components/kitchen";
import Hall from "./components/hall";
import InfoBox from "./components/infoBox";
import "./App.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Register from "./components/register";
import Login from "./components/login";


export default function App() {
  return (
    <div>
      <Header />
      <Router>
        <div>
         
          <Switch>
            <Route path="/Register">
              <Register />
            </Route>
            <Route path="/Kitchen">
              <Kitchen />
            </Route>
            <Route path="/Hall">
              <Hall />
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </div>
        <div>
          <InfoBox />
        </div>
      </Router>
    </div>
  );
}
