import React, {useContext} from 'react'
import CartContext from '../Context/CartContext'
import classes from './Product.module.css'

import Cart from './Cart'

const Products = (props) => {
    const cartCtx = useContext(CartContext);
    const dataHandler = (amount) => {
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
        <div className={classes.product} >
            <div className={classes.image}>
                <img src={props.img} alt="robosta" />
            </div>
            <div className={classes.description} >
                <div className={classes.information}>
                    <span className={classes.title} >{props.title}</span>
                    <span className={classes.text} >{props.description}</span>
                    <span className={classes.price} >${props.price.toFixed(2)}</span>
                </div>
                <div className={classes.cart}>
                    <Cart onDataToCart={dataHandler} onRemove={removeHandler} id={props.id} />
                </div>

            </div>
        </div>
    );
}

export default Products