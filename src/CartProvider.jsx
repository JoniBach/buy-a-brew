import CartContext from './CartContext';
import React, {Component} from 'react'



class CartProvider extends Component {
    state = {
        beers: [{}],

    };

    async componentDidMount() {
        const beerData = 'https://api.punkapi.com/v2/beers';
        const response = await fetch(beerData);
        const data = await response.json();
        console.log(data)
        this.setState({ beers: data });
    };

    render() {
        return (
            <CartContext.Provider
                value={{
                    beers: this.state.beers,
                   
                }}
            >
                {this.props.children}
            </CartContext.Provider>
        );
    }
}

export default CartProvider;