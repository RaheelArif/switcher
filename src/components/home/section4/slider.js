import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import One from "./images/1.png"
import two from "./images/2.jpg"
import three from "./images/3.jpg"
import four from "./images/4.jpg"
import five from "./images/5.png"
export default () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div className="slider-main-c" style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={3}
        gutter={20}
        leftChevron={<button className="slider-btn2">{'<'}</button>}
        rightChevron={<button className="slider-btn1">{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <div className="slider-c">
          <img src={One} alt="" className="slider-img" />
        </div>
        <div className="slider-c">
          <img src={two} alt="" className="slider-img" />
        </div>
        <div className="slider-c">
          <img src={three} alt="" className="slider-img" />
        </div>
        <div className="slider-c">
          <img src={four} alt="" className="slider-img" />
        </div>
        <div className="slider-c">
          <img src={five} alt="" className="slider-img" />
        </div>
      </ItemsCarousel>
    </div>
  );
};