import React, {useContext} from 'react';
import {CartContext} from '../../CartProvider'
import { Button } from '@material-ui/core';

export const Beer = (props) => {
    const [cart, setCart] = useContext(CartContext)

    const addToCart = () => {
        console.log("clicked add to cart")
        const beer = {name: props.name, price: 5}
        setCart(curr => [...curr, beer]);

    }
    return (
        <div>
            <h2 style={{color: 'black'}}>{props.name}</h2>
            <h4 style={{color: 'black'}}>{props.price}</h4>
            <Button onClick={addToCart}>Add to cart</Button>
            <hr />
        </div>
    )
}