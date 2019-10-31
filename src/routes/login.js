import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Login() {

    return (
        <Router>
            <ul>
                <li>
                    <Link to="/login">Se connecter</Link>
                </li>
                    <br></br>
                <li>    
                    <Link to="/">Accueil</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path="/login">
                    <Log />
                </Route>
                <Route exact path="/">
                    <Accueil />
                </Route>    
            </Switch>
        </Router>
    )
}

function Log() {
    return (
        <div>
        <p>Username</p>

        <input type="text"></input>
  
        <p>Password</p>
  
        <input type="text"></input>

        <br></br>

        <button type="submit">Se connecter</button>

        </div>
    );
}

function Accueil() {

    return (
        <div></div>
    )

}