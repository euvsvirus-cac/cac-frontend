import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 12,
        display: 'block',
        minWidth: theme.spacing(42),
        maxWidth: theme.spacing(60),
        //textAlign: 'initial',
    },
}))

export default function Profile() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h3>Soon, you can edit your profile information here.</h3>
        </div>
    );
}
