import React from 'react'

import classes from "./Footer.module.css"
import icon1 from "../../images/icons8-facebook-f-50.png"
import icon2 from "../../images/icons8-twitter-30.png"
import icon3 from "../../images/icons8-instagram-30.png"

import img1 from "../../images/maxx-coffee.png"
import img2 from "../../images/logo_max10.png.save"


const Footer = () => {

    const icons = [{
        src: icon1,
        id: "1"
    },
    {
        src: icon2,
        id: "2"
    },
    {
        src: icon3,
        id: "3"
    }
    ]

    return (
        <footer>
            <div className={classes.footer}>
                <div className={classes.footerInformation}>
                    <div className={classes.logos}>
                        <span>
                            <img src={img1} alt="maxx logo" />
                            <img src={img2} alt="maxx10 logo" />
                        </span>
                    </div>
                    <div className={classes.links}>
                        <a href='/' >Terms of Service</a>
                        <a href='/' >Privacy Policy</a>
                        <a href='/' >Security</a>
                        <a href='/' >Sitemap</a>
                    </div>

                </div>
                <div className={classes.production}>
                    <span> ©2022 MAXX Coffee Company. All rights reserved.</span>
                    <div className={classes.icons}>
                        {icons.map((icon) => (
                            <a href='/' key={icon.id} >
                                <i className={classes.icon}>
                                    <img src={icon.src} alt={`icon${icon.id}`} />
                                </i>
                            </a>
                        ))}
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer;