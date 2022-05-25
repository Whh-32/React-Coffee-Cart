import React, { Fragment } from "react";

import classes from "./Slide.module.css"

const Slide = (props) => {

    return (
        <Fragment>
            {props.slideData.map((slide) => (
                <div
                    key={slide.id}
                    className={classes.slide}
                    style={{ transform: `translateX(${-100 * props.sliderPic}%)` }}
                >
                    <div className={classes.description}>
                        <h2>{slide.title}</h2>
                        <span>{slide.description}</span>
                    </div>
                    <img src={slide.image} alt="coffee"/>
                </div>
            ))}
        </Fragment>
    );

}

export default Slide;