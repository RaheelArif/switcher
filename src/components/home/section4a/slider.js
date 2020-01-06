import React, { Component } from "react";
import Slider from "react-slick";
import "./slider.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import One from "./images/1c.jpg"
import two from "./images/5.png"
import five from "./images/d.png"
import three from "./images/3.png"
import four from "./images/4.jpg"
export default class SimpleSlider extends Component {

  state = {
    a: window.innerWidth > 900 ? 3 : 1,
    width: null,
    height: null
  }
  updateDimensions = () => {
    if (window.innerWidth < 500) {
      this.setState({
        a: 1
      })
    } else if (window.innerWidth > 900) {
      this.setState({
        a: 3
      })
    } else if (window.innerWidth > 500) {
      this.setState({
        a: 2
      })
    }

  };
  componentDidMount() {
    // if(window.innerWidth < 500){
    //   this.setState({
    //     a:1
    //   })
    // }else if(window.innerWidth > 900){
    //   this.setState({
    //     a:1
    //   })
    // }else if(window.innerWidth < 500){
    //   this.setState({
    //     a:1
    //   })
    // }
    window.addEventListener('resize', this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  render() {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: this.state.a,
      slidesToScroll: 1
    }
    return (
      <Slider className="h-s1-slider-c" {...settings}>
        <div className="slider-cr">
          <div className="slider-img">

            <img src={One} alt="" className="logoimg1" />
          </div>
        </div>
        <div className="slider-cr">
          <div className="slider-img">

            <img src={two} alt="" className=" logoimg2" />
          </div>
        </div>

        <div className="slider-cr">
          <div className="slider-img">

            <img src={three} alt="" className="logoimg3" />
          </div>
        </div>

        <div className="slider-cr">
          <div className="slider-img">

            <img src={four} alt="" className="logoimg4" />
          </div>
        </div>

        <div className="slider-cr">
          <div className="slider-img">

            <img src={five} alt="" className="logoimg2" />
          </div>
        </div>


      </Slider>
    );
  }
}

// import React, { useState } from 'react';
// import ItemsCarousel from 'react-items-carousel';

// export default () => {
//   const [activeItemIndex, setActiveItemIndex] = useState(0);
//   const chevronWidth = 40;
//   return (
//     <div className="slider-main-c" style={{ padding: `0 ${chevronWidth}px` }}>
//       <ItemsCarousel
//       disableSwipe={false}
//         requestToChangeActive={setActiveItemIndex}
//         activeItemIndex={activeItemIndex}
//         numberOfCards={3}
//         gutter={20}
//         leftChevron={<button className="slider-btn2">{'<'}</button>}
//         rightChevron={<button className="slider-btn1">{'>'}</button>}
//         outsideChevron
//         chevronWidth={chevronWidth}
//       >
//         <div className="slider-cr">
//           <img src={One} alt="" className="slider-img" />
//         </div>
//         <div className="slider-cr">
//           <img src={two} alt="" className="slider-img" />
//         </div>
//         <div className="slider-cr">
//           <img src={three} alt="" className="slider-img" />
//         </div>
//         <div className="slider-cr">
//           <img src={four} alt="" className="slider-img" />
//         </div>
//         <div className="slider-cr">
//           <img src={five} alt="" className="slider-img" />
//         </div>
//       </ItemsCarousel>
//     </div>
//   );
// }