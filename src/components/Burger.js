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
          <NavLink onClick={active} to="/">
            {" "}
            Home{" "}
          </NavLink>
        </li>
        <li className="burger__item">
          <NavLink onClick={active} to="/countries">
            {" "}
            Search country{" "}
          </NavLink>
        </li>
        <li className="burger__item">
          <NavLink onClick={active} to="/about">
            {" "}
            About{" "}
          </NavLink>
        </li>
        <li className="burger__item">
          <NavLink onClick={active} to="/authors">
            {" "}
            Authors{" "}
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Burger;
