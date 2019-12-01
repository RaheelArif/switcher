import React from 'react';

import Video from "./homeVideo.mp4"
import "./homevideo.css"



class HomeVideo extends React.Component {


    render() {

        return (
            <div className={`col-lg-6  
            ${document.getElementById("root").offsetWidth > 1100 ? "displayClass" :""}
             
              ${this.props.show?"animate-on":"animate-of"}`} >
                <div className="home-left  ">
                    <p style={{height:"90px"}}>
                        {this.props.show &&  "Watch our video to see easy it is to switch and save on your mortgage"}
                        </p>
                    <div className="video-div">
                     <video className="sw-video" src={Video}   preload controls></video>
                    </div>
                </div>

            </div>
        );
    }
}
export default HomeVideo;