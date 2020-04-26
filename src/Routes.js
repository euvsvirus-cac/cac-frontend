import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Login from './containers/Login'
import NotFound from "./containers/NotFound";
import Register from './containers/Register'

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route exact path="/register">
                <Register />
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    );
}
