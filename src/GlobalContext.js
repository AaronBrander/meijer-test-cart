import React from "react";

export default React.createContext({
  profile: {},
  isLoggedIn: false,
  products: [],
  cart: [],
  getProducts: () => {},
  updateCart: () => {},
  signOut: () => {},
  signIn: () => {},
});