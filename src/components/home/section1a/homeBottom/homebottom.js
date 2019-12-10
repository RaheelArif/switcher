import React from 'react';

import "./homebottom.css";




class HomeBottom extends React.Component{



    render(){
        return(
    <div className="hmbtm" >

                  <div className={document.getElementById("root").style.width > 1100 ?"home-bottom-content":"home-bottom-content2"}>
                <p className="home-bottom-p">Why overpay?</p>
                <p className="home-bottom-p">Switcheroo to a better rate </p>
                <button className="home-bottom-button2 text-center">Start Saving</button>
                </div>
            </div>
        );
    }
}

export default HomeBottom;

