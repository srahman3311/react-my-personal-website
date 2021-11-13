import { makeStyles } from "@mui/styles";
//import Button from "@material-ui/core/Button";

const useStyles = makeStyles({

    progressBar_container: {
        width: "100%",
        marginBottom: "25px"
    },

    progress_bar: {
        width: "100%",
        height: "6px",
        margin: "1% 0 6% 0",
        // display: "flex",
        // alignItems: "center",
        
    },
    bar: {
        width: "100%",
        height: "100%",
        backgroundColor: "#ccc"
    },
    bar_content: {
        // width: "80%",
        height: "100%",
        backgroundColor: "#F4A442"
    }

});


export default function Skill ({ percentage, skillName}) {

    const classes = useStyles();


    return (
        <div className={classes.progressBar_container}>
            <div style ={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <p style = {{color: "white"}}>{skillName}</p>
                <p style = {{marginLeft: "5px", fontSize: "12px", color: "#ccc"}}>{percentage}%</p>
            </div>
            
        
            <div className={classes.progress_bar}>
                <div className={classes.bar}>
                    <div className={classes.bar_content} style={{width: `${percentage}%`}}></div>
                </div>
                {/* <p style = {{marginLeft: "5px", fontSize: "12px"}}>20%</p> */}
            </div>
        </div>
    );
}