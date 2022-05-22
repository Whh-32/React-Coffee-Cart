import React from "react";
import searchLogo from "../../../images/icons8-search-30.png"
import classes from "./Search.module.css"

const Search = () => {
    return (
        <div className={classes.search}>
            <div>
                <img src={searchLogo} />
            </div>
            <input className={classes.input} placeholder="Search" />
        </div>
    );
}

export default Search;