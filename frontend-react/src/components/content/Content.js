import { useState } from "react";
import { makeStyles } from "@mui/styles";

// Components
import NavigationBar from "../reuseable-components/NavigationBar";
import bgImage from "../../images/mountain.jpg";
import BgImage from "./BgImage";
import WelcomeText from "./WelcomeText";
import Overview from "./Overview";
import MyServices from "./MyServices";
import PricePlans from "./PricePlans";
import Testimonials from "./Testimonials";
import ThreeD from "../translate-3d/ThreeD";



const useStyles = makeStyles({
    content: {
        minWidth: "85%",
        height: "100vh",
        position: "relative",
        // padding: "30px",
        // display: "flex",
        backgroundColor: "#082032",
        color: "rgba(255, 255, 255, 0.7)",
        borderLeft: "1px solid black",
        overflowX: "hidden",
        transition: "0.7s ease-in-out",
        transitionDelay: "0.2s",
        overflowY: "auto",
        '&::-webkit-scrollbar': {
            width: '0em'
          },
          '&::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,.1)',
            outline: '1px solid slategrey'
        }
    },

    content_container: {
        // position: "relative",
        width: "100%",
        height: "100%",
        display: "flex"
    },

    main_section: {
        position: "absolute",
        top: "0px",
        left: "0px",
        width: "90%",
        height: "100%",
        zIndex: "1",
        overflow: "auto",
        padding: "30px",
        '&::-webkit-scrollbar': {
            width: '0em'
          },
        // backgroundColor: "gray"
    },

    // mainContent_content: {
    //     width: "100%",
    //     height: "400px",
    //     backgroundColor: "green",
    //     position: "relative"
    //     // opacity: "0.5"
    // },

    // welcome_text: {
    //     position: "absolute",
    //     top: "0px",
    //     left: "0px",
    //     width: "100%",
    //     height: "100%",
    //     zIndex: "1",
    //     paddingLeft: "60px"
    // }

});










export default function Content() {

    const classes = useStyles();

    const [navbarWidth, setNavbarWidth] = useState(10);

    const expandNavbar = () => {
        setNavbarWidth(25);
    }



    return (
        <div 
            className={classes.content} 
        >
            <BgImage />
            <div className={classes.content_container}>

                <div className={classes.main_section}>
                    <WelcomeText />
                    <Overview />
                    <MyServices />
                    <PricePlans />
                    <Testimonials />
                    <ThreeD />
                </div>
                <NavigationBar
                    navbarWidth = {navbarWidth} 
                    expandNavbar = {expandNavbar}  
                />

            </div>
           

        </div>
    );
}