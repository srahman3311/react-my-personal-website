import { useState } from "react";

// Components
import FullScreenIcon from "./FullScreenIcon";
import FullScreenView from "./FullScreenView";


export default function Image({ imageSrc, imageDescription }) {

    // To show/hide fullscreen icon on window width change. 
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
   
    // Clicking on full screen icon or image itself should open the image in full view. So need to add
    // onClick event handler on both of them.
    const [fullScreen, setFullScreen] = useState(false);
    const [imageState, setImageState] = useState({
        imageOpacity: 0.8,
        iconOpacity: 0,
    });

    function mouseOverHandler(event) {

        const targetClassName = event.target.className;

        setImageState(currentValue => {
            return {
                ...currentValue,
                imageOpacity: 1,
                iconOpacity: targetClassName === "Image" ? 0.8 : 1.1
            };
        });

    }

    function mouseOutHandler(event) {

        const targetClassName = event.target.className;

        setImageState(currentValue => {
            return {
                ...currentValue,
                imageOpacity: 0.8,
                iconOpacity: targetClassName === "Image" ? 0 : 0.8
            };
        });

    }


    return (
        <>
            <div className="image_container">
                <img
                    style = {{
                        opacity: imageState.imageOpacity, 
                        transform: imageState.imageOpacity === 1 && "scale(1.1)"
                    }}
                    className = "Image" 
                    src = {imageSrc} 
                    alt = {imageDescription} 
                    onMouseOver = {event => mouseOverHandler(event)}
                    onMouseOut = {event => mouseOutHandler(event)}
                    onClick = {() => setFullScreen(true)}
                />
                <FullScreenIcon 
                    opacity = {imageState.iconOpacity} 
                    mouseOverHandler = {mouseOverHandler}
                    mouseOutHandler = {mouseOutHandler}
                    setFullScreen = {setFullScreen}
                    windowWidth = {windowWidth}
                />
                <FullScreenView
                    imageSrc = {imageSrc}
                    imageDescription = {imageDescription} 
                    fullScreen = {fullScreen} 
                    setFullScreen = {setFullScreen}
                    windowWidth = {windowWidth}
                />
            </div>
        </>
    );
}