import { useReducer } from "react";
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
                amount: action.product.amount
            }
            updateProducts = [...state.products];
            updateProducts[existIndexProduct] = updateProduct;
        } else {
            updateProducts = [...state.products, action.product];
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
        if (existProduct.amount === 1) {   /* whyyyyyyyyyyyyy????? === ok!!!! */
            updateProducts = state.products.filter((product) => product.id !== action.id)
        } else {
            const updateProduct = {...existProduct, amount: existProduct.amount - 1}
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

const initializeCart = {
    products: [],
    totalAmount: 0
}

const CartProvider = (props) => {
    const [stateCart, dispatchCart] = useReducer(cartReducer, initializeCart)
    const addProduct = (product) => {
        dispatchCart({ type: "ADD", product: product });
        console.log(stateCart)
    }

    const removeProduct = (id) => {
        dispatchCart({ type: "REMOVE", id: id });
        console.log(stateCart)
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
