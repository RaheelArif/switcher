import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button
} from 'reactstrap';
import { Link } from "react-router-dom"
import "./header.css"
import Logo from "./images/logo.png"
class Header extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div id="section1" className="header-container" >
                <div className="a">
                    <Navbar className="header-c"  expand="xl">
                        <div className="sub-devided">
                            <Link to="/"><img className="logo" src={Logo} alt="Labdoor" /></Link>
                        </div>
                        <NavbarToggler className="header-toggler" onClick={this.toggle} >
                            <div className="togelbar">
                            </div>
                            <div className="togelbar">
                            </div>    <div className="togelbar">
                            </div>
                        </NavbarToggler>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className=" ml-auto2" navbar>
                                <div className="header-link-area">

                                <NavItem>
                                    <NavLink to="/about"><Link className="header-link" to="/aboutus">About Us</Link></NavLink>
                                </NavItem>                            
                                <NavItem>
                                <NavLink to="/why-swicthes"><Link className="header-link" to="/why-swicthes">Why Switch?</Link></NavLink>
                                </NavItem>                                 
                                <NavItem>
                                <NavLink to="/contact-us"><Link className="header-link" to="/contact-us">Contact Us</Link></NavLink>
                                </NavItem>                            
                                <NavItem>
                                    <NavLink to="/faqs"><Link className="header-link" to="/faqs">FAQ</Link></NavLink>
                                </NavItem>
                                <NavItem className="login-btn-area">
                                <Link  to="/"> <Button className="h-login-btn" color="success" >Log In</Button></Link>
                                </NavItem>
                                </div>



                            </Nav>
                        </Collapse>

                    </Navbar>

                </div>
            </div>
        );
    }
}

export default (Header)