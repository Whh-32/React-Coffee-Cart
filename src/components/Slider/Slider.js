import React, { useState, useEffect } from "react";

import classes from "./Slider.module.css";
import leftArrow from "../../images/icons8-chevron-left-30.png"
import rightArrow from "../../images/icons8-chevron-right-30.png"
import Slide from "./Slide";

import img1 from "../../images/img1.jpg"
import img2 from "../../images/img2.jpg"
import img3 from "../../images/img3.jpg"


const Slider = () => {
    const [sliderPic, setSlidePic] = useState(0);

    const slideData = [{
        image: img1,
        title: "MAXX Coffee",
        description: "IS SOURCED FROM AROUND THE WORLD",
        id: 1
    },
    {
        image: img2,
        title: "What is coffee?",
        description: "IS SOURCED FROM AROUND THE WORLD",
        id: 2
    },
    {
        image: img3,
        title: "Onlide Order",
        description: "IS SOURCED FROM AROUND THE WORLD",
        id: 3
    }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setSlidePic(prevSlider => {
                return (
                    prevSlider !== slideData.length - 1 ? prevSlider + 1 : 0)
            });
        }, 6000);

        return () => clearInterval(interval);
    }, [slideData.length, sliderPic]);

    const sliderClickHandler = (buttom) => {
        if (buttom === "left") {
            setSlidePic(sliderPic !== 0 ? sliderPic - 1 : slideData.length - 1);
        }
        if (buttom === "right") {
            setSlidePic(sliderPic !== slideData.length - 1 ? sliderPic + 1 : 0);
        }
    }


    const manualSlider = (index) => {
        setSlidePic(index);
    }

    return (
        <div className={classes.slider}>
            <div className={classes.arrow} style={{ left: 0 }} onClick={() => { sliderClickHandler("left") }}>
                <img src={leftArrow} alt="arrow icon" />
            </div>
            <div className={classes.container} >

                <Slide sliderPic={sliderPic} slideData={slideData} />

            </div>
            <div className={classes.arrow} style={{ right: 0 }} onClick={() => { sliderClickHandler("right") }}>
                <img src={rightArrow} alt="arrow icon" />
            </div>
            <div className={classes.sliderPoint}>
                <ul>
                    {slideData.map((slide, index) => (
                        <li
                            key={slide.id}
                            className={index === sliderPic ? classes.active : ""}
                            onClick={() => { manualSlider(index) }}
                        ></li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Slider;