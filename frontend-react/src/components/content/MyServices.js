import { makeStyles } from "@mui/styles";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { services } from "../../libs/services";

//import bgImage from "../../images/mountain.jpg";



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
    },

    myServices_header: {
        marginBottom: "25px"
    },

    myServices_content: {
        display: "flex",
        flexWrap: "wrap",
        width: "100%"
    },

    service_card: {
        width: "31%",
        // height: "280px",
        // overflow: "auto",
        backgroundColor: "#334756",
        padding: "2%",
        marginRight: "3.5%",
        marginBottom: "3.5%"
    },


    serviceCard_header: {
        marginBottom: "15px",
        color: "white"
    },
    serviceCard_description: {
        marginBottom: "20px"
    },

    serviceCard_link_container: {
        display: "flex",
        alignItems: "center"
    },

    serviceCard_link: {
        textDecoration: "none",
        fontSize: "12px",
        letterSpacing: "1px",
        color: "yellow"
    }

    
});










export default function MyServices() {

    const classes = useStyles();


    return (
        
        
            <div className={classes.my_services}>

                <h1 className={classes.myServices_header}>My Services</h1>

                <div className={classes.myServices_content}>

                    {services.map(service => {
                        return (
                            <div 
                                key = {service.id} 
                                className = {classes.service_card}
                                style = {{marginRight: service.id % 3 === 0 && "0"}} 
                            >
                                <h4 className={classes.serviceCard_header}>{service.title}</h4>
                                <p className={classes.serviceCard_description}>
                                    {service.content}
                                </p>
                                <Router>
                                    <div className={classes.serviceCard_link_container}>
                                        <Link className={classes.serviceCard_link} to="/about">ORDER NOW</Link>
                                        <KeyboardArrowRightIcon
                                            style = {{color: "yellow", fontSize: "18px"}} 
                                        />
                                    </div>
                                </Router>
                            </div>
                        );
                    })}
                   
                    
                </div>
            </div>
    );
}