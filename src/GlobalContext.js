import React from "react";

export default React.createContext({
  profile: {},
  products: [],
  cart: [],
  getProducts: () => {},
  updateCart: () => {},
  
});