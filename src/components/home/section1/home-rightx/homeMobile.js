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
        type: "input",
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
      },
      {
        index: 0,
        message: (
          <p>
            <img className="chat-icon" src="images/icon.png" alt="chat-icon1" />{" "}
            Oh Yeah!!!{" "}
          </p>
        )
      },
      {
        index: 0,
        message: (
          <p>
            <img className="chat-icon" src="images/cap.png" alt="chat-icon1" />{" "}
          </p>
        )
      },
      {
        index: 0,
        message: (
          <p>
            <img
              className="chat-icon"
              src="images/bottle.png"
              alt="chat-icon1"
            />{" "}
          </p>
        )
      },
      {
        index: 0,
        message: (
          <p>
            <img
              className="chat-icon"
              src="images/water.png"
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
          for (var i = 1; i <= 5; ++i) {
            setTimeout(
              function() {
                if (this.state.index <= 9) {
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
                          you could save {perMonth.toFixed(2)} ‎€ per month, which
                          is {(perMonth * 12).toFixed(2)} ‎€ per year!*{" "}
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
  render() {
    const question = this.state.questions[this.state.index];
    return (
      <div className={`col-lg-6 home-mbl  ‎${this.props.class}`}>
        <div className="home-right  ">
          <p className="hr-p">
          </p>
          <div className={`mobile-div mx-auto  ‎${this.props.phone}`}>
              <div className="mobileinnerabc">
            <HomeChat />

              <from onSubmit={this.changeitem}>
            <div className="my-div letcheckbutton">
              {this.state.index <= 6 && question.type === "input" && (
                <div
                  className="home-bottom-content mbl-input mx-auto"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "baseline",
                    justifyContent: "center"
                  }}
                >

                  <input
                    type={question.type}
                    placeholder={question.placeholder}
                    className="home-bottom-button  text-center"
                    onChange={this.whanchange}
                    style={{ backgroundColor: "white", color: "black" }}
                    value={question.message}
                    />
                </div>
              )}
              <div
                className="home-bottom-content my-div2   "
                style={{ marginBottom: "20px" }}
              >
                <input
                  type="submit"
                  onClick={this.changeitem}
                  className="home-bottom-button text-center"
                  value={!this.state.index ? "OK let's go" : "submit"}
                  />
                </div>
              </div>
                </from>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect()(HomeMobile);


