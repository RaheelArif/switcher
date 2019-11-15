import React from 'react';

import "./homebottom.css";




class HomeBottom extends React.Component{



    render(){
        return(
            <div className="col-lg-12">
                <div className="home-bottom-content mx-auto">
                <p className="home-bottom-p">Why overpay? Switcheroo to a better rate </p>
                <button className="home-bottom-button text-center">Start Saving</button>
                </div>
            </div>
        );
    }
}

export default HomeBottom;

