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
                    <Link to="/connect">Chat</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path="/connect">
                    <Chat />
                </Route>
            </Switch>
        </Router>
    )
}

function Chat() {
    return (
      <div>
        <h2>Chat</h2>
      </div>
    );
}