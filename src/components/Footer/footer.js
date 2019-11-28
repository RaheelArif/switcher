import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import Logo from "./images/logo.png";
import "./footer.css";

class Footer extends React.Component {
  state = {
    collapse: false
  }
  toggle = () => {
    this.setState({ collapse: !this.state.collapse })
    setTimeout(function () {
      // window.scrollTo(0, document.body.scrollHeight)
    }, 150)
  }
  render() {
    return (
      <section className="footer-section">
        <div className="container">
          <div className="row footer-row">
            <div className="col-lg-3  f-col">
              <img src={Logo} className="footer-logo" />
              <p className="about-p">
                Switcheroo.ie
                <br />
                Panda Capital Ltd. (registration code C192972) trading as
                Switcheroo.ie is authorised by the Central Bank of Ireland as a
                mortgage credit intermediary under European Union (Consumer
                Mortgage Credit Agreements) Regulations, 2016 (CMCAR) and as an
                insurance intermediary under the European Union (Incurance
                Distribution) Regulations, 2018 (IDR).
              </p>
            </div>
            <div
              className="col-lg-3 col-md-4 f-col social-links"
              style={{ paddingLeft: "30px" }}
            >
              <h6 className="f-h6">Site Map</h6>
              <ul>
                <li>
                  <Link to="/aboutus">About us</Link>
                </li>
                <li>
                  <a href="tel:+92300XXXXXXX">Why Switch?</a>
                </li>
                <li>
                  <a href="tel:+92300XXXXXXX">FAQ</a>
                </li>
              </ul>
            </div>
            <div
              className="col-lg-3 col-md-4 f-col links"
              style={{ paddingLeft: "30px" }}
            >
              <h6 className="f-h6">Legal</h6>
              <ul>
                <li>
                  <Link target="_blank" to="/data-privacy-notice">
                    Data Privacy Notice
                  </Link>
                </li>
                <li>
                  <Link target="_blank" to="/terms-of-business">
                    Terms of Business
                  </Link>
                </li>
              </ul>
            </div>
            <div
              className="col-lg-3 col-md-4 f-col contact-details"
              style={{ paddingLeft: "30px" }}
            >
              <h6 className="f-h6">Contact Us</h6>
              <ul>
                <li>
                  <a href="mailto:hello@swhitcheroo.ie">hello@swhitcheroo.ie</a>
                </li>
                <li>
                  <a href="tel:+92300XXXXXXX">+353 XX XXX XXX</a>
                </li>
              </ul>
              <div className="social-icon-div">
                <span className="social-icon">
                  <a>
                    <i class="fab fa-facebook-square"></i>
                  </a>
                </span>
                <span className="social-icon">
                  <a>
                    <i class="fab fa-twitter"></i>
                  </a>
                </span>
                <span className="social-icon">
                  <a>
                    <i class="fab fa-instagram"></i>
                  </a>
                </span>
              </div>
            </div>
            <div
              className="col-lg-12"
              style={{ height: "1px", background: "lightgray" }}
            ></div>

            <div className="col-lg-12 credit">
              <p className=" ">&copy; All Rights Reserved</p>
            </div>
          </div>
        </div>

        {/* <Collapse className="coll" isOpen={this.state.collapse}> */}
        <Dropdown isOpen={this.state.collapse} toggle={this.toggle}>
          <DropdownToggle className="wdd-toggle">
          <div className="warning-toggle">
          <p>Warnings</p>

          <p id="wn">

            {this.state.collapse ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}
          </p>
        </div>
          </DropdownToggle>
          <DropdownMenu className="warnings-ddm">
          <div className="warnings">
            <div className="container">
              <p>
                Warning: If you do not meet the repayments on your credit
                agreement, your account will go into arrears. This may effect
                your credit rating, which may limit your ability to access
                credit in the future.
              </p>
              <p>
                Warning: If you do not keep your repayment you may lose your
                home.
              </p>
              <p>
                Warning: You my have to pay charges if you pay off a fixed-rate
                loan early.
              </p>
              <p>
                Warning: This new load may take longer to pay off than your
                previous loans. This mean you may pay more than if you paid over
                a shorter term.
              </p>
              <p>Warning: The cost of your monthly repayment may increase.</p>
            </div>
          </div>
          </DropdownMenu>
        </Dropdown>
        
      </section>
    );
  }
}
export default withRouter(Footer);
