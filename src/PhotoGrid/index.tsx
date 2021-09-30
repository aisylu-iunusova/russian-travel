import React from "react";
import s from "./index.module.scss";
import img1 from "../assets/item1.png";
import img2 from "../assets/item2.png";
import img3 from "../assets/item3.png";
import img4 from "../assets/item4.png";
import img5 from "../assets/item5.png";
import img6 from "../assets/item6.png";
import img7 from "../assets/item7.png";
import img8 from "../assets/item8.png";
import img9 from "../assets/item9.png";
import img10 from "../assets/item10.png";
import img11 from "../assets/item11.png";
import img12 from "../assets/item12.png";

const PhotoGrid = () => {
  return (
    <>
      <div className={s.photoGrid}>
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
        <img src={img7} alt="" />
        <img src={img8} alt="" />
        <img src={img9} alt="" />
        <img src={img10} alt="" />
        <img src={img11} alt="" />
        <img src={img12} alt="" />
      </div>
    </>
  );
};

export default PhotoGrid;
