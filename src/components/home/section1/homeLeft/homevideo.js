import React from 'react';

import Video from "./homeVideo.mp4"
import "./homevideo.css"
import post from "./thum.png"



class HomeVideo extends React.Component {


    render() {

        return (
            <div className="col-lg-12">
                <div className="home-left1 ">
                    <p>Watch our video to see easy it is to switch and save on your mortgage</p>
                    <div className="video-div1">
                     <video poster={post} className="sw-video1" src={Video}   preload controls></video>
                    </div>
                </div>

            </div>
        );
    }
}
export default HomeVideo;