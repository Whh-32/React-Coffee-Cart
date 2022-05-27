import React from 'react'
import Products from './Products'
import classes from "./Shop.module.css"

const Shop = () => {
    return (
        <div className={classes.shopContain} >
            <div className={classes.products}>
                <Products />
                <Products />
                <Products />
                <Products />
                <Products />
                <Products />
                <Products />
                <Products />
            </div>
        </div>
    )
}

export default Shop