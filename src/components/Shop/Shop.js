import React from 'react'
import Product from './Product'
import classes from "./Shop.module.css"

import img1 from "../../images/product1.webp"

const Shop = () => {

    const CartProducts = [{
        title: "Colombia Black Condor",
        description: "A very special green bean produced by two brothers, Emanuel & Valentina.",
        price: 49,
        img: img1,
        id: 0
    }, {
        title: "Colombia white Condor for famouse people",
        description: "A very special green bean produced by two brothers, Emanuel & Valentina kjjsf asfergfe gesgearf argega eargsrth eggtweg",
        price: 34,
        img: img1,
        id: 1
    }]

    const product = CartProducts.map((data) => (
        <Product
            key={data.id}
            id={data.id}
            title={data.title}
            description={data.description}
            price={data.price}
            img={data.img}
        />
    ))

    return (
        <div className={classes.shopContain} >
            <div className={classes.products}>
                {product}
            </div>
        </div>
    )
}

export default Shop