"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./MobileCarImgSlider.module.css";
import Image from "next/image";
import car1 from "../../../assets/images/carCardExample/bmwe46.jpg";
import car2 from "../../../assets/images/carCardExample/bmwm3nfs.jpg";
import car3 from "../../../assets/images/carCardExample/car1.png";
import car4 from "../../../assets/images/carCardExample/car2.png";
import car5 from "../../../assets/images/carCardExample/car3.png";
import car6 from "../../../assets/images/carCardExample/car4.png";

const MobileCarImgSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    touchMove: true,
    arrows: false,
    appendDots: (dots) => (
      <div
        style={{
          padding: "10px",
          position: "absolute",
          bottom: "0",
          marginBottom: "5px",
        }}
      >
        <ul className={styles.sliderDots} style={{ margin: "0px" }}>
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
  };

  return (
    <div className={`${styles.widhtLimitContainerLarge}`}>
      <div
        className={`${styles.sliderContainer} ${styles.widhtLimitContainer}`}
      >
        <div className="slider-container">
          <Slider className={styles.slider} {...settings}>
            {images?.map((item) => (
              <div className={`w-full overflow-hidden ${styles.sliderCard}`} key={item.id}>
                <img
                  src={item.image}
                  loading="lazy"
                  width={1120}
                  height={536}
                  alt="slider image 1"
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default MobileCarImgSlider;
