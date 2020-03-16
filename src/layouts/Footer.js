import React from 'react'
import { NavLink } from 'react-router-dom';


function Footer() {
    return (
    
    <div className="bottom">
        <div className="bottom__first">
        <ul>
            <li>Home</li>
            <li>Countries</li>
            <li>About</li>
            <li>Authors</li>
            </ul>
        </div>
        <div className="bottom__second">
            <h3>The app uses api: Mathdro API </h3>
        </div>

    </div>) 
};

export default Footer;