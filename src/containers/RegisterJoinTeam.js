import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { BASE_URL } from '../constants';

import axios from 'axios';

const style = {
    margin: 15,
};

const introTextStyle = {
    marginTop: 16,
    textAlign: 'initial',
}

const RegisterJoinTeam = () => {

    const [invitationCode, setInvitationCode] = useState('demo-euvsvirus');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const history = useHistory();

    const handleSignUpClick = (event) => {
        const payload = {
            "invitationCode": invitationCode,
            "email": email,
            "fullName": name,
            "password": password,
        }

        axios.post(BASE_URL + 'register', payload)
            .then((response) => {
                if (response.status === 200) {
                    console.log(response.data);
                    history.replace('/login');
                } else {
                    alert(`Error ${response.data.code}`);
                }
            })
            .catch(function (error) {
                alert(`${error}`);
            });

        event.preventDefault();
    }

    return (
        <>
            <Typography variant="body1" gutterBottom style={introTextStyle}>
                You've been invited to join a team? Fill out this form
                to get started.
                <br /><br />
                Demo: Try out the <em>demo-euvsvirus</em> and get in touch with us.
            </Typography>

            <form onSubmit={handleSignUpClick}>
                <TextField
                    value={invitationCode}
                    required
                    style={{ width: '100%' }}
                    variant="outlined"
                    label="Invitation Code"
                    margin="normal"
                    onChange={(event) => { setInvitationCode(event.target.value) }}
                />

                <TextField
                    type="email"
                    value={email}
                    required
                    style={{ width: '100%' }}
                    variant="outlined"
                    label="Email"
                    margin="normal"
                    onChange={(event) => { setEmail(event.target.value) }}
                />

                <TextField
                    required
                    value={name}
                    style={{ width: '100%' }}
                    variant="outlined"
                    label="Full Name"
                    margin="normal"
                    onChange={(event) => { setName(event.target.value) }}
                />

                <TextField
                    type="password"
                    required
                    value={password}
                    style={{ width: '100%' }}
                    variant="outlined"
                    margin="normal"
                    label="Password"
                    onChange={(event) => { setPassword(event.target.value) }}
                />

                <TextField
                    type="password"
                    required
                    value={passwordConfirm}
                    style={{ width: '100%' }}
                    variant="outlined"
                    margin="normal"
                    label="Confirm Password"
                    onChange={(event) => { setPasswordConfirm(event.target.value) }}
                />
                <Button type="submit" variant="contained" color="primary" style={style}>Sign Up</Button>

                <Link to="/">Cancel</Link>
            </form>
        </>
    );
}

export default RegisterJoinTeam;
