import React, { useState } from "react";
import { Collapse } from "reactstrap";

import "./faqs.css";
const FAQs = props => {
  const [collapse, setCollapse] = useState(false);

  const toggleClass = () => {
    var toggleDiv = document.querySelector("." + props.collapseClass);
    var classes = toggleDiv.classList;
    console.log(classes);
    if (classes.contains("faq-collaps")) {
      classes.remove("faq-collaps");
    } else {
      classes.add("faq-collaps");
    }
  };
  const toggle = () => {
    setCollapse(!collapse);
    toggleClass();
  };
  return (
    <div className="container">
      <div className="faq row">
        <div className="col-lg-12">
          <div className={"faq-toggle"+" "+ props.collapseClass}>
            <div className="faq-toggle-div" onClick={toggle}>
              <h5>
                <i className="fas fa-chevron-right faq-i-right" ></i>
                <i class="fas fa-chevron-down faq-i-down" ></i>
                {props.question}
              </h5>
            </div>
            <Collapse isOpen={collapse}>
              <p>{props.answer}</p>
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
