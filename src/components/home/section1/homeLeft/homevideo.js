import React from 'react';

import Video from "./homeVideo.mp4"
import "./homevideo.css"



class HomeVideo extends React.Component {


    render() {

        return (
            <div className="col-lg-6 abc">
                <div className="home-left mx-auto">
                    <p>Watch our video to see easy it is to switch and save on your mortgage</p>
                    <div className="video-div">
                     <video className="sw-video" src={Video} autoPlay preload controls></video>
                    </div>
                </div>

            </div>
        );
    }
}
export default HomeVideo;