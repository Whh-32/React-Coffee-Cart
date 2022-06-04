import React, { useContext } from 'react'
import Compare from '../../Function/Compare'

import classes from "./Cart.module.css"
import icon from "../../images/icons8-shopping-cart-24.png"
import CartContext from '../Context/CartContext'

const Cart = (props) => {
    const cartCtx = useContext(CartContext)
    const addClickHandler = () => {
        props.onDataToCart()
    }
    const removeClickHandler = () => {
        props.onRemove()
    }

    let elem;
    if (Compare(cartCtx.products, props.id) > 0) {
        elem = (
            <div className={classes.addCart} >
                <button className={classes.buttons} onClick={() => { addClickHandler() }} >+</button>
                <span>{Compare(cartCtx.products, props.id)}</span>
                <button className={classes.buttons} onClick={() => { removeClickHandler() }} >-</button>
            </div>
        );
    } else {
        elem = (
            <button className={classes.add} onClick={() => { addClickHandler() }} >
                <img src={icon} alt="icon shop" />
            </button>);
    }

    return (
        <div>
            {elem}
        </div>
    )
}

export default Cart