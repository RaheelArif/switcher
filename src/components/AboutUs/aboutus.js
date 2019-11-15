import React from "react";

import "./aboutus.css";

class AboutUs extends React.Component {
  render() {
    return (
      <section className="aboutus-section">
        <div className="container about-con">
          <div className="row">
            <div className="col-lg-4">
              <div className="left-content">
                <div className="img mx-auto">
                  <img src={require("./images/rooi.png")} />
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="right-content">
                <h6>Dear Customer</h6>
                <p>
                  At Switcheroo.ie we are all about saving you money and
                  reducing the cost of your mortgage and ultimately your home.
                  Hard working mortgage customers could save thousands per year
                  by switching and many don’t. The reason is because people are
                  too busy and suffer from inertia. That’s why we have made the
                  switcheroo.ie platform. The online platform allows you apply
                  online whenever suits and at your own pace. We have
                  streamlined the process so make it as simple as can be and to
                  make your switching process easier.
                </p>
                <p>
                  Based in Ballsbridge the very wise Switcheroo.ie team has a
                  background in banking, accounting and consulting and so have
                  plenty of experience in dealing with banks and know how to
                  make a process as stress free as possible.
                </p>
                <p>
                  The team is hardworking and committed to you and I hope that
                  you will be satisfied with the service we provide you. But if
                  you are not happy or just have some ideas for us on how to
                  improve please send me a mail and I will do what I can for you
                </p>
                <p>Best</p>
                <h6>Wise Old Owl</h6>
                <a href="mailto:WOW@Switcheroo.ie ">WOW@Switcheroo.ie </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default AboutUs;
