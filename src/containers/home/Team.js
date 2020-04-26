import React, { useState } from 'react';

import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 12,
        display: 'block',
        width: theme.spacing(56),
    },
}));

export default function Team() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
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
        </div>
    );
}
