import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
    return (
       <header className="top">
            <div className="top__logo"> Coronawirus </div>
            <ul className="top__items">
                <li>
                    <NavLink to="/countries"> Countries </NavLink>
                </li>
                <li>
                <NavLink to="/about"> About </NavLink>

                </li>
                <li>
                <NavLink to="/countries"> Countries </NavLink>
                </li>
            </ul>
        </header>
    );
}

export default Header;