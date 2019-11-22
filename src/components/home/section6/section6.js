import React, { Component } from 'react'
import "./section6.css";
import free from "./free.png"
export default class Section6 extends Component {
    render() {
        return (
            <div className="section6" id="section6">
                <div className="s6-c">

                    <h1 className="remember">Remember</h1>
                    <h1 className="complete">we are compeletely</h1>
                    <h1 className="free">Free</h1>
                </div>
                <div className="s6-c2">
                    <img src={free} alt=""/>
                </div>
            </div>
        )
    }
}
