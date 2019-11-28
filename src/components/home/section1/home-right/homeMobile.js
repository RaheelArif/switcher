import React from 'react'

import "./homeMobile.css"
import HomeChat from "./chatComponent"
import { chatPush } from "../../../../store/action/index"
import { connect } from "react-redux"
class HomeMobile extends React.Component {

    state = {
        index: 0,
        questions: [
            { index: 1, type: "button", pre: "Aprox", question: "$", value: "OK let's go" },
            { index: 1, placeholder: "Please enter in $", type: "input", pre: "Aprox", question: "$", message: "" },
            { index: 1, placeholder: "Please inter in $", type: "input", pre: "Aprox", question: "", message: "" },
            { index: 1, placeholder: "yes or no", type: "input", pre: "Aprox", question: "", message: "" },
            { index: 1, placeholder: "Enter in $", type: "button", pre: "Aprox", question: "", message: "" },
        ]
        ,
        askquestions: [
            { index: 0, message: "What's the value of your property?" },
            { index: 0, message: "What's the outstanding balance of your mortgage?" },
            { index: 0, message: "Are you looking for additional borrowing?" },
            { index: 0, message: "What's your monthly repayment?" },
        ]
    }
    changeitem = () => {
        let { index } = this.state
        if (index < 4) {
            if (this.state.index === 0) {
                const array = [this.state.askquestions[index]]
                this.props.dispatch(chatPush(array))
            } else {
                const array = [this.state.questions[index], this.state.askquestions[index]]
                this.props.dispatch(chatPush(array))
            }
            this.setState({
                index: ++index
            })
        }
    }
    whanchange = (e) => {
        const { index } = this.state
        const value = e.target.value
        let questions = [...this.state.questions]
        questions[index].message = value
        this.setState({
            questions
        })
    }

    render() {
        const question = this.state.questions[this.state.index]
        return (
            <div className="col-lg-6 home-mbl">
                <div className="home-right ">
                    <p className="hr-p">Lets see how much you are overpaying your bank for you mortgage </p>
                    <div className="mobile-div mx-auto">
                        <HomeChat />
                    </div>
                    <div>
                        {question.type === "input" && <div className="home-bottom-content mbl-input mx-auto" style={{ display: "flex", flexDirection: "row", alignItems: "baseline", justifyContent: "center", }}>
                            <input type={question.type}
                                placeholder={question.placeholder} className="home-bottom-button  text-center" onChange={this.whanchange} style={{ backgroundColor: "white", color: "black" }} value={question.message} />

                        </div>}
                        <div className="home-bottom-content mx-auto">
                            <input type="button" onClick={this.changeitem} className="home-bottom-button text-center" value={!this.state.index ? "OK let's go" : "submit"} />
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
export default connect()(HomeMobile);

// What's the value of your property?
// What's the outstanding balance of your mortgage?
// Are you looking for additional borrowing?
// What's your monthly repayment?
// Or
// What interest rate are you paying?
