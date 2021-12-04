import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import './../styles/Banner.css';
const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <div id="slider-image-1" >
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="hero-container">
                <h1 className="text-white hero-title">
                  FAST <span className="text-highlights"> REPAIR </span> YOUR{" "}
                  <br /> SMARTHPHONES
                </h1>
                <div>
                  <p className="text-light">
                    Our company produce the urgent repair of electronic devices
                    without.
                  </p>
                  <p className="text-light">
                    additional cost.In this short period of time does not effect
                    the quality of
                    <br /> work
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div id="slider-image-2">
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="hero-container">
                <h1 className="text-white hero-title">
                  Data <span className="text-highlights"> RECOVERY </span>
                </h1>
                <p className="text-light">
                  We Fix All Devices All Problems Sed ut perspiciatis unde omnis{" "}
                  <br />
                  iste natus error sit voluptatem accusantium doloremque
                  laudantium, totam
                </p>
              </div>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div id="slider-image-3">
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="hero-container">
                <h1 className="text-white hero-title">
                  Fast & Quick <span className="text-highlights"> Fix </span>
                </h1>
                <p className="text-light">
                  Just send valuable laptop, PC, MAC, Mobile, Gaming Device or{" "}
                  <br />
                  Smartphone and we'll take care of it.
                </p>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
