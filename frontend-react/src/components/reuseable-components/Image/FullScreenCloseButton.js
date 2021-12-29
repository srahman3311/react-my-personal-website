import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";

export default function FullScreenCloseButton({ setFullScreen }) {

    return (
        <div className = "fullScreen_close_button">
            <Button onClick = {() => setFullScreen(false)}>
                <CloseIcon style = {{color: "black"}} />
            </Button>
        </div> 
    );

}