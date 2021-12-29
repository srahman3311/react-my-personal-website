import { useState, useEffect } from "react";

import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
// Stylesheet
import "./CommonStyles.css";

export default function NavigationBar ({ navbarWidth, expandNavbar }) {
   

    return (
        <div className="navigation_bar" style = {{width: `${navbarWidth}%`}}>
            <Button onClick = {expandNavbar}>
                <MenuIcon />
            </Button>

            <p className="activePage_name">HOME</p>
            
        </div>
    );
}