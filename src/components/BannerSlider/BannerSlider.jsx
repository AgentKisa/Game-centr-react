import React from "react";
import Slider from "react-slick";
import styles from "./BannerSlider.module.css";
import banner1 from "../../assets/1_rXxbasOtNQjXg5ysD7PIhA.png";
import banner2 from "../../assets/snapedit_1724747981812.jpg";
import banner3 from "../../assets/banner3.JPG";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        <div>
          <img src={banner1} alt="Banner 1" className={styles.slideImage} />
        </div>
        <div>
          <img src={banner2} alt="Banner 2" className={styles.slideImage} />
        </div>
        <div>
          <img src={banner3} alt="Banner 3" className={styles.slideImage} />
        </div>
      </Slider>
    </div>
  );
};

export default BannerSlider;
