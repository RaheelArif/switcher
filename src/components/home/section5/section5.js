import React, { Component } from 'react'
import "./section5.css";
import one from "./images/1.png";
import two from "./images/2.png";
import three from "./images/3.png";
export default class Section5 extends Component {
state = {
    box: 2
}
banks = () => {this.setState({box :1})}
switcher = () => {this.setState({box :2})}
traditional = () => {this.setState({box :3})}
    render() {
        const name  = this.state
        return (
            <div className="section5" id="section5">
                <h1 className="s5-h1">Why we're better</h1>
                <div className="s5-container ">
                    <div onClick={this.banks}  className={`s5-banks ${name.box === 1 ? "click" : ""}`}>
                        <img src={one} alt=""/>
                        <h1>Banks</h1>
                        <ul>
                            <li>Queue in branch</li>
                            <li>In Person grilling</li>
                            <li>Bankers hours</li>
                            <li>Corporate Speak</li>
                            <li>Stiff Banksters</li>
                        </ul>
                    </div >
                    <div onClick={this.switcher}  className={`s5-switcher ${name.box === 2 ? "click" : ""}`}>
                        <img src={two} alt=""/>
                        <h1>Switcheroo.ie</h1>
                        <ul>
                            <li>Online</li>
                            <li>Start now</li>
                            <li>24/7</li>
                            <li>Jargon Free</li>
                            <li>Super frienldy</li>
                        </ul>
                    </div>
                    <div onClick={this.traditional}  className={`s5-banks ${name.box === 3 ? "click" : ""}`}>
                        <img src={three} alt=""/>
                        <h1>Traditional Broker</h1>
                        <ul className="tick">
                            <li>Schedule and appointment</li>
                            <li>Stack of paper</li>
                            <li>when you are at work</li>
                            <li>Condusing language</li>
                            <li>Wanna be bankers</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
