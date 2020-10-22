import React, { Component } from "react";
import GlobalContext from "./GlobalContext";
import API from "./API";

class GlobalState extends Component {
  state = {
    profile: { firstName: "Aaron", lastName: "B"},
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
  updateCart = (cart) => {
    this.setState({ cart: cart });
  };
  
  

  render() {
    return (
      <GlobalContext.Provider
        value={{
          profile: this.state.profile,
          products: this.state.products,
          cart: this.state.cart,
          getProducts: this.getProducts,
          updateProfile: this.updateProfile,
          updateCart: this.updateCart,
        }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}

export default GlobalState;