// import CartContext from './CartContext';
import React, { useState, useContext } from 'react'
import {CartContext} from '../../CartProvider'

import { Beer } from '../Beer/Beer'
import { useFetch } from "../SubViews/hooks";
import { Button, Grid, Card, CardContent, CardMedia, CardActionArea, Box, Typography } from '@material-ui/core';
import { makeStyles, useTheme, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,

    },
    media: {
        height: 150,
        display: 'flex',

    },
}));

export const BeerList = (props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(0);
    const [selectedBeerId, setSelectedBeerId] = React.useState();

    const database = [
        { name: "beer 01", price: 4, id: 1 }
    ]

    const [beerData] = useFetch(
        "https://api.punkapi.com/v2/beers"
        
    )
    const [cart, setCart] = useContext(CartContext)

    const addToCart = (e, id) => {
        setSelectedBeerId(id);
        console.log("clicked add to cart", id)

        const newBeer = beerData.filter(d => d.id === id)
        console.log('logging new beer',newBeer.map(e => e.name))
        // {beerData.filter(d => d.id === 1).map(({ id, name, image_url, abv, tagline, description, food_pairing }) => (


        const beer = {name: newBeer.map(e => e.name).toString(), price: 6 }
        console.log('new beew', beer)
        setCart(curr => [...curr, beer]);

    }
    // console.log('thisIsBeerData',beerData)

    const handleOpen = (e, id) => {
        setOpen(true);
        console.log('open: ', id);
        setSelectedBeerId(id);
    };

    return (
        <div className={classes.root}>
            {/* {
                    beerData.map(({ id, name })  => (
                        <Beer name={name} price={4} key={id} />
                    ))
                }
      {
                    database.map(item => (
                        <Beer name={item.name} price={item.price} key={item.id} />
                    ))
                } */}
            <Grid container spacing={2}>

                {beerData.map(({ id, name, image_url, abv }) => (

                    <Grid item xs={4}>
                        <Card variant="outlined" id={id}>
                            <CardActionArea value={id}
                            onClick={((e) => handleOpen(e, id))}
                            >
                                <CardContent>
                                    <CardMedia
                                        className={classes.media}
                                        image={image_url} ></CardMedia>
                                    <Box variant="body2" component="p" align="center" fontWeight="fontWeightBold">
                                        {name}
                                    </Box>
                                    <Typography variant="body2" component="p" align="center">
                                        {abv}%
                </Typography>

                                </CardContent>
                            </CardActionArea>
                            <Button onClick={((e) => addToCart(e, id))}>Add to cart</Button>

                        </Card>
                    </Grid>

                ))
                }
            </Grid>

        </div>
    );

}

