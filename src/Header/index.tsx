import React from "react";
import s from "./index.module.scss";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <>
      <div className={s.header}>
        <img src={logo} alt="" />
        <div className={s.langLink}>
          <a href="#">Ru</a>
          <a href="#">En</a>
        </div>
      </div>
    </>
  );
};

export default Header;
