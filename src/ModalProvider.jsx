import React, { useState } from 'react';
export const ModalContext = React.createContext();
export const ModalProvider = (props) => {
const [newBeerFromId, setnewBeerFromId] = useState(false);

        return (
            <ModalContext.Provider value={[newBeerFromId, setnewBeerFromId]}>
                {props.children}
            </ModalContext.Provider>
        );

}

