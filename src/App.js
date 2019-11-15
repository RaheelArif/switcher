import React from 'react';
import Home from './components/home/home';
import Footer from './components/Footer/footer';
import AboutUs from './components/AboutUs/aboutus';
import FAQIndex from './components/FAQs/faqindex';
import DPNIndex from './components/DataPrivacyNotice/dpnindex';
import whySwicthes from './components/whySwicthes/whySwicthes';
import Contact from "./components/ContactUs/contactus"
import TOBIndex from './components/TOB/tobindex';
// import 'react-virtualized/styles.css'

// import Header from './components/home/header/Header';
import { BrowserRouter, Switch, Route, } from "react-router-dom"



class App extends React.Component {


  render() {

    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/aboutus" component={AboutUs} />
            <Route exact path="/faqs" component={FAQIndex} />
            <Route exact path="/data-privacy-notice" component={DPNIndex} />
            <Route exact path="/why-swicthes" component={whySwicthes} />
            <Route exact path="/contact-us" component={Contact} />
            <Route exact path="/terms-of-business" component={TOBIndex} />
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}
export default App
