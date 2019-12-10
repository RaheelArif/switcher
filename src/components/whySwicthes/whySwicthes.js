import React, { Component } from 'react'
import "./whySwicthes.css"
import why from "./why.png"
import Header from "../header/Header"
import Footer from "../Footer/footer"
export default class whySwicthes extends Component {
    render() {
        return (
            <div className="why-sw aboutut-r">
                <Header />
                <img className="why-img" src={why} alt=""/>
                <h1 className="why-why-r">Why </h1>
          <h1 className="why-sw-r">Switch <span>?</span></h1>
                <div className="ws-container">
                    <div className="ws-p1">The simple fact is that many people can save thousands of euros each year by switching their mortgage, but they chose not to and instead pay extra hard-earned money to their mortgage provider than they have to. </div>
                    <div className="ws-c2">
                        <h3 className="ws-h3">Why is there such madness ? </h3>
                        <p className="ws-c2-p1">People switch in other areas of their life all the time.<br /> Let’s look at switching habits in Ireland: </p>
                        <ul>
                            <li>30% of products purchased on line are returned </li>
                            <li>Car buyers in Ireland are switching faster than ever and research shows that on average they spend around 14 hours of their time doing this.  </li>
                            <li>For the millennials of you out there, Lovin research shows that the average length of a relationship is 4.2 years which means a lot of you are more committed to your bank than your partner</li>
                        </ul>
                        <p className="ws-p1">But Central Bank research showed that only 4% of Irish mortgage customers had EVER switched their mortgage to a new provider. </p>
                        <p className="ws-c2-p1">There are two main reasons for this:</p>

                        <ul>
                            <li>people are unclear of the savings they could get</li>
                            <li>the process is deemed to be a real hassle </li>
                        </ul>
                        <p className="ws-why">This is why we have built Switcheroo.ie. </p>
                    </div>
                    <p className="ws-p1">In 15 seconds, you can figure out what savings you can make by switching by using our clever switcheroo calculator. We have digitised the application process so when you see when you see these great savings you can make your switch online 24/7 at whatever time suits, while having access to our expert mortgage advisors. </p>
                    <p className="ws-p1">Now has never been a better time to switch. Over the past few years the cost of mortgages has dropped significantly and so if you took out a mortgage over the last 10 years you are probably paying more than you should. </p>
                    <p className="ws-p1">Unless you have a better way to earn thousands of euros with just a few hours of your time then register and start saving!!</p>
                </div>
                <Footer />
            </div>
        )
    }
}
