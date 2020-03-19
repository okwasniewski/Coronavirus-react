import React from "react";
import { NavLink } from "react-router-dom";

function Burger({ active, current }) {
  return (
    <div className={"burger"}>
      <ul className="burger__items">
        <div className="burger__close" onClick={active}>
          X
        </div>
        <li className="burger__item">
          <NavLink onClick={active} to="/Coronavirus-react/">
            {" "}
            Home{" "}
          </NavLink>
        </li>
        <li className="burger__item">
          <NavLink onClick={active} to="/Coronavirus-react/countries">
            {" "}
            Search country{" "}
          </NavLink>
        </li>
        <li className="burger__item">
          <NavLink onClick={active} to="/Coronavirus-react/about">
            {" "}
            About{" "}
          </NavLink>
        </li>
        <li className="burger__item">
          <NavLink onClick={active} to="/Coronavirus-react/authors">
            {" "}
            Authors{" "}
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Burger;
