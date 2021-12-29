import { useState } from "react";

// Children components
import FullScreenCloseButton from "./FullScreenCloseButton";



function FullScreenView({ windowWidth, imageSrc, imageDescription, fullScreen, setFullScreen }) {

    const imageStyle = {
        width: windowWidth <= 600 ? "100%" : "85%",
        height: "auto",
        cursor: "auto"
    }

    return (
        <div className="fullScreen_view" style = {{display: fullScreen ? "flex" : "none"}}>

            <FullScreenCloseButton setFullScreen = {setFullScreen} />

            <img
                /*
                Width and height of image have been set to 100%. But to allow some spaces on all sides
                for full screen view we need to reduce both width and height a little bit, hence the 
                following inline styling
                */
                style = {imageStyle}
                className = "Image" 
                src = {imageSrc} 
                alt = {imageDescription} 
            />

        </div>
    );

}


export default FullScreenView;