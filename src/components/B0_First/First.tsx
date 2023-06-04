import * as React from "react";
import style from "./First.module.scss";
import src0 from "../../assets/png/social_icon_0.png";
import src1 from "../../assets/png/social_icon_1.png";
import src2 from "../../assets/png/social_icon_2.png";
import logo from "../../assets/png/first_logo.png";
import sub_logo from "../../assets/png/first_sublogo.png";

export const socialLinks = [
    {src: src0, href: "#"},
    {src: src1, href: "#"},
    {src: src2, href: "#"},
]

export const First = () => {
    return (
        <div className={style.first}>

            <div className={style.socialLinks}>
                {
                    socialLinks.map(({src, href}, key) => (
                        <a key={key}
                           href={href}
                           className={style.link}
                        >
                            <img src={src} alt=""/>
                        </a>
                    ))
                }
            </div>

            <img src={logo} alt="" className={style.logo}/>

            <img src={sub_logo} alt="" className={style.sublogo}/>

        </div>
    )
}
