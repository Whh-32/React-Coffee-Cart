import React from 'react'
import classes from "./Category.module.css"

const Category = (props) => {
    return (
        <div className={classes.Category}>
            <span style={{backgroundPosition:`${props.imgPosition}`}}></span>
            <div>
                <span className={classes.title}>{props.title}</span>
                <span className={classes.desc}>{props.desc}</span>
            </div>
            
        </div>
    );
}

export default Category;