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

import { Grid, Card, CardContent, CardMedia } from '@material-ui/core';

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
        height: 60,
        paddingTop: '56.25%', // 16:9
    },
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
    const bull = <span className={classes.bullet}>•</span>;


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
                    <Grid container spacing={3} >
                        <Grid item xs={4} ><CustomCard /></Grid>
                        <Grid item xs={4} ><CustomCard /></Grid>
                        <Grid item xs={4} ><CustomCard /></Grid>
                        <Grid item xs={4} ><CustomCard /></Grid>
                        <Grid item xs={4} ><CustomCard /></Grid>
                        <Grid item xs={4} ><CustomCard /></Grid>
                        <Grid item xs={4} ><CustomCard /></Grid>
                        <Grid item xs={4} ><CustomCard /></Grid>
                        <Grid item xs={4} ><CustomCard /></Grid>
                        <Grid item xs={4} ><CustomCard /></Grid>

                    </Grid>
                    <TabPanel style={{ paddingLeft: 0, paddingRight: 0 }} value={value} index={0} dir={theme.direction}>

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