import React, { useState } from "react";
import { Collapse } from "reactstrap";

import "./dpn.css";
const DPN = props => {
  const [collapse, setCollapse] = useState(false);

  const toggleClass = () => {
    var toggleDiv = document.querySelector("." + props.collapseClass);
    var classes = toggleDiv.classList;
    console.log(classes);
    if (classes.contains("dpn-collaps")) {
      classes.remove("dpn-collaps");
    } else {
      classes.add("dpn-collaps");
    }
  };
  const toggle = () => {
    setCollapse(!collapse);
    toggleClass();
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className={"dpn-toggle " + props.collapseClass}>
            <div className="dpn-toggle-div" onClick={toggle}>
              <h5 >
                <i className="fas fa-chevron-right dpn-i-right"></i>
                <i class="fas fa-chevron-down dpn-i-down"></i>
                {props.heading}
              </h5>
            </div>
            <Collapse className="dpn-detils" isOpen={collapse}>
              {props.details}
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DPN;
