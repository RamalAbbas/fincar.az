"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Popular.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderArrow from "../../../assets/icons/sliderArrow.svg";
import CarCard from "../../Common/CarCard/CarCard";
import { getPopularCars } from "../../../services";
import { useRouter } from "next/navigation";

const SampleNextArrow = ({ className, style, onClick, disabled }) => {
  return (
    <div
      className={`${className} ${styles.customArrowRight} ${
        disabled ? styles.disabled : ""
      } ${styles.customArrow}`}
      style={{ ...style }}
      onClick={disabled ? null : onClick}
    >
      <Image
        src={sliderArrow}
        loading="lazy"
        width={32}
        height={32}
        alt="sliderArrow"
        className="object-cover w-full h-full"
      />
    </div>
  );
};

const SamplePrevArrow = ({ className, style, onClick, disabled }) => {
  return (
    <div
      className={`${className} ${styles.customArrowLeft} ${
        disabled ? styles.disabled : ""
      } ${styles.customArrow}`}
      style={{ ...style }}
      onClick={disabled ? null : onClick}
    >
      <Image
        src={sliderArrow}
        loading="lazy"
        width={32}
        height={32}
        alt="sliderArrow"
        className="object-cover w-full h-full scale-[-1]"
      />
    </div>
  );
};

const Popular = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideCount, setSlideCount] = useState(0);
  const { push } = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [popularCars, setPopularCars] = useState([]);
  useEffect(() => {
    if (sliderRef.current) {
      setSlideCount(sliderRef.current.innerSlider.props.children.length - 0.3);
    }
  }, [sliderRef.current]);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3.1,
    arrows: false,
    swipeToSlide: true,
    slidesToScroll: 1,
    nextArrow: (
      <SampleNextArrow
        onClick={() => sliderRef.current.slickNext()}
        disabled={currentSlide >= slideCount - 3}
      />
    ),
    prevArrow: (
      <SamplePrevArrow
        onClick={() => sliderRef.current.slickPrev()}
        disabled={currentSlide === 0}
      />
    ),
    afterChange: (current) => setCurrentSlide(current),
  };

  const getPopularsCarsData = async () => {
    try {
      setIsLoading(true);
      const response = await getPopularCars();
      setPopularCars(response);
      
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPopularsCarsData();
  }, []);

  const callBackSlug = (slug) => {
    push(`/product/${slug}`);
  };

  const renderProducts = () => {
    getPopularsCarsData()
  }

  return (
    <>
      <div className={styles.widhtLimitContainerLarge}>
        <div
          className={`${styles.sliderContainer} ${styles.widhtLimitContainer}`}
        >
          <div className={styles.title}>
            <h1>Popular maşınlar</h1>
            <div className={styles.arrowContainer}>
              <SamplePrevArrow
                onClick={() => sliderRef.current.slickPrev()}
                disabled={currentSlide === 0}
              />
              <SampleNextArrow
                onClick={() => sliderRef.current.slickNext()}
                disabled={currentSlide >= slideCount - 3}
              />
            </div>
          </div>
          <div className={`${styles.slider} slider-container`}>
            <Slider ref={sliderRef} {...settings}>
              {popularCars?.map((info, index) => (
                <div className={styles.px12} key={index}>
                  <CarCard renderProducts={renderProducts} callBackSlug={callBackSlug} data={info} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popular;
