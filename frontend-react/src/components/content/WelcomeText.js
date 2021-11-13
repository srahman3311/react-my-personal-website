// npm install react-typical --legacy-peer-deps
import Typical from "react-typical";
import { makeStyles } from "@mui/styles";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Button from '@mui/material/Button';

import bgImage from "../../images/mountain.jpg";
import Image from "../../images/IMG_20181130_163910-removebg-preview.png"



const useStyles = makeStyles({
    welcome_text: {
        width: "100%",
        height: "400px",
        position: "relative",
        overflow: "hidden",
        // padding: "30px",
        // display: "flex",
        backgroundColor: "#082032",
        color: "rgba(255, 255, 255, 0.7)",
        borderLeft: "1px solid black",
        // overflow: "auto",
        // '&::-webkit-scrollbar': {
        //     width: '0em'
        //   },
        //   '&::-webkit-scrollbar-track': {
        //     '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        //   },
        //   '&::-webkit-scrollbar-thumb': {
        //     backgroundColor: 'rgba(0,0,0,.1)',
        //     outline: '1px solid slategrey'
        // }
    },

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

    main_content: {
        position: "absolute",
        top: "0px",
        left: "0px",
        width: "100%",
        height: "100%",
        zIndex: "1",
        overflow: "auto",
        padding: "30px"
        // backgroundColor: "gray"
    },

    mainContent_content: {
        width: "100%",
        height: "400px",
        backgroundColor: "green",
        position: "relative"
        // opacity: "0.5"
    },

    welcomeText_content: {
        position: "absolute",
        top: "50%",
        left: "5%",
        transform: "translate(0, -50%)",
        width: "60%",
        // height: "100%",
        zIndex: "1",
        // paddingLeft: "60px"
    },

    newImage: {
        width: "550px",
        height: "480px",
        position: "absolute",
        bottom: "-10px",
        right: "-30px",
        opacity: "1"

    },
    header: {
        fontSize: "24px",
        color: "white",
        paddingBottom: "4px",
        marginRight: "10px"
    }

});










export default function WelcomeText() {

    const classes = useStyles();


    return (
        
        <div className={classes.welcome_text}>
            <div className={classes.bgImage_container}>
                <img style = {{opacity: "0.4"}} className={classes.bgImage} src = {bgImage} alt="" />
            </div>
            <img className={classes.newImage} src = {Image} alt="" />
            <div className={classes.welcomeText_content}>
                <h1 style = {{fontSize: "2.8rem"}}>Discover My Amazing Problem Solving Skills</h1>
                
                <div style = {{display:"flex", alignItems: "center", marginBottom: "20px"}}>
                    <span style = {{display: "flex", alignItems: "center", fontSize: "24px"}}>&lt;<span style = {{paddingBottom: "5px"}}>code</span>&gt;   </span>
                    <span style ={{marginRight: "10px", marginLeft: "10px", fontSize: "24px", paddingBottom: "4px"}}>I am </span>
                    <Typical
                        // style = {{fontSize: "24px"}}
                        className={classes.header}
                        steps={['Developer and problem solver.', 500, 'An Artist.', 500]}
                        loop={Infinity}
                        wrapper="h2"
                    />
                    <span style = {{display: "flex", alignItems: "center", fontSize: "24px"}}>&lt;/<span style = {{paddingBottom: "5px"}}>code</span>&gt;</span>
                </div>
                <Button variant="contained">Explore Now</Button>
            </div>
        </div>
    );
}