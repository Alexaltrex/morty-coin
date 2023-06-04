import * as React from "react";
import style from "./AboutUs.module.scss";
import clsx from "clsx";

const text_0 = "Uh, hey everyone. It's, um, Morty here. I, uh, wanted to let you all know that, uh, I've created this thing called Morty Coin.";
const text_1 = "It's, uh, um, people who didn't get a chance to, uh, be part of the whole Rick Coin thing. You know, in the show Rick and Morty, I, um, get to choose one adventure out of every, uh, ten. So, um, now it's my turn to, uh, shine";


export const AboutUs = () => {
    return (
        <div className={style.aboutUs}>

            <h2 className={style.title}>ABOUT US</h2>

            <p className={clsx(style.text, style.text_1)}>
                {text_0}
            </p>

            <p className={clsx(style.text, style.text_2)}>
                {text_1}
            </p>

            <div className={style.buttons}>
                <button>
                    <p>WHITEPAPER</p>
                </button>
                <button>
                    <p>AUDIT</p>
                </button>
            </div>


        </div>
    )
}
