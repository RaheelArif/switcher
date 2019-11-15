
import React, { useState } from 'react';
import { Collapse } from 'reactstrap';

import "./tob.css"
const TOB = (props) => {
    const [collapse, setCollapse] = useState(false);

    const toggleClass = () => {
        var toggleDiv = document.querySelector("." + props.collapseClass);
        var classes = toggleDiv.classList;
        console.log(classes);
        if (classes.contains("tob-collaps")) {
            classes.remove("tob-collaps");
        }
        else {
            classes.add("tob-collaps");
        }

    }
    const toggle = () => {
        setCollapse(!collapse);
        toggleClass();

    }
    return (

        <div className="container">
            <div className="tob row">
                <div className="col-lg-12">
                    <div className={"tob-toggle " + props.collapseClass}>
                        <div className="tob-toggle-div" onClick={toggle}>
                            <h5 >
                                <i className="fas fa-chevron-right tob-i-right" ></i>
                                <i class="fas fa-chevron-down tob-i-down" ></i>
                                {props.heading}</h5>
                        </div>
                        <Collapse className="detils" isOpen={collapse}>
                            {props.details}
                        </Collapse>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default TOB;