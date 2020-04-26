import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import StarIcon from '@material-ui/icons/Stars';
import Typography from '@material-ui/core/Typography';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Switch from '@material-ui/core/Switch';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

import axios from 'axios';

import { useAppContext } from '../../context/AppContext';
import { BASE_URL } from '../../constants';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 12,
        display: 'block',
        minWidth: theme.spacing(42),
        maxWidth: theme.spacing(60),
        textAlign: 'initial',
    },
    profileAvatar: {
        width: theme.spacing(9),
        height: theme.spacing(9),
        marginRight: 12,
    },
    ratingGold: {
        width: theme.spacing(5),
        height: theme.spacing(5),
        marginRight: theme.spacing(1),
        color: '#af9500',
    },
    ratingSilver: {
        width: theme.spacing(5),
        height: theme.spacing(5),
        marginRight: theme.spacing(1),
        color: '#b4b4b4',
    },
    ratingBronze: {
        width: theme.spacing(5),
        height: theme.spacing(5),
        marginRight: theme.spacing(1),
        color: '#a05f28',
    },
}));

export default function Profile() {

    const classes = useStyles();
    const { token } = useAppContext();

    const [data, setData] = useState({ fullName: '', title: '', skills: [] });
    const [status, setStatus] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(BASE_URL + 'user/me', { params: {}, headers: { 'Authorization': `Bearer ${token}` } });
            setData(result.data);
            setStatus(!!result.data.available);
        }
        fetchData();
    }, [token]);

    const toggleStatus = () => {
        const available = !status;
        setStatus(available);
        axios.put(BASE_URL + 'user/me/status', { available }, { params: {}, headers: { 'Authorization': `Bearer ${token}` } })
    }

    return (
        <div className={classes.root}>
            { /* Avatar + Profile name etc. */}
            <div style={{ display: 'flex', marginBottom: 8 }}>
                <Avatar variant="square" src="/static/images/avatar/1.jpg" className={classes.profileAvatar} />

                <div style={{ display: 'block' }}>
                    <Typography variant="h5">
                        {data.fullName}&nbsp;
                    </Typography>
                    <Typography variant="body1">
                        Senior Software Engineer
                    </Typography>

                    <Link to="/profile">Edit Profile</Link>
                </div>
            </div>

            { /* Status row */}
            < Typography variant="h6">
                Status
            </Typography >
            <FormControl component="fieldset" >
                <FormGroup aria-label="position" row>
                    <FormControlLabel
                        value="end"
                        control={<Switch checked={status} onChange={toggleStatus} color="primary" />}
                        label={status ? 'Available' : 'Not available'}
                        labelPlacement="end"
                    />
                </FormGroup>
            </FormControl >

            { /* Skills */}
            < Typography variant="h6" gutterBottom >
                Skills
            </Typography >

            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                <StarIcon className={classes.ratingGold} />
                <Typography variant="body1">
                    Java, SQL (+3)
                </Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                <StarIcon className={classes.ratingSilver} />
                <Typography variant="body1">
                    Hibernate, Go, RxJava (+8)
                </Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                <StarIcon className={classes.ratingBronze} />
                <Typography variant="body1">
                    Kotlin, React, Gradle (+14)
                </Typography>
            </div>
        </div>
    );
}
