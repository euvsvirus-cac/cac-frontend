import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

import { AppContext } from "../context/AppContext";

class Login extends Component {
    static contextType = AppContext;

    constructor(props) {
        super(props);
        console.log(this.context);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleClick = () => {
        console.log('Login clicked...', this.state);

        const context = this.context;
        const props = this.props;

        const apiBaseUrl = "http://basehack1.informatik.uni-hamburg.de/api/";
        const payload = {
            "email": this.state.username,
            "password": this.state.password
        }

        axios.post(apiBaseUrl + 'login', payload)
            .then(function (response) {
                console.log(response);
                if (response.status === 200 && response.data.token) {
                    sessionStorage.setItem('jwtToken', response.data.token);
                    context.userHasAuthenticated(true);
                    console.log(context);
                    props.history.replace('/');
                } else {
                    alert(`Error ${response.data.code}`);
                }
            })
            .catch(function (error) {
                alert(`${error}`);
            });
    }

    render() {
        return (
            <div>
                <div>
                    <AppBar
                        position="static">
                        <Toolbar>
                            <Typography variant="h6">
                                Login
                            </Typography>
                        </Toolbar>
                    </AppBar>

                    <TextField
                        type="email"
                        label="Email"
                        margin="normal"
                        onChange={(event) => { this.setState({ username: event.target.value }) }}
                    />
                    <br />
                    <TextField
                        type="password"
                        margin="normal"
                        label="Password"
                        onChange={(event) => this.setState({ password: event.target.value })}
                    />
                    <br />
                    <Button variant="contained" color="primary" style={style} onClick={(event) => this.handleClick(event)}>Login</Button>

                    <Link to="/">Cancel</Link>
                </div>
            </div>
        );
    }
}
const style = {
    margin: 15,
};
export default withRouter(Login);
