import React, { Component } from "react";
import "./section1.css";
import Header2 from "../header2/header2";
import HomeLeft from "./homeLeft/homevideo";
import HomeRight from "./home-right/homeMobile";
import HomeBottom from "./homeBottom/homebottom";

export default class Section1 extends Component {
  state = {
    toggle: true
  };
  render() {
    let btn;
    btn = this.state.toggle === true ? (btn = "left-btn") : (btn = "right-btn");
    return (
      <div className="section1-c">
        <div className="section1-c1-5">
          <div className="section1-c2">
            <div className="textwriten ">
              {!this.state.toggle ? (
                <p className="s1-p-c">
                  Lets see how much you are overpaying your bank for you
                  mortgage
                </p>
              ) : (
                <p className="s1-p-c">
                  Watch our video to see easy it is to switch and save on your
                  mortgage
                </p>
              )}
            </div>
            <div className="hmbtm">

            <HomeBottom />
            </div>

            <HomeLeft show={this.state.toggle} />

            <HomeRight
              class={
                this.state.toggle ? "element-animation1" : "element-animation"
              }
              phone={
                this.state.toggle &&
                document.getElementById("root").style.width > 1111
                  ? "mobilephoneoff"
                  : "mobilephoneon"
              }
            />
          </div>

          <div className="animate_button" style={{ width: "10%" }}>
            <img
              src={require("./arrow.png")}
              className={btn}
              onClick={() => this.setState({ toggle: !this.state.toggle })}
            />
          </div>
        </div>
        <HomeBottom />
        <Header2 />
      </div>
    );
  }
}
