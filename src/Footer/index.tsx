import React from "react";
import s from "./index.module.scss";

const Footer = () => {
  return (
    <>
      <div className={s.footer}>
        <nav>
          <ul>
            <li>
              <a href="https://yandex.ru/maps">Карты</a>
            </li>
            <li>
              <a href="https://yandex.ru/pogoda">Погода</a>
            </li>
            <li>
              <a href="https://rasp.yandex.ru">Расписание</a>
            </li>
            <li>
              <a href="https://calendar.yandex.ru">Календарь</a>
            </li>
            <li>
              <a href="https://travel.yandex.ru">Путешествия</a>
            </li>
          </ul>
        </nav>
        <p className={s.copyright}>© 2021 Aisylu Iunusova</p>
      </div>
    </>
  );
};

export default Footer;
