import React from 'react';

import Video from "./homeVideo.mp4"
import "./homevideo.css"
import post from "./thum.png"

class HomeVideo extends React.Component {


    render() {

        return (
            <div className={`col-lg-6  vdvd 
            ${document.getElementById("root").offsetWidth > 1111 ? "displayClass" :""}
             
              ${this.props.show?"animate-on":"animate-of"}`} >
                <div className="home-left  ">
         <p className="vppp">
 Lets see how much you are overpaying your bank for you
                  mortgage
         </p>
                 <p  style={{height:"90px"}}>  
                        </p>
                    <div className="video-div">
                    <video poster={post} className="sw-video1"  height="420px" src={Video}   preload controls></video>

                     {/* <video poster={post} height="420px"  className="sw-video" src={Video} poster  preload='auto' controls></video> */}
                    </div>
                </div>

            </div>
        );
    }
}
export default HomeVideo;