import React from "react";
import FAQs from "./faqs";
import "./faqs.css";

class FAQIndex extends React.Component {
  render() {
    var faqs = [
      {
        question: "How mush can I save?",
        answer:
          "The Central Bank of Ireland published their research that showed that many existing mortgage holders can save over €10,000 euros by switching their mortgage. It will depend on your specific circumstances but just 20 seconds on our calculator will show you what its worth for you to switcheroo. "
      },
      {
        question: "What’s the best mortgage I can get?",
        answer:
          "That’s a question we hear a lot but there is no simple answer to this. There are a number of factors to this which both you and we need to consider when you are thinking of getting a mortgage. Mortgages coming with different terms and banks use different criteria to establish who they lend to, how much and at what rate. Don’t stress too much! You can find out pretty quickly to see if it’s worth your while. From there we will guide you through the process and make sure you get the right mortgage for you and make the process as simple as possible."
      },
      {
        question: "What documents will you need from me?",
        answer:
          "Initially, none. The first step is for you to answer a few questions, so that we understand your circumstances. When we move on to preparing your submission to a lender, we will need to make sure that your information is accurate, and we’ll need some documents from you. Those include proof of your identity, income, bills and address, as well as things like visa status where it applies. We’ll always make it clear exactly what we need and why."
      },
      {
        question: "Do you perform credit checks?",
        answer:
          "Our job is to make sure that you have the best possible chance of being accepted. So we perform our own affordability check before sending anything to a lender. This leaves no footprint on your credit history."
      },
      {
        question: "I want to switcheroo, what’s next?",
        answer:
          "Once you’ve worked out how much you can save you’ll need to sign up and provide us some basic information. Usually, this shouldn’t take more than 30 minutes, and you’ll be one step closer to a mortgage. At this point, you can have a phone call with one of our mortgage experts. They will answer any questions you have and tell you exactly what documents you’re going to need. From there, the expert team will guide you through the application process and keep you updated on progress. You can check progress online and we will keep you updated along the way."
      },
      {
        question: "What does Switcheroo.ie do with my data?",
        answer:
          "It’s all explained in our privacy policy, but basically: we won’t spam you and we won’t pass on your data to other companies so that they can spam you. We hate that."
      },
      {
        question: "How does Switcheroo.ie make money?",
        answer:
          "Yep, we don’t charge any brokers fees. If you get a mortgage using Swithceroo.ie, the lender you use has to pay us a fee. Some brokers charge you an additional fee but not us, we are free forever. These fees never affect our advice. Our reputation and livelihood depend on us always giving our customers the best possible advice. The important bit is: we’ll never charge you a penny."
      }
    ];
    return (
      <section className="faq-section">
        <div className="container faq-con">
          <div className="faq-heading">
            {/* <h1>FAQs</h1> */}
            <h6>Frequently Asked Questions</h6>
          </div>
          <div>
            {faqs.map((value, index) => {
              return (
                <FAQs
                  collapseClass={"b" + index}
                  question={value.question}
                  answer={value.answer}
                />
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}
export default FAQIndex;
