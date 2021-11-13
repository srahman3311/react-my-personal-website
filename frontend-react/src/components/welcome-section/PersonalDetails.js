import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
// Circular Progress Bar
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

// https://preview.themeforest.net/item/arter-cv-resume-portfolio-web-app-template/full_screen_preview/27008333?_ga=2.17185657.1796135757.1634713393-780342762.1628742088

import Image from "../../../src/images/IMG20180125111801.jpg";
import ProfileImage from "./ProfileImage";
import BasicInfo from "./BasicInfo";
import Language from "./Language";
import Skill from "./Skill";



const useStyles = makeStyles({

    personal_details: {
        position: "relative",
        marginLeft: "10px",
        width: "22%",
        backgroundColor: "#334756",
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        padding: "3% 1%",
        "@media(max-width: 600px)": {
            width: "80%",
        }
    },

    other_info: {
        width: "100%",
        height: "300px",
        overflow: "auto",
        // transitionDuration: "500ms",
        // scrollBehavior: "smooth",
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
    basic_info: {
        width: "100%",
        marginBottom: "20px"
    },



    blank_line: {
        width: "100%",
        borderBottom: "1px solid white",
        display: "flex",
        alignItems: "center",
        opacity: "0.3",
        margin: "20px 0"
    },

    skills: {
        width: "100%"
    }

   
   
});



export default function PersonalDetails() {

   

    const classes = useStyles();
    const [percent, setPercent] = useState(0);

    useEffect(() => {

        if(percent === 100) return;

        setTimeout(() => { setPercent(percent + 1); }, 10);

    }, [percent]);



    function scrollLat(event) {

        event.target.scroll({
            top: 2100,
            // left: 100,
            // behavior: 'smooth'
          });
        // console.log(event);
        // console.log(event);
        // event.timeStamp = 1010873;
        // console.log(event.timeStamp);
        
        // event.target.removeEventListener("scroll", scrollLat);
    }

   

    return (
        <div className={classes.personal_details}>

            <div className={classes.profile}>
                <ProfileImage />
            </div>

            {/* <Scrollbar
                damping = {0.05}
                alwaysShowTracks = {false}	 
                className={classes.other_info}
                id="my-scrollbar" 
                style = {{
                    WebkitScrollbar: "0",
                    padding: "10px"
                    // zIndex: "-1"
                }}
            > */}
               
            
                <div className={classes.other_info} id="my-scrollbar" >
                
                    <div className={classes.basic_info}>
                        <BasicInfo header = "Residence" content = "Bangladesh" />
                        <BasicInfo header = "City" content = "Tangail" />
                        <BasicInfo header = "Age" content = "34" />
                    
                    </div>

                    <p className={classes.blank_line}></p>

                    <div className={classes.language_skill}>
                        <p style={{marginBottom: "20px"}}>Language Proficiency</p>
                        <Language language="Bengali" percentage={percent} />
                        <Language language="English" percentage={percent > 80 ? 80 : percent} />
                        <Language language="Hindi" percentage={percent > 70 ? 70 : percent} />
                    </div>
                    <p className={classes.blank_line}></p>

                    <div className={classes.skills}>
                        <Skill percentage={percent > 90 ? 90 : percent} skillName="html" />
                        <Skill percentage={percent > 95 ? 95 : percent} skillName="css" />
                        <Skill percentage={percent > 90 ? 90 : percent} skillName="javascript" />
                        <Skill percentage={percent > 85 ? 85 : percent} skillName="reactjs" />
                        <Skill percentage={percent > 90 ? 90 : percent} skillName="redux" />
                        <Skill percentage={percent > 95 ? 95 : percent} skillName="nextjs" />
                        <Skill percentage={percent > 80 ? 80 : percent} skillName="nodejs" />
                        <Skill percentage={percent > 90 ? 90 : percent} skillName="mongodb" />
                        <Skill percentage={percent > 85 ? 85 : percent} skillName="mysql" />
                    </div>
                    <p className={classes.blank_line}></p>
                </div>
            {/* </Scrollbar> */}
        </div>
    );
}