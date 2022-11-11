import React from 'react';
import {NavLink}  from "react-router-dom";
import styled from "styled-components"

const Navbar = () => {
  return (
    <Nav>
      <div className="menuIcons">
        <ul className="navbar-list">
          <li>
          <NavLink className="navbar-link" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/about">About</NavLink>
          </li>
          <li>
            <NavLink  className="navbar-link" to="/service">Services</NavLink>
          </li>
          <li>
            <NavLink  className="navbar-link" to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>

    </Nav>
  )
}

const Nav = styled.nav`

.navbar-list{
  display:flex;
  flex-direction: row;
  gap:4.8rem;

};
 li{
  list-style:none;
  text-decoration:none;
 }
 .navbar-link{
  text-decoration:none;
  font-size:1.8rem;
  display:inline-block;
  text-decoration:none;
  text-transform:uppercase;
  color:${({theme})=>theme.colors.black};
  transition:color 0.3s linear;
  letter-spacing: 4px;
  font-weight:500;
  line-height:3px;

   
 }
  .navbar-link:hover,:active{
    color:${({theme})=>theme.colors.helper};

  }
 


`;
export default Navbar