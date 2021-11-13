import React from "react";
import { makeStyles } from "@mui/styles";

// https://preview.themeforest.net/item/arter-cv-resume-portfolio-web-app-template/full_screen_preview/27008333?_ga=2.17185657.1796135757.1634713393-780342762.1628742088

import Image from "../../../src/images/IMG20180125111801.jpg";



const useStyles = makeStyles({

    brief_info: {
        // marginLeft: "10px",
        // position: "fixed",
        // left: "0",
        // top: "0",
        // width: "18%",
        width: "100%",
        backgroundColor: "#506D84",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "3% 2%",
        marginBottom: "40px",
        "@media(max-width: 600px)": {
            width: "80%",
        }
    },

    briefInfo_content: {
        width: "90%",
        height: "50%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },

    myImage_container: {
        width: "150px",
        height: "150px",
        marginBottom: "10px"
    },
    myImage: {
        width: "100%",
        height: "100%",
        verticalAlign: "right",
        borderRadius: "50%"
    }, 
    about_me: {
        fontSize: "12px", 
        opacity: "0.8",
        color: "rgba(255, 255, 255, 0.4)"
    }
});


export default function ProfileImage() {

    const classes = useStyles();

    return (
        <div className={classes.brief_info}>
            <div className={classes.briefInfo_content}>
                <div className={classes.myImage_container}>
                    <img className={classes.myImage} src={Image} alt="My" />
                </div>
                <h3 style={{fontSize: "16px", marginBottom: "5px", color: "white"}}>Samsur Rahman Rafez</h3>
                <p className={classes.about_me} >Full Stack Developer</p>
                <p className={classes.about_me} >UI/UX Specialist</p>
                
            </div>
        </div>
    );
}