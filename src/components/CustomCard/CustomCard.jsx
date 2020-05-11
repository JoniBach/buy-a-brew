import React from 'react';
import { makeStyles, useTheme, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { Card, CardContent, CardMedia } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    media: {
        height: 60,
        paddingTop: '56.25%', // 16:9
    },
}));

export default function MainView() {
    const classes = useStyles();

    return (
        <Card variant="outlined">
            <CardContent>
                <CardMedia
                    className={classes.media}
                    image="https://www.thecarycompany.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/3/0/30wlac_1.1551298042.jpg" ></CardMedia>
                <Typography variant="body1" component="p" align="center">
                    beer
                </Typography>
                <Typography variant="body2" component="p" align="center">
                    ABV
                </Typography>
            </CardContent>
        </Card>
    );
}