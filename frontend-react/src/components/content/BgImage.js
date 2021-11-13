import { makeStyles } from "@mui/styles";

// Image
import bgImage from "../../images/mountain.jpg";


const useStyles = makeStyles({
    bgImage_container: {
        width: "100%",
        height: "100%",
        zIndex: "-1"
    },
    bgImage: {
        width: "100%",
        height: "100%",
        opacity: "0.1"
    },
});



export default function BgImage() {

    const classes = useStyles();


    return (
        <div className={classes.bgImage_container}>
            <img className={classes.bgImage} src = {bgImage} alt="" />
        </div>
    );
}