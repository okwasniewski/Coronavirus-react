import React from "react";
import Burger from "../components/Burger";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

class Header extends React.Component {
  state = {
    active: false
  };

  changeHander() {
    this.setState({ active: !this.state.active });
    let burgerItem = document.querySelector(".burger");
    if (this.state.active) {
      burgerItem.classList.add("active");
    } else {
      burgerItem.classList.remove("active");
    }
  }

  render() {
    return (
      <header className="top">
        <Burger
          current={this.state.active}
          active={() => this.changeHander()}
        />
        <div className="top__logo">
          {" "}
          <NavLink to="/"> Coronawirus </NavLink>{" "}
        </div>
        <nav>
          <ul className="top__items">
            <li className="top__item">
              {" "}
              <NavLink to="/countries"> Search country </NavLink>
            </li>
            <li className="top__item">
              <NavLink to="/about"> About </NavLink>{" "}
            </li>
            <li className="top__item">
              <NavLink to="/authors"> Authors </NavLink>{" "}
            </li>
            <li className="top__burger">
              <button onClick={() => this.changeHander()}>
                <FontAwesomeIcon icon={faBars} />
              </button>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
