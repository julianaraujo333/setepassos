import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./Carrousel.module.css";

import img1 from "./../../Assets/Depoimentos/1.jpg";
import img2 from "./../../Assets/Depoimentos/2.PNG";
import img3 from "./../../Assets/Depoimentos/3.png";
import img4 from "./../../Assets/Depoimentos/4.jpg";

import img5 from "./../../Assets/Depoimentos/5.PNG";
import img6 from "./../../Assets/Depoimentos/6.PNG";
import img7 from "./../../Assets/Depoimentos/7.jpg";
import img8 from "./../../Assets/Depoimentos/8.jpg";
import img9 from "./../../Assets/Depoimentos/9.jpg";
import img10 from "./../../Assets/Depoimentos/10.jpg";
import img11 from "./../../Assets/Depoimentos/11.jpg";
import img12 from "./../../Assets/Depoimentos/12.jpg";

export default class Carrousel extends Component {
  render() {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 3,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };
    return (
      <Carousel responsive={responsive} className={styles.wrapper}>
        <div>
          <img src={img1} alt="" />
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
        <div>
          <img src={img3} alt="" />
        </div>
        <div>
          <img src={img4} alt="" />
        </div>
        <div>
          <img src={img5} alt="" />
        </div>
        <div>
          <img src={img6} alt="" />
        </div>
        <div>
          <img src={img7} alt="" />
        </div>
        <div>
          <img src={img8} alt="" />
        </div>
        <div>
          <img src={img9} alt="" />
        </div>
        <div>
          <img src={img10} alt="" />
        </div>
        <div>
          <img src={img11} alt="" />
        </div>
        <div>
          <img src={img12} alt="" />
        </div>
      </Carousel>
    );
  }
}
