import { makeStyles } from "@mui/styles";

import bgImage from "../../images/mountain.jpg";



const useStyles = makeStyles({
    overview: {
        color: "white",
        display: "flex",
        // width: "100%",
        // height: "100vh",
        // position: "relative",
        padding: "30px 0",
        // // display: "flex",
        // backgroundColor: "#082032",
        // color: "rgba(255, 255, 255, 0.7)",
        // borderLeft: "1px solid black",
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

    overview_content: {
        width: "33.33%",
        display: "flex",
        // justifyContent: "space-between"
    },

    overview_number: {
        marginRight: "30px",
        color: "blue",
        fontSize: "24px"
    },

    overview_text: {
        fontSize: "24px"
    }

    
});










export default function Overview() {

    const classes = useStyles();


    return (
        

            <div className={classes.overview}>
                <div className={classes.overview_content}>
                    <p className={classes.overview_number}>10+</p>
                    <p className={classes.overview_text}>Years of Experience</p>
                </div>
                <div className={classes.overview_content}>
                    <p className={classes.overview_number}>3</p>
                    <p className={classes.overview_text}>Very Big Projects</p>
                </div>
                <div className={classes.overview_content}>
                    <p className={classes.overview_number}>50+</p>
                    <p className={classes.overview_text}>Small Projects</p>
                </div>
            </div>
    );
}