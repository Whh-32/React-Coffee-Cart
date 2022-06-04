import React, {useContext} from 'react'
import CartContext from '../../../Context/CartContext'

import Cart from '../../../Shop/Cart'
import classes from "./ProductPreview.module.css"

const ProductPreview = (props) => {
    const cartCtx = useContext(CartContext);
    const dataHandler = () => {
        cartCtx.addProduct({
            title: props.title,
            description: props.description,
            price: props.price,
            img: props.img,
            id: props.id
        });
    }
    const removeHandler = () => {
        cartCtx.removeProducts(props.id)
    }
    return (
        <div className={classes.product}>
            <div className={classes.leftPre}>
                <span className={classes.title}>{props.title}</span>
                <span className={classes.description}>{props.description}</span>
                <span className={classes.price}>${props.price.toFixed(2)}</span>
            </div>
            <div className={classes.rightPre}>
                <div className={classes.img}><img src={props.img} alt="cart" /></div>
                <Cart onDataToCart={dataHandler} onRemove={removeHandler} id={props.id} />
            </div>
        </div>
    )
}

export default ProductPreview