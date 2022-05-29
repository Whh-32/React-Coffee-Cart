import React from "react";

const CartContext = React.createContext({
    products: [],
    totalAmount: 0,
    addProduct: (products) => {},
    removeProducts: (id) => {}
});

export default CartContext;