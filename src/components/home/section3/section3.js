import React, { Component } from 'react'
import  "./section3.css";
import section3 from "./expertAdvice.gif"
export default class Section1 extends Component {
    render() {
        return (
            <div className="section3-c" id="contact">
                <div className="shadow">

             
                 <div className="s3-left">
                     <h1>Slash up to 20% off the cost of your mortgage!</h1>
                     <div className="left-c1">
                         <p>Why not have more money for:</p>
                         <ul>
                             <li>School fees.</li>
                             <li>New kitchen.</li>
                             <li>Family holiday.</li>
                             <li>Early retirement.</li>
                         </ul>
                     </div>
 
                     </div>
                     <div className="right-c1">
                         <img src={section3} alt=""/>
                         <div className="right-call">
                             <h1>Call to talk</h1>
                             <p>with a mortgage expert</p>
                             <span>+35312345678</span>
                         </div>
                 </div>
            </div>
            </div>
        )
    }
}
