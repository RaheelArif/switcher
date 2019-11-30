import React, { Component } from "react";
import "./section1.css";
import Header2 from "../header2/header2";
import HomeLeft from "./homeLeft/homevideo";
import HomeRight from "./home-right/homeMobile";
import HomeBottom from "./homeBottom/homebottom";

export default class Section1 extends Component {
    state={
        toggle:true
    }
  render() {
    return (
      <div className="section1-c">
        <div className="section1-c1-5">
          <div className="section1-c2">

            <HomeLeft show={this.state.toggle} />
            
           <HomeRight class={this.state.toggle?"element-animation1":"element-animation"} />
          </div>
          <div style={{ width: "10%" }}>
            <button style={{ width: "100px", height: "50px" }} onClick={()=>this.setState({toggle:!this.state.toggle})}> change</button>
          </div>
        </div>
        <HomeBottom />
        <Header2 />
      </div>
    );
  }
}

{
  /* <HomeLeft />
<HomeRight/> */
}
