import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import DrinkIcon from '@material-ui/icons/LocalBar';
import FoodIcon from '@material-ui/icons/Restaurant';
import DiscountIcon from '@material-ui/icons/MoneyOff';
import SearchIcon from '@material-ui/icons/Search';
import SubViews from '../SubViews/SubViews'
import CartContext from '../../CartContext'
import { Cart } from '../Cart/Cart';



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
  indicator: {
    backgroundColor: theme.palette.background.paper,
    height: '3px',

  }
}));


export default function MainView() {

  const classes = useStyles();
  const theme = useTheme();
  const [view, setview] = React.useState(0);

  const handleChangeView = (event, newview) => {
    setview(newview);
  };
  const [value, setValue] = React.useState(0);
  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <CartContext.Consumer>{context => (<Cart />)}</CartContext.Consumer>
      <AppBar position="sticky" color="default" color="primary">
        <Tabs
          value={view}
          onChange={handleChangeView}
          aria-label="simple tabs example"
          variant="fullWidth"
          classes={{
            indicator: classes.indicator
          }}>
          >
          <Tab icon={<DrinkIcon />} {...a11yProps(0)} />
          <Tab icon={<FoodIcon />} {...a11yProps(0)} />
          <Tab icon={<DiscountIcon />}{...a11yProps(0)} />
          <Tab icon={<SearchIcon />} {...a11yProps(0)} />
        </Tabs>
      </AppBar>
      <TabPanel value={view} index={0}>
        <SubViews />
      </TabPanel>
      <TabPanel value={view} index={1}>
      <SubViews />
      </TabPanel>
      <TabPanel value={view} index={2}>
        <SubViews />
      </TabPanel>

    </div>
  );
}