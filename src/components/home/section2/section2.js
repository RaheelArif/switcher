import React, { Component } from 'react'
import "./section2.css";
import icon1 from "./icons/s247.gif";
import icon2 from "./icons/bestmortgage.gif";
import icon3 from "./icons/expertAdvice.gif";
import icon4 from "./icons/secureMortgage.gif";
import stepper from "./icons/stepper.png"
export default class Section1 extends Component {
    render() {
        return (
            <div className="section2-c" id="section2">
                <div className="s2-c1">
                    <p> <span>Simplify</span> your mortage</p>
                    <p> <span>Switch</span> in 4 easy steps</p>
                </div>
                <div className="s2-c2">
                    <div className="c2-icons">
                        <img src={icon1} alt="" />
                        <img src={icon2} alt="" />
                        <img src={icon3} alt="" />
                        <img src={icon4} alt="" />
                    </div>
                    <div className="c2-steps">
                        <img src={stepper} alt="" />
                    </div>
                    <div className="c2-info">
                        <div className="c2-info-1">
                            <h1>Online 24/7</h1>
                            <p>Access your account through our platform and your anytime anywhere on any debicec</p>
                        </div>
                        <div className="c2-info-1">
                            <h1>Best mortgage rate</h1>
                            <p>Our algorithms will tell you what you can afford and who will probide you the best rate</p>
                        </div>
                        <div className="c2-info-1">
                            <h1>Friendly expert support</h1>
                            <p>chat with a frindly member of Simple Mortagaed team to confrim and finalise everything</p>
                        </div>
                        <div className="c2-info-1">
                            <h1>Completing your mortgage</h1>
                            <p>We handle all the difficult bank interactions and keep you updated untill your morgage completes</p>
                        </div>
                    </div>
                </div>
                <div className="s2-c1">

                <button>Start Saving</button>
                </div>
            </div>
        )
    }
}
