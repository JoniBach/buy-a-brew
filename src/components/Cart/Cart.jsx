import {Typography, AppBar, Badge, Button, IconButton, LinearProgress, Paper, Snackbar, Table, TableBody, TableCell, TableContainer, TableRow, Toolbar, Box } from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import { Delete, ShoppingCart } from '@material-ui/icons';
import { Alert } from '@material-ui/lab';
import React, { useContext } from 'react';
import { CartContext } from '../../CartProvider';

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

function MuiAlert(props) {
    return <Alert elevation={6} variant="filled"  {...props} />;
}


export const Cart = () => {
    const classes = useStyles();

    const [cart] = useContext(CartContext)
    const [newBeerFromId, setnewBeerFromId] = useContext(CartContext);
    const removeBeer = () => {
        setnewBeerFromId([])
    }
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
    const [completed, setCompleted] = React.useState(100);
    const [NotifyCheckoutComplete, setNotifyCheckoutComplete] = React.useState(false);
    const [onFirstLoad, setOnFirstLoad] = React.useState();
    const handleCloseNotifyCheckoutComplete = (reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setNotifyCheckoutComplete(false);
    };
    const submitBasket = (e, id) => {
        setNotifyCheckoutComplete(false)
        setOnFirstLoad(1)
        setCompleted(0)
    }
    React.useEffect(() => {
        function progress() {
            setCompleted((oldCompleted) => {
                if (oldCompleted === 100) {
                    setnewBeerFromId([])
                    setNotifyCheckoutComplete(true)
                    return undefined;
                }
                const diff = Math.random() * 10;
                return Math.min(oldCompleted + diff, 100);
            });
        }

        const timer = setInterval(progress, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (

        <div>
            <div className={classes.bottomOfScreen}>
                <AppBar position="static" >
                    <Toolbar>
                        <Typography variant="h5" color="secondary">£{totalPrice}</Typography>
                        <Box width="100%" align="center" m={2}>Buy-A-Brew</Box>

                        <IconButton
                    
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"

                        >
                            <ShoppingCart />
                        </IconButton>


                    </Toolbar>
                </AppBar>
            </div>
            {onFirstLoad !== 1 ? null :
                <Snackbar open={NotifyCheckoutComplete} autoHideDuration={6000} onClose={handleCloseNotifyCheckoutComplete}>
                    <MuiAlert onClose={handleCloseNotifyCheckoutComplete} severity="success">
                        Purchase Successful
                    </MuiAlert>
                </Snackbar>
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
                                        {/* TODO: impkiment product counter */}
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
                {totalPrice === 0 ?
                    <Typography style={{ color: 'white' }} align="center" variant="h6">Add an item...</Typography>
                    :
                    <Box m={3}>
                        <Typography style={{ color: 'white' }} align="center" variant="h6">Total: £{totalPrice}</Typography>
                        {!completed ? <div /> : <LinearProgress variant="determinate" value={completed} />
                        }
                        <Button
                            onClick={submitBasket}
                            fullWidth variant="contained" color="secondary">
                            {completed <= 100
                                ?
                                "processing"
                                :
                                "Confirm Payment"
                            }
                        </Button>
                    </Box>
                }
            </Collapse>
        </div>
    )
}