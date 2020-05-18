import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Grid, Card} from '@material-ui/core';
import Draggable from 'react-draggable'; 
import CartContext from '../../CartContext'
import { Cart } from '../Cart/Cart';
import { BeerList } from '../BeerList/BeerList'
import { BeerModal } from '../BeerModal/BeerModal'

const innerTheme = createMuiTheme({
    palette: {
        type: 'light',
    }
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

    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChangeIndex = (index) => {
        setValue(index);
    };
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (

        <div className={classes.root}>
            <CartContext.Consumer>
                                {context => (

                                        <Cart />
                       


                                )}
                            </CartContext.Consumer>
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
                            <CartContext.Consumer>
                                {context => (
                                    <>
                                        {/* <Cart /> */}
                                        <BeerList />
                                        <BeerModal />

                                    </>
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

            <Box className={classes.bottomOfScreen} style={{width: '100%'}}>

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



                            {/* <TableContainer component={Paper}>
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
                            </TableContainer> */}

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