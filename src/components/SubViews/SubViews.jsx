import { Grid } from '@material-ui/core';

import { green, red, yellow } from '@material-ui/core/colors';
import Paper from '@material-ui/core/Paper';
import { createMuiTheme, makeStyles, ThemeProvider, useTheme } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import CartContext from '../../CartContext';
import { BeerList } from '../BeerList/BeerList';

const colors = {
    primary: red[500],
    secondary: yellow[500],
    status: green[500],

};
const innerTheme = createMuiTheme({
    palette: {
        type: 'light',

        primary: {
            main: colors.primary,
        },
        secondary: {
            main: colors.secondary,
        },
        status: {
            main: colors.status,
        },

    },
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
                    <Box>{children}</Box>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    // children: PropTypes.node,
    // index: PropTypes.any.isRequired,
    // value: PropTypes.any.isRequired,
    // children: PropTypes.element,
    // in: PropTypes.bool.isRequired,
    // onEnter: PropTypes.func,
    // onExited: PropTypes.func,
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
        bottom: theme.spacing(-13),
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
                                        <BeerList />
                                )}
                            </CartContext.Consumer>
                        </Grid>
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        Comming Soon...
                </TabPanel>
                    <TabPanel value={value} index={2} dir={theme.direction}>
                        Comming Soon...
                </TabPanel>
                </SwipeableViews>
            </ThemeProvider>
        </div>
    );
}