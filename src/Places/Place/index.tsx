import React from "react";
import s from "./index.module.scss";

type Props = {
  title: string;
  img: string;
  text1: string;
  text2?: string;
  alt: string;
  link: string;
  linkName: string;
};

const Place = ({ title, img, text1, text2, alt, link, linkName }: Props) => {
  return (
    <>
      <div className={s.place}>
        <h2 className={s.title}>{title}</h2>
        <div className={s.website}>
          <p>URL</p>
          <a href={link}>{linkName}</a>
        </div>
        <img src={img} alt={alt} />
        <div className={s.paragraphs}>
          <p className={s.paragraph}>{text1}</p>
          <p className={s.paragraph}>{text2}</p>
        </div>
      </div>
    </>
  );
};

export default Place;
