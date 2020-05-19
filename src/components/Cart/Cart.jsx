import React, { useContext, setState, useState } from 'react';
import { CartContext } from '../../CartProvider';
import { AppBar, Toolbar, Typography, Grid, Card, CardContent, CardMedia, Button, Chip, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Badge, Paper, Box, IconButton, ButtonGroup } from '@material-ui/core';
import { Remove, Add, Delete, ShoppingCart } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    bottomOfScreen: {

        flex: 1
    }
}));

export const Cart = () => {
    const classes = useStyles();

    const [cart, setCart] = useContext(CartContext)
    const [count, setCount] = useState([]);
    const beerPrice = 4;
    const [newBeerFromId, setnewBeerFromId] = useContext(CartContext);
    console.log('Selected beer id', newBeerFromId)

    const removeBeer = (e, id) => {
        setnewBeerFromId([])
    }

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
    return (

        <div>
            <div className={classes.bottomOfScreen}>
            <AppBar position="static" >
                    <Toolbar>
                        <Typography variant="h5" color="secondary">£{totalPrice}</Typography>
                        <Box width="100%" align="center"  m={2}>Buy-A-Brew</Box>

                        <IconButton
                            // className={clsx(classes.expand, {
                            //     [classes.expandOpen]: expanded,
                            // })}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"

                        >
                            <ShoppingCart />
                        </IconButton>

                    </Toolbar>
                </AppBar>
            </div>
                

            {
                newBeerFromId.map(({ name, price }) => (

                    <div />
                ))

            }

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Typography style={{ color: 'white' }} align="center" variant="h6">{cart.length} items in cart</Typography>

                <TableContainer component={Paper}>
                    <Table >

                        <TableBody >
                            {newBeerFromId.map(({ id, name, price, image_url, abv, tagline, description, food_pairing }) => (
                                <TableRow key={id}>
                                    <TableCell component="th" scope="row">
                                        <Badge badgeContent={"£" + price} color="secondary">
                                            <img src={image_url} alt={name} height="50" width="20"></img>
                                        </Badge>
                                    </TableCell>
                                    <TableCell align="left">
                                        {name}
                                        <br />
                                        {/* {tagline} */}
                                    </TableCell>
                                    <TableCell align="right">
                                        {/* <ButtonGroup>
                                    <Box display="flex" flexDirection="row" >
                                        <IconButton variant="contained" color="secondary" onClick={() => setCount(count - 1)}>
                                            <Remove />
                                        </IconButton>
                                        <Box width={30} style={{ textAlign: 'center', paddingTop: 10 }}>{count}</Box>

                                        <IconButton width={10} variant="contained" color="secondary" onClick={() => setCount(count + 1)}>
                                            <Add />
                                        </IconButton>
                                    </Box>
                                    </ButtonGroup> */}
                                    </TableCell>
                                    <TableCell align="right">
                                        <IconButton aria-label="delete" onClick={e => removeBeer(e, id)} >
                                            <Delete />
                                        </IconButton>
                                    </TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Collapse>

        </div>

    )
}