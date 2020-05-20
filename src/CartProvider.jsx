// import CartContext from './CartContext';
import React, {useFetch, useState} from 'react'

export const CartContext = React.createContext();

export const CartProvider = (props) => {
const [cart, setCart] = useState([]);
const [open, setOpen] = React.useState(false);

    


        return (
            <CartContext.Provider value={[cart, setCart]}>
                {props.children}
            </CartContext.Provider>
        );

}

