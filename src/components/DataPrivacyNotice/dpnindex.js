import React from "react";
import DPN from "./dpn";
import dpn from './dpn-details'
import { Link } from "react-router-dom";
import "./dpn.css";

class DPNIndex extends React.Component {
  render() {
    return (
      <section className="faq-section">
        <div className="container dpn-con">
        <div className="faq-heading">
          <h1>Switcheroo.ie Privacy Notice</h1>
          <h6>Privacy Notice – Version 1.0</h6>
        </div>
        <div>
          {dpn.map((value, index) => {
            return (
              <DPN
                collapseClass={"b" + index}
                heading={value.heading}
                details={value.details}
              />
            );
          })}
        </div>
        </div>
      </section>
    );
  }
}
export default DPNIndex;
