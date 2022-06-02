import React, { useState } from 'react'

import classes from "./Cart.module.css"
import icon from "../../images/icons8-shopping-cart-24.png"

const Cart = (props) => {
    const [count, setCount] = useState(0);
    const addClickHandler = () => {
        props.onDataToCart(count + 1)
        setCount(prevCount => {
            return prevCount + 1
        });
    }
    const removeClickHandler = () => {
        props.onRemove()
        setCount(prevCount => {
            return prevCount - 1
        });
    }

    let elem;
    if (count > 0) {
        elem = (
            <div className={classes.addCart} >
                <button className={classes.buttons} onClick={() => { addClickHandler() }} >+</button>
                <span>{count}</span>
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