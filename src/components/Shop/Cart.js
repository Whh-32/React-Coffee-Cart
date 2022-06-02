import React, { useState } from 'react'

import classes from "./Cart.module.css"
import icon from "../../images/icons8-shopping-cart-24.png"

const Cart = (props) => {
    const [count, setCount] = useState(0);
    const clickHandler = (type) => {
        setCount(prevCount => {
            return type === "add" ? prevCount + 1 : prevCount - 1;
        });
        props.onDataToCart(count +1) /* idk */
        console.log(count)
    }

    let elem;
    if (count > 0) {
        elem = (
            <div className={classes.addCart} >
                <button className={classes.buttons} onClick={() => { clickHandler("add") }} >+</button>
                <span>{count}</span>
                <button className={classes.buttons} onClick={() => { clickHandler("remove") }} >-</button>
            </div>
        );
    } else {
        elem = (
            <button className={classes.add} onClick={() => { clickHandler("add") }} >
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