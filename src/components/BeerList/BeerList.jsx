import { Backdrop, Box, Button, Card, CardActionArea, CardContent, CardMedia, CircularProgress, Collapse, Grid, Modal, Snackbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { CheckCircleOutlineOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import { Alert, ToggleButton } from '@material-ui/lab';
import React, { useContext } from 'react';
import { animated, useSpring } from 'react-spring/web.cjs'; 
import { CartContext } from '../../CartProvider';
import { ModalContext } from '../../ModalProvider';
import { useFetch } from "../SubViews/hooks";


const Fade = React.forwardRef(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
        onStart: () => {
            if (open && onEnter) {
                onEnter();
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited();
            }
        },
    });

    return (
        <animated.div ref={ref} style={style} {...other}>
            {children}
        </animated.div>
    );
});

function MuiAlert(props) {
    return <Alert elevation={6} variant="filled"  {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,

    },
    media: {
        height: 150,
        display: 'flex',

    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    root2: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: '100%',
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
    sticky: {
        position: '-webkit-sticky',
        position: 'sticky',
        top: 0,
        backgroundColor: 'yellow',
        padding: '50px',
        fontSize: '20px',
    },
    bottomOfScreen: {

        position: "fixed",
        bottom: 1,
    }
}));

export const BeerList = (props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [newBeerFromId, setnewBeerFromId] = useContext(ModalContext);
    const [ExpandDescription] = React.useState(true);
    const [ExpandPairings] = React.useState(true);
    const handleClose = () => {
        setOpen(false);
        // setnewBeerFromId(0);        

    };

    const [selectedShowDescription, setSelectedShowDescription] = React.useState(false);

    const [selectedShowPairings, setSelectedShowPairings] = React.useState(false);
    const handleCollapseDescription = () => {
        setSelectedShowDescription((prev) => !prev);
    };
    const handleCollapseDPairings = () => {
        setSelectedShowPairings((prev) => !prev);
    };
    const [notifyAddToCart, setNotifyAddToCart] = React.useState(false);
    const handleCloseNotifySuccess = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setNotifyAddToCart(false);
    };


    const [beerData] = useFetch(
        "https://api.punkapi.com/v2/beers"

    )
    const [cart, setCart] = useContext(CartContext)

    const addToCart = (e, id) => {
        setnewBeerFromId(id);
        const newBeer = beerData.filter(d => d.id === id)
        const beer = {
            name: newBeer.map(e => e.name).toString(),
            price: 6,
            image_url: newBeer.map(e => e.image_url).toString(),
            tagline: newBeer.map(e => e.tagline).toString(),
            id: newBeer.map(e => e.id).toString(),
        }
        setCart(curr => [...curr, beer]);
        setNotifyAddToCart(true)
        setCompleted(0)

    }

    const handleOpen = (e, id) => {
        setOpen(true);
        setnewBeerFromId(id);
    };

    const [completed, setCompleted] = React.useState(0);

    React.useEffect(() => {
        function progress() {
            setCompleted((prevCompleted) => (prevCompleted >= 100 ? undefined : prevCompleted + 20));
        }

        const timer = setInterval(progress, 200);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className={classes.root}>
            <Modal
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Button onClick={handleClose} variant="contained" color="primary">close</Button>


                    {beerData.filter(d => d.id === newBeerFromId).map(({ id, name, image_url, abv, tagline, description, food_pairing }) => (
                        <Card className={classes.root2}>
                            <div className={classes.details}>
                                <CardContent className={classes.content}>
                                    <Box component="p" align="center" fontWeight="fontWeightBold">
                                        <Typography variant="h4">
                                            {name}
                                        </Typography>
                                    </Box>
                                    <Typography variant="body2" component="p" align="center">
                                        {tagline}
                                    </Typography>
                                    <Typography variant="body2" component="p" align="center">
                                        {abv}%
                </Typography>
                                    <br />
                                    <Collapse in={ExpandDescription} timeout="auto" unmountOnExit>
                                        <div className={classes.container}>
                                            <div className={classes.root}>
                                                <div className={classes.container}>
                                                    <Collapse in={selectedShowDescription}>
                                                        Description:
                                </Collapse>
                                                    <Collapse in={selectedShowDescription} collapsedHeight={40}>
                                                        <Typography variant="body2" component="p">
                                                            {description}
                                                        </Typography>
                                                    </Collapse>
                                                </div>
                                                <ToggleButton onChange={handleCollapseDescription}
                                                    style={{ border: 'none' }}
                                                    selected={selectedShowDescription}>

                                                    {selectedShowDescription ? 'Less' : 'More'}

                                                </ToggleButton>
                                            </div>
                                        </div>
                                    </Collapse>
                                    <Collapse in={ExpandPairings} timeout="auto" unmountOnExit>
                                        <div className={classes.container}>
                                            <div className={classes.root}>
                                                <div className={classes.container}>
                                                    <Collapse in={selectedShowPairings}>
                                                        Perfect Pairings:
                                                    </Collapse>
                                                    <Collapse in={selectedShowPairings} collapsedHeight={40}>
                                                        <Typography variant="body2" component="p">
                                                            {food_pairing}
                                                        </Typography>
                                                    </Collapse>
                                                </div>
                                                <ToggleButton onChange={handleCollapseDPairings}
                                                    style={{ border: 'none' }}
                                                    selected={selectedShowPairings}>

                                                    {selectedShowPairings ? 'Less' : 'More'}

                                                </ToggleButton>
                                                <Button onClick={((e) => addToCart(e, id))}
                                                    fullWidth
                                                    variant="contained"
                                                    color="secondary"
                                                    startIcon={<ShoppingCartOutlined />}
                                                >
                                                    Add To Cart
                                                </Button>


                                            </div>
                                        </div>
                                    </Collapse>
                                </CardContent>
                            </div>
                            <CardMedia
                                className={classes.cover}
                                image={image_url}
                                title={name}
                            />
                            <Snackbar open={notifyAddToCart} autoHideDuration={6000} onClose={handleCloseNotifySuccess}>
                                <MuiAlert onClose={handleCloseNotifySuccess} severity="success">
                                    Added "{name}" to cart!
                                </MuiAlert>
                            </Snackbar>
                        </Card>

                    ))
                    }


                </Fade>
            </Modal>
            <Snackbar open={notifyAddToCart} autoHideDuration={6000} onClose={handleCloseNotifySuccess}>
                <MuiAlert onClose={handleCloseNotifySuccess} severity="success">
                    Added  to cart!
                                </MuiAlert>
            </Snackbar>
            {/* <CircularProgress variant="static" value={completed} /> */}
            <Grid container spacing={2}>
                {beerData.map(({ id, name, image_url, abv }) => (
                    <Grid item xs={4}>
                        <Card variant="outlined" id={id} height="200">
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
                            <Button
                                variant="contained"
                                fullWidth={true}
                                onClick={((e) => addToCart(e, id))}
                                startIcon={
                                    !notifyAddToCart ? <ShoppingCartOutlined /> :
                                        isNaN(completed) ? <CheckCircleOutlineOutlined style={{ color: 'green' }} /> : <CircularProgress color="primary" size={20} variant="static" value={completed} />
                                }
                            >
                                   £6.00

                            </Button>
                        </Card>
                    </Grid>
                ))
                }
            </Grid>
        </div>
    );

}

