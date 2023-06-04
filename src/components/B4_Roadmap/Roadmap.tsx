import * as React from "react";
import style from "./Roadmap.module.scss";
import roadmap from "../../assets/png/roadmap.png";
import src0 from "../../assets/png/jar_0.png";
import src1 from "../../assets/png/jar_1.png";
import src2 from "../../assets/png/jar_2.png";

export const Roadmap = () => {
    return (
        <div className={style.roadmap}>
            <img src={roadmap} alt="" className={style.logo}/>

            <p className={style.text}>
                Uh, hey guys, it's Morty here. So, um, the roadmap is like this...
            </p>

            <div className={style.items}>
                {
                    [
                        {src: src0, text: "We go mortytown & find all the scared mortys who missed out on rick coin"},
                        {src: src1, text: "then, we form a gang called the mortytown locos"},
                        {src: src2, text: "and, uh, we put all our morty money in the pickle jar!"},
                    ].map(({src, text}, key) => (
                        <div key={key}
                             className={style.item}
                        >
                            <img src={src} alt=""/>
                            <p className={style.text}>{text}</p>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}
