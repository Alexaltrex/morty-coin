import React from 'react';
import style from "./App.module.scss";
import {First} from "../B0_First/First";
import {Timer} from "../B1_Timer/Timer";
import {AboutUs} from "../B3_AboutUs/AboutUs";
import {Roadmap} from "../B4_Roadmap/Roadmap";
import {Video} from "../B2_Video/Video";
import {Tokenomics} from "../B5_Tokenomics/Tokenomics";
import {Footer} from "../B6_Footer/Footer";
import back from "../../assets/png/background.png";

export const App = () => {
    return (
        <div className={style.app}>

            <img src={back} alt="" className={style.back}/>

            <div className={style.inner}>
                <First/>
                <Timer/>
                <Video/>
                <AboutUs/>
                <Roadmap/>
                <Tokenomics/>
                <Footer/>
            </div>
        </div>
    );
}

