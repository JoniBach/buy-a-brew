// import CartContext from './CartContext';
import React, {useFetch, useState} from 'react'

export const ModalContext = React.createContext();

export const ModalProvider = (props) => {
const [cart, setCart] = useState([]);
const [open, setOpen] = useState(false);
const [newBeerFromId, setnewBeerFromId] = useState(false);

    


        return (
            <ModalContext.Provider value={[newBeerFromId, setnewBeerFromId]}>
                {props.children}
            </ModalContext.Provider>
        );

}

