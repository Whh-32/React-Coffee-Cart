import { useEffect, useReducer } from "react";
import CartContext from "./CartContext";

const cartReducer = (state, action) => {
    if (action.type === "ADD") {
        const updateTotalAmount = state.totalAmount + action.product.price;
        const existIndexProduct = state.products.findIndex(
            (product) => product.id === action.product.id
        );
        const existProduct = state.products[existIndexProduct];
        let updateProducts;

        if (existProduct) {
            const updateProduct = {
                ...existProduct,
                amount: existProduct.amount + 1
            }
            updateProducts = [...state.products];
            updateProducts[existIndexProduct] = updateProduct;
        } else {
            const addamount = { ...action.product, amount: 1 }
            updateProducts = [...state.products, addamount];
        }

        return {
            products: updateProducts,
            totalAmount: updateTotalAmount
        }
    }
    if (action.type === "REMOVE") {
        const existIndexProduct = state.products.findIndex(
            (product) => product.id === action.id
        )
        const existProduct = state.products[existIndexProduct]
        const updateTotalAmount = state.totalAmount - existProduct.price
        let updateProducts;
        if (existProduct.amount === 1) {
            updateProducts = state.products.filter((product) => product.id !== action.id)
        } else {
            const updateProduct = { ...existProduct, amount: existProduct.amount - 1 }
            updateProducts = [...state.products]
            updateProducts[existIndexProduct] = updateProduct;
        }
        return {
            products: updateProducts,
            totalAmount: updateTotalAmount
        }
    }

    return initializeCart;
}

let initializeCart;
if (localStorage.getItem("cart") === null) {
    initializeCart = {
        products: [],
        totalAmount: 0
    }
} else {
    initializeCart = JSON.parse(localStorage.getItem("cart"))
}

const CartProvider = (props) => {
    const [stateCart, dispatchCart] = useReducer(cartReducer, initializeCart)
    const addProduct = (product) => {
        dispatchCart({ type: "ADD", product: product });
    }

    const removeProduct = (id) => {
        dispatchCart({ type: "REMOVE", id: id });
    }

    const cartContext = {
        products: stateCart.products,
        totalAmount: stateCart.totalAmount.toFixed(2),
        addProduct: addProduct,
        removeProducts: removeProduct
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(stateCart));
    },[stateCart])

    return (
        <CartContext.Provider value={cartContext} >
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;
