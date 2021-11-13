import React from "react";
import { makeStyles } from "@mui/styles";
import { CircularProgressbar } from "react-circular-progressbar";

// https://preview.themeforest.net/item/arter-cv-resume-portfolio-web-app-template/full_screen_preview/27008333?_ga=2.17185657.1796135757.1634713393-780342762.1628742088

import Image from "../../../src/images/IMG20180125111801.jpg";
import ProfileImage from "./ProfileImage";
import PersonalDetails from "./PersonalDetails";
import Content from "../content/Content";
import Filter from "../filters/Filter";



const useStyles = makeStyles({
    welcome: {
        width: "100%",
        height: "100%",
        position: "relative",
        display: "flex"
    },
});


export default function Welcome() {

    const classes = useStyles();

    return (
        <div className={classes.welcome}>
            {/* <ProfileImage /> */}
            {/* <Filter /> */}
            <PersonalDetails />
            <Content />
         
        </div>
    );
}