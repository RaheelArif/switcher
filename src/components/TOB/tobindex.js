import React from "react";
import TOB from "./tob";
import tob from './tob-details'
import { Link } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../Footer/footer"
import "./tob.css";

class TOBIndex extends React.Component {
  render() {
    
    return (
      <div>
        <Header />

      <section className="tob-section">
        <div className="container tob-con">
        <div className="tob-heading">
          <h1>Swicheroo.ie Terms of Business</h1>
          <h6>Terms of Business – Version 1.0</h6>
        </div>
        <div>
          {tob.map((value, index) => {
            return (
              <TOB
                collapseClass={"b" + index}
                heading={value.heading}
                details={value.details}
              />
            );
          })}
        </div>
        </div>
        <Footer />
      </section>
      </div>

    );
  }
}
export default TOBIndex;
