import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, NavItem, NavbarBrand } from 'reactstrap';
import Logo from '../../assets/logo.png'

const Header = () => {
    return (
        <div className="Navigation">
            <Navbar style={{
                backgroundColor: "#D70F64",
                height: "70px"
            }}>
                <NavbarBrand href="/" className="mr-auto ml-md-5 Brand"> <img src={Logo} alt="logo" width="80px" /> </NavbarBrand>
                <Nav className="mr-md-5">
                    <NavItem>
                        <NavLink exact to='/' className="sjb" > Burger-Builder </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink exact to='/order' className="sjb" > Order </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
};

export default Header;