import React from 'react'
import Product from './Product'
import classes from "./Shop.module.css"

import pic1 from "../../images/pic1.webp";
import pic2 from "../../images/pic2.webp";
import pic3 from "../../images/pic3.webp";
import pic4 from "../../images/pic4.webp";
import pic5 from "../../images/pic5.webp";
import pic6 from "../../images/pic6.webp";
import pic7 from "../../images/pic7.webp";
import pic8 from "../../images/pic8.webp";
import pic9 from "../../images/pic9.webp";
import pic10 from "../../images/pic10.webp";


const Shop = () => {

    const CartProducts = [{
        title: "RYO BRAZIL",
        description: "BRAZIL SINGLE ORIGIN ROASTED COFFEE - 250G",
        price: 15.05,
        img: pic1,
        id: 0
    }, {
        title: "RYO COLOMBIA",
        description: "COLOMBIA SINGLE ORIGIN ROASTED COFFEE - 250G",
        price: 17.00,
        img: pic2,
        id: 1
    }, {
        title: "RYO ETHIOPIA",
        description: "ETHIOPIA SINGLE ORIGIN ROASTED COFFEE - 250G",
        price: 15.62,
        img: pic3,
        id: 2
    }, {
        title: "RYO NICARAGUA",
        description: "NICARAGUA SINGLE ORIGIN ROASTED COFFEE - 250G",
        price: 16.44,
        img: pic4,
        id: 3
    }, {
        title: "RYO BLEND",
        description: "RYO BLEND ROASTED COFFEE - 250G",
        price: 14.50,
        img: pic5,
        id: 4
    }, {
        title: "RYO SOUL",
        description: "SOUL OF AFRICA BLEND 250G",
        price: 18.99,
        img: pic6,
        id: 5
    }, {
        title: "RYO SOUL OF AMERICA",
        description: "SOUL OF AMERICA BLEND 250G",
        price: 17.80,
        img: pic7,
        id: 6
    }, {
        title: "RYO KENYA",
        description: "KENYA SINGLE ORIGIN ROASTED COFFEE - 250G",
        price: 19.66,
        img: pic8,
        id: 7
    }, {
        title: "RYO GUATEMALA",
        description: "GUATEMALA SINGLE ORIGIN ROASTED COFFEE - 250G",
        price: 20.00,
        img: pic9,
        id: 8
    }, {
        title: "RYO BEST",
        description: "BEST OF THE BLENDS 1.5KG",
        price: 95.99,
        img: pic10,
        id: 9
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