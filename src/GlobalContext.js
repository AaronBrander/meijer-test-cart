import React from "react";

export default React.createContext({
  profile: {},
  isLoggedIn: false,
  products: [],
  cart: [],
  showAlert: false,
  alertMessage: '',
  getProducts: () => {},
  updateCart: () => {},
  signOut: () => {},
  signIn: () => {},
  setShowAlert: () => {},
  setAlertMessage: () => {}, 
});