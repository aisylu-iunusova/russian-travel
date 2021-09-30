import React from "react";
import s from "./index.module.scss";
import leadImg from "../assets/lead.png";

const Lead = () => {
  return (
    <>
      <div className={s.lead}>
        <h1 className={s.title}>Путешествия по России</h1>
        <p className={s.subtitle}>
          Настоящая страна не в выпусках новостей, а здесь.
        </p>
        <figure>
          <img src={leadImg} alt="" />
          <figcaption className={s.caption}>Ваша полка — верхняя</figcaption>
        </figure>
      </div>
    </>
  );
};

export default Lead;
