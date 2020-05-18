// import CartContext from './CartContext';
import React, {useFetch, useState} from 'react'

export const CartContext = React.createContext();

export const CartProvider = (props) => {
const [cart, setCart] = useState([]);
const [open, setOpen] = React.useState(false);
const [newBeerFromId, setnewBeerFromId] = React.useState(0);

    // const [beers] = useFetch(
    //     "https://api.punkapi.com/v2/beers"
    // )
    


        return (
            // newBeerFromId, setnewBeerFromId 
            <CartContext.Provider value={[cart, setCart]}>
                {props.children}
            </CartContext.Provider>
        );

}

