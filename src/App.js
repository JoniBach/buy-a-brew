import React from 'react';
import MainView from './components/MainView/MainView';
import {CartProvider, CartContext} from './CartProvider'


function App() {
  return (
    <div className="App">
                  <CartProvider>

      <MainView />
      </CartProvider>
    </div>
  );
}

export default App;
