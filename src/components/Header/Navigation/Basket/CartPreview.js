import React, { useContext } from 'react'

import classes from "./CartPreview.module.css"
import CartContext from "../../../Context/CartContext";
import basketLogo from "../../../../images/icons8-basketBlack-24.png";
import ProductPreview from './ProductPreview';

const CartPreview = () => {
    const cartCtx = useContext(CartContext);
    const numberOfCart = cartCtx.products.length;
    const product = cartCtx.products.map((product, index) => (
        <ProductPreview
            key= {index}
            id= {product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            img={product.img}
        />
    ));

    return (
        <i className={classes.basket}>
            <div className={classes.amount}>{numberOfCart}</div>
            <img src={basketLogo} alt="basket icon" />
            <div className={classes.cartPreview}>
                <div className={classes.cart}>
                    <div className={classes.header}>{"Go To Cart >"}</div>
                    <div className={classes.products}>
                        {product}
                    </div>
                    <div className={classes.totalAmount}>
                        <button>payment</button>
                        <span>Amount<span>$ {cartCtx.totalAmount}</span></span>
                    </div>
                </div>
            </div>
        </i>
    )
}

export default CartPreview