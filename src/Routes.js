import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/home/Home";
import EditProfile from "./containers/EditProfile";
import LandingPage from "./containers/LandingPage";
import Login from './containers/Login'
import NotFound from "./containers/NotFound";
import Register from './containers/Register'

import { useAppContext } from './context/AppContext';

export default function Routes() {
    const { isAuthenticated } = useAppContext();
    return (
        <Switch>
            <Route exact path="/">
                {isAuthenticated ?
                    <Home /> :
                    <LandingPage />
                }
            </Route>

            {isAuthenticated &&
                <Route exact path="/profile">
                    <EditProfile />
                </Route>
            }

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
