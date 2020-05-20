import React from 'react';
import MainView from './components/MainView/MainView';
import {CartProvider} from './CartProvider'
import {ModalProvider} from './ModalProvider'


function App() {
  return (
    <div className="App">
      <CartProvider>
        <ModalProvider>
          <MainView />
        </ModalProvider>
      </CartProvider>
    </div>
  );
}

export default App;
 