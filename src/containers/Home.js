import React from "react";
import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { useAppContext } from '../context/AppContext';

const contentStyle = {
    padding: '40px'
}
const claimStyle = {
    color: 'white'
}
const useStyles = makeStyles({
    media: {
        height: 240,
    },
});

export default function Home() {
    const { isAuthenticated } = useAppContext();

    const classes = useStyles();

    return (
        <>
            <div style={contentStyle}>
                <Typography style={claimStyle} gutterBottom variant="h3" component="h2">
                    Consult-a-Colleague
                </Typography>
                <Typography style={claimStyle} gutterBottom variant="h5" component="h2">
                    Enable effective collaboration and break the feeling of isolation working from home.
                </Typography>
            </div>

            {!isAuthenticated &&
                <Grid container justify="center" spacing={3}>
                    <Grid item xs={1}>
                        <Link to="/login">Login</Link>
                    </Grid>

                    <Grid item xs={1}>
                        <Link to="/register">Register</Link>
                    </Grid>
                </Grid>
            }

            <Grid container justify="center" spacing={3} style={contentStyle}>
                {[{
                    key: 'need-assistance',
                    image: '/images/office-no-help.jpg',
                    caption: 'Need assistance?',
                    subtitle: 'Find the right colleague in seconds.'
                }, {
                    key: 'give-assistance',
                    image: '/images/office-help.jpg',
                    caption: 'Have some time to spare?',
                    subtitle: 'Offer your colleagues help.'
                },].map(item => {
                    return (
                        <Grid key={item.key} item xs={12} sm={6} md={4} lg={3}>
                            <Card>
                                <CardMedia
                                    className={classes.media}
                                    image={item.image}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {item.caption}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {item.subtitle}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </>
    );
}
