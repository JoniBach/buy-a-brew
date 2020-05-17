import React from 'react';
import MainView from './components/MainView/MainView';
import CartProvider from './CartProvider'


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
