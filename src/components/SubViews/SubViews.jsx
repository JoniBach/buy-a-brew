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
import { Grid, Card, CardContent, CardMedia, Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Switch from '@material-ui/core/Switch';
import Collapse from '@material-ui/core/Collapse';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ToggleButton from '@material-ui/lab/ToggleButton';


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
}));




export default function MainView() {


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
                                                    style={{border: 'none'}}
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
                                                    style={{border: 'none'}}
                                                        selected={selectedShowPairings}>

                                                        {selectedShowPairings ? 'Less' : 'More'}

                                                    </ToggleButton>
                                                    <Button onClick={handleClose} fullWidth variant="contained" color="secondary">Buy Now</Button>

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







        </div>
    );
}