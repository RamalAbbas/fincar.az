"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./MobileCarImgSlider.module.css";
import favorite from "../../../assets/icons/favorite.svg";
import favouriteblack from "../../../assets/icons/favouriteblack.svg";
import Image from "next/image";

const MobileCarImgSlider = ({ images, data }) => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const settings = {
    infinite: false,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    touchMove: true,
    arrows: false,
    infinite: true,
    afterChange: (index) => setCurrentSlide(index + 1), 
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

  const saveCarFunction = async () => {
    const response = await carSave({ car: data.id });
    console.log(response);
    renderProducts();
  };

  const deleteCarFunction = async () => {
    const response = await deleteSavedCar(data.id);
    renderProducts();
  };

  return (
    <div className={`${styles.widhtLimitContainerLarge}`}>
      <div
        className={`${styles.sliderContainer} ${styles.widhtLimitContainer}`}
      >
        <div className="slider-container relative">
          <Slider className={styles.slider} {...settings}>
            {images?.map((item) => (
              <div
                className={`w-full overflow-hidden ${styles.sliderCard}`}
                key={item.id}
              >
                <img
                  src={item.image}
                  loading="lazy"
                  width={1120}
                  height={536}
                  alt={`slider image ${currentSlide}`}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </Slider>
          {/* {
                true ? (
                    <div onClick={deleteCarFunction} className={styles.fav_disabled}>
                      <Image
                        src={favouriteblack}
                        loading="lazy"
                        width={20}
                        height={20}
                        alt="car"
                        className="h-full w-full object-cover rounded-t-[10px]"
                      />
                    </div>
                  ) : (
                    <div onClick={saveCarFunction} className={styles.fav}>
                      <Image
                        src={favorite}
                        loading="lazy"
                        width={20}
                        height={20}
                        alt="car"
                        className="h-full w-full object-cover rounded-t-[10px]"
                      />
                    </div>
                  )
                } */}

            <div className={styles.slideNumber}>
              <p className={styles.slideTitle}>
              {currentSlide}/{images?.length}
              </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MobileCarImgSlider;
