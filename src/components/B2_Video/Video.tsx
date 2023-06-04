import * as React from "react";
import style from "./Video.module.scss";
import arrow from "../../assets/png/arrow_down.png";
import preview from "../../assets/png/preview.png";
import ReactPlayer from "react-player";
import {useRef, useState} from "react";
// @ts-ignore
import src from "../../assets/mp4/src.mp4";
import {svgIcons} from "../../assets/svgIcons";

export const Video = () => {
    const playerRef = useRef<ReactPlayer>(null);
    const [playing, setPlaying] = useState(false);
    const [played, setPlayed] = useState(false);
    const [firstStatus, setFirstStatus] = useState(false);
    const [fullscreenStatus, setFullscreenStatus] = useState(false);

    const onClick = () => {
        setPlaying(true);
        setPlayed(true);
        setFirstStatus(true);
    };

    const onEnd = () => {
        setPlaying(false);
        setPlayed(false);
        setFirstStatus(false);
    };

    const onPause = () => {
        setPlaying(false);
    };

    const fullscreenMode = () => {
        const elements: any = document.getElementById("videoId");
        setFullscreenStatus(true);
        if (elements.requestFullscreen) {
            elements.requestFullscreen();
        } else if (elements.webkitRequestFullscreen) {
            /* Safari */
            elements.webkitRequestFullscreen();
        } else if (elements.msRequestFullscreen) {
            /* IE11 */
            elements.msRequestFullscreen();
        }
    };

    return (
        <div className={style.video}>

            <img src={arrow} alt="" className={style.arrow}/>

            <div className={style.videoWrapper}>
                <img src={preview}
                     style={{
                         display: played ? "none" : "block",
                         zIndex: 100,
                     }}
                     alt=""
                     className={style.preview}
                />

                <ReactPlayer
                    id="videoId"
                    ref={playerRef}
                    playing={playing}
                    url={src}
                    controls={fullscreenStatus}
                    height="100%"
                    width="100%"
                    onEnded={onEnd}
                />
                {!playing && (
                    <button
                        className={style.playBtn}
                        onClick={onClick}
                        style={{display: !firstStatus ? "block" : ""}}
                    >
                        {svgIcons.play}
                    </button>
                )}
                {playing && (
                    <button className={style.pauseBtn} onClick={onPause}>
                        {svgIcons.pause}
                    </button>
                )}
                <button className={style.fullscreenBtn} onClick={fullscreenMode}>
                    {svgIcons.fullscreen}
                </button>
            </div>

        </div>
    )
}
