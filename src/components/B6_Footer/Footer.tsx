import * as React from "react";
import style from "./Footer.module.scss";
import {socialLinks} from "../B0_First/First";
import logo from "../../assets/png/footer.png";

export const Footer = () => {
    return (
        <footer className={style.footer}>
            <img src={logo} alt="" className={style.logo}/>

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


        </footer>
    )
}
