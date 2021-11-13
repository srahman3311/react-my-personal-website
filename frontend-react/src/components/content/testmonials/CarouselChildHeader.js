import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({

    carousel_child: {
        width: "33.33%",
        // height: "100%",
        // backgroundColor: "green",
        padding: "2% 3%"

    },

    // carouselChild_header: {
    //     width: "100%",
    //     height: "100%",
    //     backgroundColor: "red"
    // }

});


export default function CarouselChildHeader () {

    const classes = useStyles();

    return (
        <div className={classes.carouselChild_header}>
            <h2>Name</h2>
            <p>Position</p>            
        </div>
    );
}