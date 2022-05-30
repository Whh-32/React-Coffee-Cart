import React from "react";

import classes from "./Navigation.module.css";
import logo from "../../../images/maxx-coffee.png";
import personLogo from "../../../images/icons8-personBlack-24.png";
import Search from "./Search";
import CartPreview from "./Basket/CartPreview";

const Navigation = () => {

    // const numberOfCart = cartCtx.products.reduce((acc, product) => {      /*warning...*/
    //     return acc + product;
    // }, 0)

    return (
        <nav className={classes.nav}>
            <div className={classes.leftNav}>
                <i className={classes.logo}>
                    <img src={logo} alt="logo coffe" />
                </i>
                <span>MAXX Coffee</span>
            </div>
            <div className={classes.rightNav}>
                <div className={classes.basket}>
                    <Search />
                    <i>
                        <img src={personLogo} alt="login icon" />
                    </i>
                    <CartPreview />
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
