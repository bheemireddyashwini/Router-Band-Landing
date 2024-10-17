import React from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "../assets/Logo.png";
import styled from "styled-components";
import "./NavBar.css";


/* const Image = styled.img`

width: 500px;

` */





function NavBar() {
  return (
    <div>
      <div className="nav-container">
        <img src={Logo} alt="logo" className="nav-logo" />
      </div>
      <ul>
        <li>
          <Link className="link" to="/vocals">
            Vocals
          </Link>
        </li>
        <li>
          <Link className="link" to="/guitar">
            Guitar
          </Link>
        </li>
        <li>
          <Link className="link" to="/bass">
            Bass
          </Link>
        </li>
        <li>
          <Link className="link" to="/drums">
            Drums
          </Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}

export default NavBar;
