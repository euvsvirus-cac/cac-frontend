import React from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';

import Profile from './Profile';
import Team from './Team';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
        textAlign: 'initial',
    },
}));

export default function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container justify="flex-start" spacing={3}>
                <Grid item>
                    <Paper>
                        <Profile />
                    </Paper>
                </Grid>

                <Grid item>
                    <Paper>
                        <Team />
                    </Paper>
                </Grid>
            </Grid>
        </div >
    );
}
