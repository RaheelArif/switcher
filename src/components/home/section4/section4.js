import React, { Component } from 'react'
import  "./section4.css"
import Slider from './slider'
export default class Section1 extends Component {
    render() {
        return (
            <div className="section4-c" id="section3">
                 <p className="s4bg">Our Partners</p>
                 <h1>In PartnerShip With</h1>
                <Slider />
            </div>
        )
    }
}
