import { makeStyles } from "@mui/styles";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CheckIcon from '@mui/icons-material/Check';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { pricePlans } from "../../libs/price_plans";

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

    pricePlan_card: {
        width: "31%",
        // height: "280px",
        // overflow: "auto",
        backgroundColor: "#334756",
        padding: "2%",
        marginRight: "3.5%",
        marginBottom: "3.5%"
    },


    pricePlan_card_header: {
        marginBottom: "30px",
        color: "white",
        textAlign: "center"
    },
    pricePlan_card_description: {
        marginBottom: "20px"
    },

    pricePlan_card_link_container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "40px"
        // textAlign: "center"
    },

    pricePlan_card_link: {
        textDecoration: "none",
        fontSize: "12px",
        letterSpacing: "1px",
        color: "yellow"
    }

    
});










export default function PricePlans() {

    const classes = useStyles();


    return (
        
        
            <div className={classes.my_services}>

                <h1 className={classes.myServices_header}>Price Plans</h1>

                <div className={classes.myServices_content}>

                    {pricePlans.map(pricePlan => {
                        return (
                            <div 
                                key = {pricePlan.id} 
                                className = {classes.pricePlan_card}
                                style = {{marginRight: pricePlan.id % 3 === 0 && "0"}} 
                            >
                                <h4 className={classes.pricePlan_card_header}>{pricePlan.title}</h4>
                                <div className = {classes.pricePlan_price}>
                                    <p 
                                        style = {{
                                            display: pricePlan.price === "Negotiable" ? "block" : "none",
                                            fontSize: "48px",
                                            color: "yellow",
                                            textAlign: "center",
                                            marginBottom: "40px"
                                        }}
                                    >
                                        {pricePlan.price}
                                    </p>
                                    <p
                                        style = {{
                                            display: pricePlan.price !== "Negotiable" ? "block" : "none",
                                            textAlign: "center",
                                            marginBottom: "40px"
                                            // alignItems: "center",

                                            
                                        }}
                                    >
                                        $<span 
                                            style = {{fontSize: "48px", margin: "0 5px", color: "yellow"}}
                                        >
                                            {pricePlan.price}
                                        </span>
                                        {pricePlan.timeFormat}
                                    </p>
                                    {/* <span>$</span>
                                    <span>{pricePlan.price}</span>
                                    <span>h</span> */}
                                </div>
                                

                                {pricePlan.contents.map(content => {
                                    return (

                                        <p style = {{textAlign: "center", margin: "20px 0", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                            <CheckIcon style = {{fontSize: "14px", stroke: "yellow", strokeWidth: 2, marginRight: "5px"}} /> {content}
                                        </p>
                                    )
                                })}
                                <Router>
                                    <div className={classes.pricePlan_card_link_container}>
                                        <Link className={classes.pricePlan_card_link} to="/about">ORDER NOW</Link>
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