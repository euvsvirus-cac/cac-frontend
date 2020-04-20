import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleClick = () => {
        console.log('Login clicked...', this.state);

        const apiBaseUrl = "http://localhost:8080/api/";
        const payload = {
            "email": this.state.username,
            "password": this.state.password
        }

        axios.post(apiBaseUrl + 'login', payload)
            .then(function (response) {
                console.log(response);
                if (response.status === 200) {
                    alert(`Login successful ${response.data.token}`)
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
                </div>
            </div>
        );
    }
}
const style = {
    margin: 15,
};
export default Login;
