import React from "react";
import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { useAppContext } from '../context/AppContext';

const wrapperStyle = {
    padding: 0,
    margin: 0,
    minHeight: '94vh', /* TODO: full height fix */
    background: 'linear-gradient(to left, #3498db, #4f6f8f)'
}
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
        <div style={wrapperStyle}>
            <div style={contentStyle}>
                <Typography style={claimStyle} gutterBottom variant="h3" component="h2">
                    Consult-a-Colleague
                </Typography>
                <Typography style={claimStyle} gutterBottom variant="h5" component="h2">
                    Enable effective collaboration and break the feeling of isolation working from home.
                </Typography>

                {!isAuthenticated &&
                    <Link to="/login">Login</Link>
                }
            </div>

            <Grid container alignItems="center" justify="center" spacing={3} style={contentStyle}>
                {[{
                    image: '/images/office-no-help.jpg',
                    caption: 'Need assistance?',
                    subtitle: 'Find the right colleague in seconds.'
                }, {
                    image: '/images/office-help.jpg',
                    caption: 'Have some time to spare?',
                    subtitle: 'Offer your colleagues help.'
                },].map(item => {
                    return (
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <Card>
                                <CardActionArea>
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
                                </CardActionArea>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </div >
    );
}
