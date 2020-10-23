import React, { Component } from "react";
import GlobalContext from "./GlobalContext";
import API from "./API";


class GlobalState extends Component {
  state = {
    profile: {},
    isLoggedIn: false,
    products: [],
    cart: [],
  };

  getProducts = () => {
    API.get().then((response) => {
      this.setState({ products: response });
    });
  };

  updateProfile = (profile) => {
    this.setState({ profile: profile });
  };

  updateCart = (product, quantity) => {
    if(quantity === undefined)
    {
      quantity = 1;
    }

    console.log('updateCart');
    const cartItems = this.state.cart.slice(); //immutability is important!

    //is the item in the cart already?
    let findCartItem = cartItems.find(x => x.code === product.code);
    console.log(findCartItem);
    if(findCartItem)
    {
      findCartItem.quantity += quantity;
      findCartItem.lineTotal = parseFloat(product.price.substring(1)) * quantity;
    }else
    {
      cartItems.push({
        name: product.name,
        price: product.price,
        image: product.image,
        code: product.code,
        quantity: quantity,
        lineTotal: parseFloat(product.price.substring(1)) * quantity,
      });

    }
console.log(cartItems);
  this.setState({ cart: cartItems });
  };
  
  signOut = () => {
    this.setState({ profile: {}, isLoggedIn: false});
  }
  
  signIn = () =>
  {
     this.setState({ profile: { firstName: "Test", lastName: "User"}, isLoggedIn: true});
  }

  render() {
    return (
      <GlobalContext.Provider
        value={{
          profile: this.state.profile,
          isLoggedIn: this.state.isLoggedIn,
          products: this.state.products,
          cart: this.state.cart,
          getProducts: this.getProducts,
          updateProfile: this.updateProfile,
          updateCart: this.updateCart,
          signOut: this.signOut,
          signIn: this.signIn
        }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}

export default GlobalState;