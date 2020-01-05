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
                <div className="easy-steps">
                   <div>4 Easy Steps</div> 
                </div>
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
                            <h1 className="c2-info-h1">Online 24/7</h1>
                            <p className="c2-info-p">Access your account through our platform and your anytime anywhere on any device</p>
                        </div>
                        <div className="c2-info-2">
                            <h1 className="c2-info-h1">Best mortgage rate</h1>
                            <p className="c2-info-p">Our algorithms will tell you what you can afford and who will provide you the best rate</p>
                        </div>
                        <div className="c2-info-3">
                            <h1 className="c2-info-h1">Friendly expert support</h1>
                            <p className="c2-info-p">chat with a frindly member of the Swicheroo.ie team to confrim and finalise which mortgage best suits your needs</p>
                        </div>
                        <div className="c2-info-4">
                            <h1 className="c2-info-h1">Completing your mortgage</h1>
                            <p className="c2-info-p">We handle all the difficult bank interactions and keep you updated untill your morgage completes</p>
                        </div>
                    </div>
                </div>
                <div className="s2-c1">

                <button className="start-svng-btn">Start Saving</button>
                </div>
            </div>
        )
    }
}
