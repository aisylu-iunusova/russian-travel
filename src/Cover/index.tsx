import React from "react";
import s from "./index.module.scss";
import cover from "../assets/cover.png";

const Cover = () => {
  return (
    <>
      <div className={s.cover}>
        <img src={cover} alt="" />
        <a href="https://stampsy.com/na-elektrichkakh-do-baikala">
          <h2>До Байкала «на собаках»</h2>
          <p>
            По мотивам учебной темы о Транссибе — путешествие от столицы до
            Байкала на электричках.
          </p>
        </a>
      </div>
    </>
  );
};

export default Cover;
