import React, { Component } from 'react';
import "./home.css"
import Header from "../header/Header"
import Section1 from './section1/section1';
import Section1a from './section1a/section1';
import Section2 from './section2/section2';
import Section3 from './section3/section3';
import Section4 from './section4/section4';
import Section5 from './section5/section5';
import Section6 from './section6/section6';
import Footer from "../Footer/footer"
export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <Header />
                <div className="s22">

                <Section1a />
                </div>
                <div className="s111">
                <Section1 />
                </div>
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
                <Section6 />
                <Footer />
            </div>
        )
    }
}
