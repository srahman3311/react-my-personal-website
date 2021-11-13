import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";

const useStyles = makeStyles({
    three_d: {
        width: "200px",
        height: "300px",
        backgroundColor: "green",
        marginTop: "30px"
    },

    threeD_content: {
        width: "100px",
        height: "100px",
        backgroundColor: "red"
    },
    button: {
        zIndex: "1"
    }

});



export default function ThreeD() {

    const [text, setText] = useState("");
    const [move, setMove] = useState(0);
    const [limit, setLimit] = useState(0);
 

    useEffect(() => {

      

        if(move > limit) return;
        if(move === 0) return;

        setTimeout(() => {
            setMove(move + 1);
        }, 1)
        


    }, [move])



    function moveForward() {

        if(limit < 600) setLimit(limit + 100);
        if(move > 600) return;
        // if(limit > 600) setLimit(limit - 100)

        
        setMove(move + 1);
        
    }

    function moveBackward() {

        if (limit <= 0) return;


        setLimit(limit - 100);

        
        setMove(move - 1);
        
    }


  
    

    const classes = useStyles();


    console.log(move, limit);
    return (
        <div className={classes.three_d}>
            <button className = {classes.button} onClick = {moveForward}>Move forward</button>
            <button className = {classes.button} onClick = {moveBackward}>Move Backward</button>
            <div 
                className={classes.threeD_content} 
                style = {{
                    transform: `translate3d(${move}px, 0px, 0px)`
                }}>

            </div>

        </div>
    );
}