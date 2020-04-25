import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

import { AppContext } from "../context/AppContext";

const style = {
    margin: 15,
};

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

    handleClick = (event) => {
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
