import { useReducer } from "react";
import CartContext from "./CartContext";

const cartReducer = (state, action) => {
    if (action.type === "ADD") {
        const updatProducts = state.products.concat(action.product);
        const updatTotalAmount = state.totalAmount + action.product.price ;
        return {
            products: updatProducts,
            totalAmount: updatTotalAmount
        }
    }
    return initializeCart;
}

const initializeCart = {
    products: [],
    totalAmount: 0
}

const CartProvider = (props) => {
    const [stateCart, dispatchCart] = useReducer(cartReducer, initializeCart)
    const addProduct = (product) => {
        dispatchCart({type: "ADD", product: product});
    }

    const removeProduct = (id) => {
        dispatchCart({type: "REMOVE", id: id});
    }

    const cartContext = {
        products: stateCart.products,
        totalAmount: stateCart.totalAmount,
        addProduct: addProduct,
        removeProducts: removeProduct
    }
    
    return (
        <CartContext.Provider value={cartContext} >
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;
