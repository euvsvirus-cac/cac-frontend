import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleClick = () => {
        console.log('Login clicked...');
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
                        label="Email"
                        margin="normal"
                        onChange={(event, newValue) => this.setState({ username: newValue })}
                    />
                    <br />
                    <TextField
                        type="password"
                        margin="normal"
                        label="Password"
                        onChange={(event, newValue) => this.setState({ password: newValue })}
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
