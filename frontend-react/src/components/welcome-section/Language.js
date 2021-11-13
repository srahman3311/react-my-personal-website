import React from "react";
import { makeStyles } from "@mui/styles";
// Circular Progress Bar
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

// https://preview.themeforest.net/item/arter-cv-resume-portfolio-web-app-template/full_screen_preview/27008333?_ga=2.17185657.1796135757.1634713393-780342762.1628742088

import Image from "../../../src/images/IMG20180125111801.jpg";
import ProfileImage from "./ProfileImage";



const useStyles = makeStyles({

    
    language: {
        width: "100%",
        display: "flex",
        // justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ccc",
        marginBottom: "10px"
       
    },

    languageProgress_bar: {
        width: "28%",
        marginRight: "10px",
        borderRight: "1px solid black",
        padding: "2% 3% 2% 3%"
        
    }

   
});


export default function Language({ language, percentage }) {

    const classes = useStyles();
    // const percentage = 80;

    return (
        
        <div className={classes.language}>
            <div className={classes.languageProgress_bar}>

                <CircularProgressbar
                    value={Number(percentage)} 
                    text={`${Number(percentage)}`} 
                    strokeWidth={8} 
                    styles = {{
                        path: {
                            stroke: "#F4A442",
                        },
                        trail: {
                            stroke: "#ccc"
                        },
                        text: {
                            fill: "black",
                            // textAnchor="middle"
                            fontSize: "32px"
                        }
                    }}
                />

            </div>
            <p style = {{fontSize: "24px"}}>{language}</p>
        </div>
        
                
            
        
    );
}