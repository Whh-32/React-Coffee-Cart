import React from 'react'

import Cart from '../../../Shop/Cart'
import classes from "./ProductPreview.module.css"

const ProductPreview = (props) => {
    return (
        <div className={classes.product}>
            <div className={classes.leftPre}>
                <span className={classes.title}>{props.title}</span>
                <span className={classes.description}>{props.description}</span>
                <span className={classes.price}>${props.price}</span>
            </div>
            <div className={classes.rightPre}>
                <div className={classes.img}><img src={props.img} alt="cart" /></div>
                <Cart />
            </div>
        </div>
    )
}

export default ProductPreview