import React, { Component } from 'react'
import  "./section1.css";
import Header2 from "../header2/header2";
import HomeLeft from "./homeLeft/homevideo";
import HomeRight from "./home-right/homeMobile";
import HomeBottom from "./homeBottom/homebottom"
export default class Section1 extends Component {
    render() {
        return (
            <div className="section1-c" >
                 <div className="section1-c2">
                    <HomeLeft />
                    <HomeRight/>
                 </div>
                 <HomeBottom />
                 <Header2 />
            </div>
        )
    }
}
