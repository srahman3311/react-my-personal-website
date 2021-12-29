import FullscreenIcon from "@mui/icons-material/Fullscreen";

function FullScreenIcon({ windowWidth, opacity, mouseOverHandler, mouseOutHandler, setFullScreen }) {


    return (

        <div 
            className="fullScreen_icon" 
            style = {{ opacity: windowWidth <= 600 ? "0.8" : opacity }}
            onMouseOver = {event => mouseOverHandler(event)}
            onMouseOut = {event => mouseOutHandler(event)}
            onClick = {() => setFullScreen(true)}
        >
            <FullscreenIcon style = {{color: opacity && "darkblue"}} />
        </div>
    )

}

export default FullScreenIcon;