/* eslint-disable linebreak-style */
import { createMuiTheme } from '@material-ui/core'
import { red, yellow, green } from '@material-ui/core/colors';

const colors = {
    primary: red[500],
    secondary: yellow[500],
    status: green[500],

};

export default createMuiTheme({
    palette: {
        type: 'dark',

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