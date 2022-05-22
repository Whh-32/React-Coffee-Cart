import { Fragment } from "react";
import classes from "./Header.module.css"
import Navigation from "./Navigation/Navigation";

const Header = () => {
    return (
        <Fragment>
            <header className={classes.header}>
                <Navigation />
            </header>
        </Fragment>
    );
}

export default Header;