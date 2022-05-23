import React, { useState } from "react";
import classes from "./Slider.module.css";
import leftArrow from "../../images/icons8-chevron-left-30.png"
import rightArrow from "../../images/icons8-chevron-right-30.png"

import img1 from "../../images/img1.jpg"
import img2 from "../../images/img2.jpg"
import img3 from "../../images/img3.jpg"


const Slider = () => {
    const [sliderPic, setSlidePic] = useState(0);

    const images = [
        img1,
        img2,
        img3
    ];

    const sliderClickHandler = (buttom) => {
        console.log(sliderPic)
        if (buttom === "left") {
            setSlidePic(sliderPic !== 0 ? sliderPic - 1 : images.length - 1);

        }
        if (buttom === "right") {
            setSlidePic(sliderPic !== images.length - 1 ? sliderPic + 1 : 0);
        }
    }

    return (
        <div className={classes.slider}>
            <div className={classes.arrow} style={{ left: 0 }} onClick={() => { sliderClickHandler("left") }}>
                <img src={leftArrow} alt="arrow icon" />
            </div>
            <div className={classes.container} >
                <div className={classes.description}>
                    <h2>title</h2>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde iure vero, quae cumque architecto doloremque inventore deserunt magni quo expedita est dicta ut necessitatibus nobis beatae laborum ipsa molestias explicabo?</span>
                </div>
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        style={{ transform: `translateX(${-100 * sliderPic}%)` }}
                        alt={`coffee${index}`}
                    />
                ))}
            </div>
            <div className={classes.arrow} style={{ right: 0 }} onClick={() => { sliderClickHandler("right") }}>
                <img src={rightArrow} alt="arrow icon" />
            </div>
        </div>
    );
}

export default Slider;