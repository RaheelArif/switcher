import React from "react";

import "./homeMobile.css";
import HomeChat from "./chatComponent";
import { chatPush } from "../../../../store/action/index";
import { connect } from "react-redux";
class HomeMobile extends React.Component {
  state = {
    index: 0,
    pmt: 0,
    questions: [
      {
        index: 1,
        type: "button",
        pre: "Aprox",
        question: " ‎€",
        value: "OK let's go"
      },
      {
        index: 1,
        placeholder: "Please enter in  ‎€",
        type: "input",
        pre: "Aprox",
        question: " ‎€",
        message: ""
      },
      {
        index: 1,
        placeholder: "Please inter in  ‎€",
        type: "input",
        pre: "Aprox",
        question: "",
        message: ""
      },
      {
        index: 1,
        placeholder: "Enter Years",
        type: "input",
        pre: "Aprox",
        question: "",
        message: ""
      },
      {
        index: 1,
        placeholder: "yes or no",
        type: "radio",
        pre: "Aprox",
        question: "",
        message: ""
      },
      {
        index: 1,
        placeholder: "Please inter in  ‎€",
        type: "input",
        pre: "Aprox",
        question: "",
        message: ""
      },
      {
        index: 1,
        placeholder: "Enter in  ‎€",
        type: "button",
        pre: "Aprox",
        question: "",
        message: ""
      },
      {
        index: 1,
        placeholder: "Enter in  ‎€",
        type: "button",
        pre: "Aprox  ",
        question: "",
        message: ""
      },
      {
        index: 1,
        placeholder: "Enter in  ‎€",
        type: "button",
        pre: "Aprox  ",
        question: "",
        message: ""
      },
      {
        index: 1,
        placeholder: "Enter in  ‎€",
        type: "button",
        pre: "Aprox  ",
        question: "",
        message: ""
      }
    ],
    askquestions: [
      {
        index: 0,
        message: (
          <p>
            <img className="chat-icon" src="images/icon.png" alt="chat-icon1" />
            What's the value of your property?
            <img
              className="chat-icon"
              src="images/home.png"
              alt="chat-icon1"
            />{" "}
          </p>
        )
      },
      {
        index: 0,
        message: (
          <p>
            <img className="chat-icon" src="images/icon.png" alt="chat-icon1" />
            Whats the balance of your mortgage?
            <img className="chat-icon" src="images/line.png" alt="chat-icon1" />
          </p>
        )
      },
      {
        index: 0,
        message: (
          <p>
            <img className="chat-icon" src="images/icon.png" alt="chat-icon1" />{" "}
            How long have you left{" "}
            {/* <img className="chat-icon" src="images/mind.png" alt="chat-icon1" />{" "} */}
            to pay it off ?{" "}
          </p>
        )
      },
      {
        index: 0,
        message: (
          <p>
            <img className="chat-icon" src="images/icon.png" alt="chat-icon1" />{" "}
            Are you looking to borrow more money ?
            {/* <img className="chat-icon" src="images/car.png" alt="chat-icon1" />
            <img className="chat-icon" src="images/uma.png" alt="chat-icon1" />
            <img className="chat-icon" src="images/ring.png" alt="chat-icon1" /> */}
          </p>
        )
      },
      {
        index: 0,
        message: (
          <p>
            <img className="chat-icon" src="images/icon.png" alt="chat-icon1" />{" "}
            What’s your monthly payment ?{" "}
            <img className="chat-icon" src="images/mony.png" alt="chat-icon1" />{" "}
          </p>
        )
      },
      {
        index: 0,
        message: (
          <p>
            <img className="chat-icon" src="images/icon.png" alt="chat-icon1" />{" "}
            Okay Give me a minut{" "}
            <img
              className="chat-icon"
              src="images/loading.jpg"
              alt="chat-icon1"
            />{" "}
          </p>
        )
      }
    ]
  };
  PMT = (ir, np, pv, fv, type) => {
    /*
     * ir   - interest rate per month
     * np   - number of periods (months)
     * pv   - present value
     * fv   - future value
     * type - when the payments are due:
     *        0: end of the period, e.g. end of month (default)
     *        1: beginning of period
     */
    var pmt, pvif;

    fv || (fv = 0);
    type || (type = 0);

    if (ir === 0) return -(pv + fv) / np;

    pvif = Math.pow(1 + ir, np);
    pmt = (-ir * pv * (pvif + fv)) / (pvif - 1);

    if (type === 1) pmt /= 1 + ir;
    pmt = pmt.toFixed(2);
    return -pmt;
  };
  changeitem = () => {
    let { index } = this.state;
    if (index < 6) {
      if (this.state.index === 0) {
        const array = [this.state.askquestions[index]];
        setTimeout(() => this.props.dispatch(chatPush(array)), 1000);
      } else {
        if (this.state.index >= 5) {
          const array = [
            this.state.questions[index],
            this.state.askquestions[index]
          ];
          this.props.dispatch(chatPush(array));
          for (var i = 1; i <= 1; ++i) {
            setTimeout(
              function() {
                if (this.state.index <= 5) {
                  const array = [this.state.askquestions[index]];
                  this.props.dispatch(chatPush(array));
                  this.setState({ index: ++index });
                  console.log(this.state.index);
                } else {
                  const ir = 0.03 / 12;
                  const np = parseInt(this.state.questions[3].message) * 12;
                  const pv = parseInt(this.state.questions[2].message);

                  const perMonth =
                    parseInt(this.state.questions[5].message) -
                    this.PMT(ir, np, pv);
                  const array = [
                    {
                      index: 0,
                      message: (
                        <p>
                          <img
                            className="chat-icon"
                            src="images/icons/grin-tongue-regular.svg"
                            alt="chat-icon1"
                          />
                          ok, so based on the info provided, if you switcheroo
                          you could save {perMonth.toFixed(2)} ‎€ per month,
                          which is {(perMonth * 12).toFixed(2)} ‎€ per year!*{" "}
                        </p>
                      )
                    }
                  ];
                  this.props.dispatch(chatPush(array));
                }
              }.bind(this),
              2000
            );
          }
        } else {
          const array = [
            this.state.questions[index],
            this.state.askquestions[index]
          ];
          this.props.dispatch(chatPush(array));
        }
      }
      if (this.state.index < 6)
        this.setState({
          index: ++index
        });
    }
  };
  whanchange = e => {
    const { index } = this.state;
    const value = e.target.value;
    let questions = [...this.state.questions];
    questions[index].message = value;
    this.setState({
      questions
    });
  };
  handleTogle = e => {
    // console.log(e.target.parentNode.childNodes);
    var lists = e.target.parentNode.childNodes;
    for (var i = 0; i < lists.length; i++) {
      console.log(lists[i].classList.contains("active"));
      if (lists[i].classList.contains("active")) {
        lists[i].classList.remove("active");
      }
    }
    e.target.classList.add("active");
  };
  handleScreen = () => {
    this.setState({ status: true });
  };
  render() {
    const question = this.state.questions[this.state.index];
    return (
      <div
        className={`col-lg-12 col-md-12 res-mbmb home-mbl  ‎${this.props.class}`}
      >
        <p className="vppp">
          Watch our video to see easy it is to switch and save on your mortgage
        </p>
        <div className="home-right">
          <div className="clear"></div>
          {/* <p className="hr-p"></p> */}
          <div className={`mobile-div mx-auto ${this.props.phone}`}>
            {this.state.status && (
              <div className="mobile-div-inner">
                <div className="logo-div2">
                  <img src="images/logo.png" alt="..." />
                </div>
                <div>
                  <h1 className="wow-t">WOW</h1>
                  <h2 className="text-statement">
                    You could be saving 20,000 per month and 10,0000 per year*
                  </h2>
                </div>
                <div className="btn-div2">
                  <button
                    className="btn1"
                    onClick={() => this.setState({ status: false })}
                  >
                    Recalculate
                  </button>
                  <button className="btn2">Let's get started</button>
                </div>
                <div className="bottom-p">
                  <p>
                    this analysis is based on lowest rate available the cost
                    does not constitute an offer of a mortgage and we will need
                    to doa full assessment of your circumstance to provide you
                    with a personal
                  </p>
                </div>
              </div>
            )}
            {!this.state.status && (
              <div>
                <div className="logo-div">
                  <img src="images/logo.png" alt="..." />
                </div>
                <div className="row questions-row">
                  <div className="col-lg-7">
                    <h5>What is the current value of the property?</h5>
                    <h6>(if you don't know an estimate is fine for now)</h6>
                  </div>
                  <div className="col-lg-5">
                    <input className="text-input" type="text" />
                  </div>
                </div>

                <div className="row questions-row">
                  <div className="col-lg-7">
                    <h5 className="sl">
                      What is the balance of your mortgage?
                    </h5>
                  </div>
                  <div className="col-lg-5">
                    <input className="text-input" type="text" />
                  </div>
                </div>

                <div className="row questions-row">
                  <div className="col-lg-7">
                    <h5 className="sl">
                      Are you looking to borrow more money?
                    </h5>
                  </div>
                  <div className="col-lg-5">
                    <ul className="yesno-togle">
                      <li onClick={e => this.handleTogle(e)}>yes</li>
                      <li
                        className="last-child"
                        onClick={e => this.handleTogle(e)}
                      >
                        no
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="row questions-row">
                  <div className="col-lg-7">
                    <h5 className="">
                      How many years do you have left to
                      <br /> pay it off?
                    </h5>
                  </div>
                  <div className="col-lg-5">
                    <select>
                      <option>Select from options</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </div>

                <div className="row questions-row">
                  <div className="col-lg-7">
                    <h5 className="sl">Are you on a fixed term?</h5>
                  </div>
                  <div className="col-lg-5">
                    <select>
                      <option>Select from options</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </div>

                <div className="row questions-row">
                  <div className="col-lg-7">
                    <h5 className="sl">What is your monthly payment?</h5>
                  </div>
                  <div className="col-lg-5">
                    <input className="text-input" type="text" />
                  </div>
                </div>
                <div className="btn-div">
                  <button onClick={this.handleScreen}>Calculate</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default connect()(HomeMobile);
