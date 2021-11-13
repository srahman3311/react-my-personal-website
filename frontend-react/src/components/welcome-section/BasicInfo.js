// Material UI's styling 
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles({
    
    basicInfo_content: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "5px"
    },
    info_header: {
        color: "white"
    },
    info_content: {
        color: "white",
        opacity: "0.5"
    },
   
});


export default function BasicInfo({ header, content }) {

    const classes = useStyles();

    return (
        <div className={classes.basicInfo_content}>
            <p className={classes.info_header}>{header}:</p>
            <p className={classes.info_content}>{content}</p>
        </div>
    );
}