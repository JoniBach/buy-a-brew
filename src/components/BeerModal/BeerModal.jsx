// import CartContext from './CartContext';
import { Backdrop, Button, Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Alert } from '@material-ui/lab';
import React, { useContext } from 'react';
import { animated, useSpring } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support
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

function MuiAlert(props) {
    return <Alert elevation={6} variant="filled" {...props} />;
}
export const BeerModal = (open) => {

    const [beerData] = useFetch(
        "https://api.punkapi.com/v2/beers"
    )

    // const [open, setOpen] = React.useState(false);

    const classes = useStyles();
    const [ExpandDescription, setExpandDescription] = React.useState(true);
    const [ExpandPairings, setExpandPairings] = React.useState(true);
    const [newBeerFromId, setnewBeerFromId] = useContext(ModalContext);
    // const [open, setOpen] = React.useState(false);

    // console.log('Selected beer id', newBeerFromId)

    // const handleOpen = (e, id) => {
    //     setOpen(true);
    //     console.log('open: ', id);
    //     setnewBeerFromId(id);
    // };

    const handleClose = () => {
        // setOpen(false);
        // setnewBeerFromId(0);        

    };
    const handleClick = () => {
        // setOpen(!open);
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
                //         <Card className={classes.root2}>
                //             <div className={classes.details}>
                //                 <CardContent className={classes.content}>
                //                     <Box component="p" align="center" fontWeight="fontWeightBold">
                //                         <Typography variant="h4">
                //                             {name}
                //                         </Typography>
                //                     </Box>
                //                     <Typography variant="body2" component="p" align="center">
                //                         {tagline}
                //                     </Typography>
                //                     <Typography variant="body2" component="p" align="center">
                //                         {abv}%
                // </Typography>
                //                     <br />
                //                     <Collapse in={ExpandDescription} timeout="auto" unmountOnExit>
                //                         <div className={classes.container}>
                //                             <div className={classes.root}>
                //                                 <div className={classes.container}>
                //                                     <Collapse in={selectedShowDescription}>
                //                                         Description:
                //                 </Collapse>
                //                                     <Collapse in={selectedShowDescription} collapsedHeight={40}>
                //                                         <Typography variant="body2" component="p">
                //                                             {description}
                //                                         </Typography>
                //                                     </Collapse>
                //                                 </div>
                //                                 <ToggleButton onChange={handleCollapseDescription}
                //                                     style={{ border: 'none' }}
                //                                     selected={selectedShowDescription}>

                //                                     {selectedShowDescription ? 'Less' : 'More'}

                //                                 </ToggleButton>
                //                             </div>
                //                         </div>
                //                     </Collapse>
                //                     <Collapse in={ExpandPairings} timeout="auto" unmountOnExit>
                //                         <div className={classes.container}>
                //                             <div className={classes.root}>
                //                                 <div className={classes.container}>
                //                                     <Collapse in={selectedShowPairings}>
                //                                         Perfect Pairings:
                //                                     </Collapse>
                //                                     <Collapse in={selectedShowPairings} collapsedHeight={40}>
                //                                         <Typography variant="body2" component="p">
                //                                             {food_pairing}
                //                                         </Typography>
                //                                     </Collapse>
                //                                 </div>
                //                                 <ToggleButton onChange={handleCollapseDPairings}
                //                                     style={{ border: 'none' }}
                //                                     selected={selectedShowPairings}>

                //                                     {selectedShowPairings ? 'Less' : 'More'}

                //                                 </ToggleButton>
                //                                 {/* <Button onClick={addToCart} fullWidth variant="contained" color="secondary">Buy Now</Button> */}

                //                             </div>
                //                         </div>
                //                     </Collapse>
                //                 </CardContent>
                //             </div>
                //             <CardMedia
                //                 className={classes.cover}
                //                 image={image_url}
                //                 title={name}
                //             />
                //             <Snackbar open={notifyAddToCart} autoHideDuration={6000} onClose={handleCloseNotifySuccess}>
                //                 <MuiAlert onClose={handleCloseNotifySuccess} severity="success">
                //                     Added "{name}" to cart!
                //                 </MuiAlert>
                //             </Snackbar>
                //         </Card>
                    <p>{name}</p>

                    ))
                    }
                </Fade>
            </Modal>
        </div>
    );

}

