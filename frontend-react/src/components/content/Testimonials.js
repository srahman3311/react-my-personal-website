import { useState } from "react";
import { makeStyles } from "@mui/styles";
// import { Button } from "@material-ui/core";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CarouselChild from "./testmonials/CarouselChild";


// Components
// import Goal from "./Goal";

const useStyles = makeStyles({

    testimonials: {
        // backgroundColor: "green",
        height: "200px"
    },
    
    carousel_container: {
        position: "relative",
        // top: "0",
        // left: "0",
        width: "100%",
        minHeight: "200px",
        backgroundColor: "#ccc",
        overflow: "hidden",
        padding: "30px"
        // transform: "translateX(100%)",
    },
    backIcon: {
        position: "absolute",
        top: "50%",
        left: "5px",
        transform: "translate(0%, -50%)",
        zIndex: "1"
    },
    forwardIcon: {
        position: "absolute",
        top: "50%",
        right: "5px",
        transform: "translate(0%, -50%)",
        zIndex: "1"
    },
    carousel: {
        position: "absolute",
        left: "0",
        top: "0",
        right: "0",
        bottom: "0",
        width: "200%",
        // minHeight: "100%",
        // overflow: "hidden",
        backgroundColor: "blue",
        display: "flex",
        // flexDirection: "row",
        // flexWrap: "wrap",
        padding: "0 1%",
        // overflowX: "auto",
        transition: "0.5s"
        // transform: "translateX(100%)",
        // zIndex: "-1"
    },
   

});



export default function Testimonials () {

    const classes = useStyles();

    const [step, setStep] = useState(0);
    const [left, setLeft] = useState(0);
    
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

    function forward () {

        setStep(step + 1);

        if(step === 0) return setLeft(-33.33);
        if(step === 1) return setLeft(-33.33 * 2)
        if(step === 2) return setLeft(-33.33 * 3);
        if(step === 3) return setStep(step);
        
    }

    function backward () {

        setStep(step - 1);

        if(step === 1) return setLeft(0);
        if(step === 0) return setStep(step);
        setLeft(left + 33.33)
        
    }

    
    return (
        <div className={classes.testimonials} >
           
           
            <h3>Products you might like</h3>
            <div className={classes.carousel_container}>
                <ArrowBackIosIcon onClick={backward} className={classes.backIcon} />
                <ArrowForwardIosIcon onClick={forward} className={classes.forwardIcon} />
                <div className={classes.carousel} style = {{left: `${left}%`}}>
                    <CarouselChild content = "1" />
                    <CarouselChild content = "2" />
                    <CarouselChild content = "3" />
                    <CarouselChild content = "4" />
                    <CarouselChild content = "5" />
                    <CarouselChild content = "6" />
                </div>
            </div>
         
           
        </div>
    );
}