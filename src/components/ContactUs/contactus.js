import React from 'react';
import './contactus.css'
import Footer from "../Footer/footer";
import Header from "../header/Header"

class ContactUs extends React.Component{


  render(){
    return(
      <div className="my-contact-us aboutut-r">
<Header />
      <section className="contact-us-section">
      <h1 className="about-r">Contact</h1>
      <h1 className="us-r">US</h1>
        <div className="container contact-us-con">
          <h3 className="contactus-heading">we are here to help</h3>
          <h6 className="contactus-subheading">we are available Monday to Friday 5 days a week, 8:30am to 6:00pm</h6>
          <div className="row contactus-row" >
            <div className="col-lg-4 cu-col">
              <img src={require('./icons/icon_email.gif')} />
              <h4>Email us</h4>
              <p><a href="mailto:hello@switchheroo.ie">hello@switchheroo.ie</a></p>
            </div>
            <div className="col-lg-4 cu-col">
              <img src={require('./icons/expertAdvice.gif')} />
              <h4>Call us</h4>
              <p><a href="tel:+35301XXXXXX">+353 (0)1 XXX XXX</a></p>
            </div>
            <div className="col-lg-4 cu-col">
              <img src={require('./icons/icon_mail.gif')} />
              <h4>Post us</h4>
              <p className="cu-address">Panda Capital T/A<br/>Switcheroo.ie<br/>13 Baggot Street Upper<br/>Dublin, D04 W7K5</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      </div>
    );
  }
}
export default ContactUs;