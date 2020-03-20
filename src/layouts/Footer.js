import React from 'react'
import { NavLink } from 'react-router-dom';


function Footer() {
    return (
    
    <div className="bottom">
        <div className="bottom__first">
        <ul>
            <li><NavLink to="/Coronavirus-react/">Home</NavLink></li>
            <li><NavLink to="/Coronavirus-react/countries">Countries</NavLink></li>
            <li><NavLink to="/Coronavirus-react/about">About</NavLink></li>
            <li><NavLink to="/Coronavirus-react/authors">Authors </NavLink></li>
            </ul>
        </div>
        <div className="bottom__second">
            <h3>The app uses api: Mathdro API </h3>
        </div>

    </div>) 
};

export default Footer;