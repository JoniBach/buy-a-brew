import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CustomCard from '../CustomCard/CustomCard'
import { useFetch } from "./hooks";
import CardActionArea from '@material-ui/core/CardActionArea';
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support
import Backdrop from '@material-ui/core/Backdrop';
import Modal from '@material-ui/core/Modal';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { Grid, Card, CardContent, CardMedia, Button, Chip, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Badge } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Switch from '@material-ui/core/Switch';
import Collapse from '@material-ui/core/Collapse';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ToggleButton from '@material-ui/lab/ToggleButton';
import Draggable from 'react-draggable'; // The default
import MaterialTable from "material-table";
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import CartContext from '../../CartContext'

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const innerTheme = createMuiTheme({
    palette: {
        type: 'light',
    }
});

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


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
    children: PropTypes.element,
    in: PropTypes.bool.isRequired,
    onEnter: PropTypes.func,
    onExited: PropTypes.func,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
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
        bottom: theme.spacing.unit * -13,
    }
}));

export default function MainView() {

    // const beerPrice = Math.floor(Math.random() * (1000 - 100) + 100) / 100;


    const [beerData] = useFetch(
        "https://api.punkapi.com/v2/beers"
    )
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const [selectedBeerId, setSelectedBeerId] = React.useState(0);
    const [ExpandDescription, setExpandDescription] = React.useState(true);
    const [ExpandPairings, setExpandPairings] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    console.log(`https://api.punkapi.com/v2/beers/${selectedBeerId}`)

    const handleChangeIndex = (index) => {
        setValue(index);
    };
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleOpen = (e, id) => {
        setOpen(true);
        console.log('open: ', id);
        setSelectedBeerId(id);
    };

    const handleClose = () => {
        setOpen(false);
        // setSelectedBeerId(0);        

    };
    const [selectedShowDescription, setSelectedShowDescription] = React.useState(false);

    const [selectedShowPairings, setSelectedShowPairings] = React.useState(false);

    const handleCollapseDescription = () => {
        setSelectedShowDescription((prev) => !prev);
    };
    const handleCollapseDPairings = () => {
        setSelectedShowPairings((prev) => !prev);
    };
    const [count, setCount] = React.useState(0);
    const beerPrice = 4;

    const totalBeerPrice = count * beerPrice;

    const [notifyAddToCart, setNotifyAddToCart] = React.useState(false);

    const handleAddToCart = () => {
        setNotifyAddToCart(true);
    };

    const handleCloseNotifySuccess = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setNotifyAddToCart(false);
    };

    console.log(selectedBeerId);
    console.log('filtered beer data', beerData.filter(d => d.id === selectedBeerId))

    return (

        <div className={classes.root}>
            {/* beerData.filter(d => d.id === selectedBeerId) */}
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
                    {/* <CartContext.Consumer>
                                {context => (
                                    Object.keys(context.beers).filter(d => d.id === selectedBeerId).map(id => (
                                        // <p>{context.beers[id].name}</p>
                                        
                                            <Card className={classes.root2}>
                                                {console.log('user selected a beer')}
                                                <div className={classes.details}>
                                                    <CardContent className={classes.content}>
                                                        <Box component="p" align="center" fontWeight="fontWeightBold">
                                                            <Typography variant="h4">
                                                                {context.beers[id].name}
                                                            </Typography>
                                                        </Box>
                                                        <Typography variant="body2" component="p" align="center">
                                                            {context.beers[id].tagline}
                                                        </Typography>
                                                        <Typography variant="body2" component="p" align="center">
                                                            {context.beers[id].abv}%
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
                                                                                {context.beers[id].description}
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
                                                                                {context.beers[id].food_pairing}
                                                                            </Typography>
                                                                        </Collapse>
                                                                    </div>
                                                                    <ToggleButton onChange={handleCollapseDPairings}
                                                                        style={{ border: 'none' }}
                                                                        selected={selectedShowPairings}>
                
                                                                        {selectedShowPairings ? 'Less' : 'More'}
                
                                                                    </ToggleButton>
                                                                    <Button onClick={handleAddToCart} fullWidth variant="contained" color="secondary">Buy Now</Button>
                
                                                                </div>
                                                            </div>
                                                        </Collapse>
                                                    </CardContent>
                                                </div>
                                                <CardMedia
                                                    className={classes.cover}
                                                    image={context.beers[id].image_url}
                                                    title={context.beers[id].name}
                                                />
                                                <Snackbar open={notifyAddToCart} autoHideDuration={6000} onClose={handleCloseNotifySuccess}>
                                                    <Alert onClose={handleCloseNotifySuccess} severity="success">
                                                        Added "{context.beers[id].name}" to cart!
                        </Alert>
                                                </Snackbar>
                                            </Card>
                

                                    ))
                                )}
                            </CartContext.Consumer> */}
                    {
                        beerData.filter(d => d.id === selectedBeerId).map(({ id, name, image_url, abv, tagline, description, food_pairing }) => (
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
                                                    <Button onClick={handleAddToCart} fullWidth variant="contained" color="secondary">Buy Now</Button>

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
                                    <Alert onClose={handleCloseNotifySuccess} severity="success">
                                        Added "{name}" to cart!
        </Alert>
                                </Snackbar>
                            </Card>

                        ))
                    }
                </Fade>
            </Modal>
            <Paper className={classes.root} >
                <Tabs

                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab {...a11yProps(0)} label="ALL" />
                    <Tab {...a11yProps(0)} label="PIZZA" />
                    <Tab  {...a11yProps(0)} label="STEAK" />
                </Tabs>
            </Paper>
            <ThemeProvider theme={innerTheme}>

                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                    style={{ backgroundColor: 'white' }}
                >
                    <TabPanel value={value} index={0} dir={theme.direction}
                    >
                        <Grid container spacing={2}
                        >
                            {

                                beerData.map(({ id, name, image_url, abv }) => (
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
                                        </Card>
                                    </Grid>
                                ))
                            }
                            <CartContext.Consumer>
                                {context => (
                                    Object.keys(context.beers).map(id => (
                                        // <p>{context.beers[id].name}</p>
                                        <Grid item xs={4}>
                                        <Card variant="outlined" id={id}>
                                            <CardActionArea value={id}
                                                onClick={((e) => handleOpen(e, id))}
                                            >
                                                <CardContent>
                                                    <CardMedia
                                                        className={classes.media}
                                                        image={context.beers[id].image_url} ></CardMedia>
                                                    <Box variant="body2" component="p" align="center" fontWeight="fontWeightBold">
                                                        {context.beers[id].name}
                                                    </Box>
                                                    <Typography variant="body2" component="p" align="center">
                                                        {context.beers[id].abv}%
                                                </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                    ))
                                )}
                            </CartContext.Consumer>
                        </Grid>
                    </TabPanel>

                    <TabPanel value={value} index={1} dir={theme.direction}>
                        Some Beer
                </TabPanel>
                    <TabPanel value={value} index={2} dir={theme.direction}>
                        Some Pizza
                </TabPanel>
                </SwipeableViews>



            </ThemeProvider>

            <Box className={classes.bottomOfScreen} style={{
                width: '100%'

                // position: 'absolute', //Here is the trick
                // bottom: 0, //Here is the trick
            }}>

                <Draggable axis="y" handle="strong" bounds={{ top: -100, left: 0, right: 0, bottom: 0 }} >
                    <Card>


                        <div className="box no-cursor">
                            <strong className="cursor">
                                <Box mx={15} my={1}>
                                    <div style={{
                                        width: '100%',
                                        background: 'grey',
                                        borderRadius: '25px',
                                        paddingLeft: '20'
                                    }}>
                                        &nbsp;
                                </div>
                                </Box>
                            </strong>

                            <TableContainer component={Paper}>
                                <Table >

                                    <TableBody >
                                        {beerData.filter(d => d.id === 1).map(({ id, name, image_url, abv, tagline, description, food_pairing }) => (
                                            <TableRow key={id}>
                                                <TableCell component="th" scope="row">
                                                    <Badge badgeContent={"£" + totalBeerPrice} color="secondary">
                                                        <img src={image_url} alt={name} height="42" width="42"></img>
                                                    </Badge>
                                                </TableCell>
                                                <TableCell align="left">
                                                    {name}
                                                    <br />
                                                    {tagline}
                                                </TableCell>
                                                <TableCell align="right">
                                                    <Box display="flex" flexDirection="row" >
                                                        <IconButton variant="contained" color="secondary" onClick={() => setCount(count - 1)}>
                                                            <RemoveIcon />
                                                        </IconButton>
                                                        <Box width={30} style={{ textAlign: 'center', paddingTop: 10 }}>{count}</Box>

                                                        <IconButton width={10} variant="contained" color="secondary" onClick={() => setCount(count + 1)}>
                                                            <AddIcon />
                                                        </IconButton>
                                                    </Box>
                                                </TableCell>
                                                <TableCell align="right">
                                                    <IconButton aria-label="delete">
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </TableCell>

                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>

                        </div>



                    </Card>
                </Draggable>
            </Box>

            {/* <CartContext.Consumer>

                {context => (
                    Object.keys(context.beers).map(id => (
                        <p>{context.beers[id].name}</p>
                    ))
                )}
            </CartContext.Consumer> */}


        </div>
    );
}