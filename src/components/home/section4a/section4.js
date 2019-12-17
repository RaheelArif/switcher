import React, { Component } from 'react'
import  "./section4.css"
import Slider from './slider'
export default class Section1 extends Component {
    render() {
        return (
            <div className="section4-ca" id="section3">
                 <p className="s4bg">OUR <span>PARTNERS</span></p>
                 <h1 className="s5-h1">In Partnership With</h1>
                <Slider />
            </div>
        )
    }
}
