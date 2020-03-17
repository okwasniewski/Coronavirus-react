import React from 'react'
import { NavLink } from 'react-router-dom';


function Footer() {
    return (
    
    <div className="bottom">
        <div className="bottom__first">
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/countries">Countries</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/countries">Authors </NavLink></li>
            </ul>
        </div>
        <div className="bottom__second">
            <h3>The app uses api: Mathdro API </h3>
        </div>

    </div>) 
};

export default Footer;