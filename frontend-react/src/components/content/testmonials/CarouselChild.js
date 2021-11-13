import { makeStyles } from "@mui/styles";


// components
import CarouselChildHeader from "./CarouselChildHeader";

const useStyles = makeStyles({

    carousel_child: {
        width: "33.33%",
        height: "100%",
        // backgroundColor: "green",
        // padding: "2% 3%"

    },

    carouselChild_content: {
        width: "100%",
        // height: "100%",
        // backgroundColor: "red"
    }

});


export default function CarouselChild ({ content }) {

    const classes = useStyles();

    return (
        <div className={classes.carousel_child}>
            <div className={classes.carouselChild_content}>
                <CarouselChildHeader />
                <CarouselChildHeader />
                <CarouselChildHeader />
                {/* {content} */}
            </div>            
        </div>
    );
}