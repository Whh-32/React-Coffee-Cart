import React from 'react'
import classes from './Products.module.css'

import img1 from "../../images/product1.webp"

const Products = () => {
    return (
        <div className={classes.product} >
            <div className={classes.image}>
                <img src={img1} alt="robosta" />
            </div>
            <div className={classes.description} >
                <span className={classes.title} >Colombia Black Condor</span>
                <span className={classes.text} >
                    A very special green bean produced by two brothers, Emanuel & Valentina.
                </span>
                <div className={classes.card}>

                </div>
            </div>
        </div>
    );
}

export default Products