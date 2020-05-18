import React, {useContext, useFetch} from 'react';
import { CartContext } from '../../CartProvider';
// import { Grid, Card, CardContent, CardMedia, Button, Chip, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Badge, Paper, Box, IconButton } from '@material-ui/core';
// import {Remove, Add, Delete} from '@material-ui/icons';

export const Cart = () => {
    const [cart, setCart] = useContext(CartContext)
    const [count, setCount] = React.useState([]);
    const beerPrice = 4;


    const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
    return (
    //     <TableContainer component={Paper}>
    //     <Table >

    //         <TableBody >
    //             {beerData.filter(d => d.id === 1).map(({ id, name, image_url, abv, tagline, description, food_pairing }) => (
    //                 <TableRow key={id}>
    //                     <TableCell component="th" scope="row">
    //                         <Badge badgeContent={"£" + totalBeerPrice} color="secondary">
    //                             <img src={image_url} alt={name} height="42" width="42"></img>
    //                         </Badge>
    //                     </TableCell>
    //                     <TableCell align="left">
    //                         {name}
    //                         <br />
    //                         {tagline}
    //                     </TableCell>
    //                     <TableCell align="right">
    //                         <Box display="flex" flexDirection="row" >
    //                             <IconButton variant="contained" color="secondary" onClick={() => setCount(count - 1)}>
    //                                 <Remove />
    //                             </IconButton>
    //                             <Box width={30} style={{ textAlign: 'center', paddingTop: 10 }}>{count}</Box>

    //                             <IconButton width={10} variant="contained" color="secondary" onClick={() => setCount(count + 1)}>
    //                                 <Add />
    //                             </IconButton>
    //                         </Box>
    //                     </TableCell>
    //                     <TableCell align="right">
    //                         <IconButton aria-label="delete">
    //                             <Delete />
    //                         </IconButton>
    //                     </TableCell>

    //                 </TableRow>
    //             ))}
    //         </TableBody>
    //     </Table>
    // </TableContainer>  

    <div style={{color: 'black'}}>
        <span>items in cart {cart.length}</span>
        <br />
    <span>total price {totalPrice}</span>

    </div>
    )
}