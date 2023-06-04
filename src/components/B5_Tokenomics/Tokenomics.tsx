import * as React from "react";
import style from "./Tokenomics.module.scss";
import tokenomics from "../../assets/png/tokenomics.png";
import clsx from "clsx";

export const Tokenomics = () => {
    return (
        <div className={style.tokenomics}>
            <h2 className={style.title}>Tokenomics</h2>

            <img src={tokenomics} alt=""/>

            <p className={clsx(style.text, style.text_1)}>
                Uh, hey there, it's Morty again. So, um, it's all about the market cap.
            </p>

            <p className={clsx(style.text, style.text_2)}>
                The more holders we have, the higher the market cap goes. And, uh, that's how we get rich, Morty!
            </p>
        </div>
    )
}
