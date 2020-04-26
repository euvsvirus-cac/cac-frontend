import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

import { AppContext } from "../context/AppContext";
import { BASE_URL } from '../constants';

const style = {
    margin: 15,
};

class Login extends Component {
    static contextType = AppContext;

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleSuccessfulLogin = (token) => {
        sessionStorage.setItem('jwtToken', token);
        this.context.userHasAuthenticated(true);
        this.props.history.replace('/');
    }

    handleClick = (event) => {
        const me = this;

        const payload = {
            "email": this.state.username,
            "password": this.state.password
        }

        axios.post(BASE_URL + 'login', payload)
            .then((response) => {
                if (response.status === 200 && response.data.token) {
                    me.handleSuccessfulLogin(response.data.token);
                } else {
                    alert(`Error ${response.data.code}`);
                }
            })
            .catch(function (error) {
                alert(`${error}`);
            });

        event.preventDefault();
    }

    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: 40 }}>
                <Paper style={{ width: 240, padding: 20 }}>

                    <Typography gutterBottom variant="h5" component="h2">
                        Login
                    </Typography>

                    <form onSubmit={this.handleClick}>
                        <TextField
                            type="email"
                            required
                            variant="outlined"
                            label="Email"
                            margin="normal"
                            onChange={(event) => { this.setState({ username: event.target.value }) }}
                        />

                        <TextField
                            type="password"
                            required
                            variant="outlined"
                            margin="normal"
                            label="Password"
                            onChange={(event) => this.setState({ password: event.target.value })}
                        />

                        <Button type="submit" variant="contained" color="primary" style={style}>Login</Button>

                        <Link to="/">Cancel</Link>
                    </form>
                </Paper>
            </div>
        );
    }
}

export default withRouter(Login);
