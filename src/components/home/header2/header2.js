import React, { Component } from 'react'
import "./header2.css"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import errow from "./arrow.png"
export default class Header2 extends Component {
    componentDidMount() {

        window.onscroll = function () { myFunction() };
        var header = document.getElementById("myHeader");
        var sticky = header.offsetTop;
        function myFunction() {
            if (window.pageYOffset > sticky) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
        }
    }
    render() {
        return (
            <div id="myHeader" className="header2">
                <div className="h2-c2">

                    <AnchorLink className="h2-links" href='#section1'>Introduction</AnchorLink>
                    <AnchorLink className="h2-links" href='#section2'>4 Easy Steps</AnchorLink>
                    <AnchorLink className="h2-links" href='#contact'>Contact Us</AnchorLink>
                    <AnchorLink className="h2-links" href='#section3'>Our Partners</AnchorLink>
                    <AnchorLink className="h2-links" href='#section5'>Why Us</AnchorLink>
                    <AnchorLink href="#section6" className="h2-errow"><img className="errow-2" src={errow} alt=""/></AnchorLink>
                </div>
            </div>
        )
    }
}
