import React, { useState } from 'react';

import StarIcon from '@material-ui/icons/Stars';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
        textAlign: 'initial',
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    profilePaper: {
        padding: 12,
        display: 'block',
        width: theme.spacing(42),
    },
    teamPaper: {
        padding: 12,
        display: 'block',
        width: theme.spacing(56),
    },
    profileAvatar: {
        width: theme.spacing(8),
        height: theme.spacing(8),
        marginRight: 12,
    },
    ratingGold: {
        width: theme.spacing(5),
        height: theme.spacing(5),
        marginRight: theme.spacing(1),
        color: '#af9500'
    },
    ratingSilver: {
        width: theme.spacing(5),
        height: theme.spacing(5),
        marginRight: theme.spacing(1),
        color: '#b4b4b4'
    },
    ratingBronze: {
        width: theme.spacing(5),
        height: theme.spacing(5),
        marginRight: theme.spacing(1),
        color: '#6a3805'
    },
}));

export default function Home() {
    const classes = useStyles();

    const [status, setStatus] = useState(false);
    const toggleStatus = () => setStatus(!status);

    return (
        <div className={classes.root}>
            <Grid container justify="flex-start" spacing={3}>
                <Grid item>

                    <Paper className={classes.profilePaper}>

                        { /* Avatar + Profile name etc. */}
                        <div style={{ display: 'flex' }}>
                            <Avatar variant="square" src="/static/images/avatar/1.jpg" className={classes.profileAvatar} />

                            <div style={{ display: 'block' }}>
                                <Typography variant="h5" gutterBottom>
                                    Romeo Ward
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Senior Software Engineer
                                </Typography>
                            </div>
                        </div>

                        { /* Status row */}
                        <FormControl component="fieldset">
                            <FormGroup aria-label="position" row>
                                <FormControlLabel
                                    value="end"
                                    control={<Switch checked={status} onChange={toggleStatus} color="primary" />}
                                    label={status ? 'Available' : 'Not available'}
                                    labelPlacement="end"
                                />
                            </FormGroup>
                        </FormControl>

                        { /* Skills */}
                        <Typography variant="h6" gutterBottom>
                            Skills
                        </Typography>

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
                    </Paper>

                </Grid>

                <Grid item>
                    <Paper className={classes.teamPaper}>
                        <div style={{ display: 'block' }}>
                            <Typography variant="h5">
                                Your team
                            </Typography>

                            <TextField
                                type="search"
                                variant="filled"
                                fullWidth
                                label="Filter skills"
                                margin="normal"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </div >
    );
}
