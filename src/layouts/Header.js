import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
    return (
        <header className="top">
            <div className="top__logo"> <NavLink to="/"> Coronawirus </NavLink> </div>
            <nav>
                <ul className="top__items">
                    <li className="top__item"> <NavLink to="/countries"> Search country </NavLink></li>
                    <li className="top__item"><NavLink to="/about"> About </NavLink> </li>
                    <li className="top__item"><NavLink to="/authors"> Authors </NavLink> </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;