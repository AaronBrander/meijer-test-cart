import React, { Component } from "react";
import GlobalContext from "./GlobalContext";

class GlobalState extends Component {
  state = {
    profile: { firstName: "Aaron", lastName: "B"},
    products: [],
    cart: [],
  };

  getProducts = () => {
    fetch("https://meijerdigital.azurewebsites.net/api/interview").then(function(response) {
        response.text().then(function(text) {
            console.log(text);
            console.log(this);
           // this.setState({ products: text });
          });    
    
       
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