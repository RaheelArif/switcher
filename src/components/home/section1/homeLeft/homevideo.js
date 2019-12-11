import React from 'react';

import Video from "./homeVideo.mp4"
import "./homevideo.css"



class HomeVideo extends React.Component {


    render() {

        return (
            <div className="col-lg-6 ">
                <div className="home-left1 ">
                    <p>Watch our video to see easy it is to switch and save on your mortgage</p>
                    <div className="video-div1">
                     <video className="sw-video1" src={Video}   preload controls></video>
                    </div>
                </div>

            </div>
        );
    }
}
export default HomeVideo;