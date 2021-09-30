import React from "react";
import s from "./App.module.css";
import Header from "./Header";
import Lead from "./Lead";
import Intro from "./Intro";
import PhotoGrid from "./PhotoGrid";
import Place from "./Place";
import kurshKosa from "./assets/kosa.png";
import kolskiy from "./assets/kolskiy.png";
import Cover from "./Cover";
import Footer from "./Footer";

function App() {
  return (
    <>
      <div className="App">
        <div className={s.page}>
          <Header />
          <div className={s.content}>
            <Lead />
            <Intro />
            <PhotoGrid />
            <Place
              alt={"Куршская коса"}
              title={"Куршская коса"}
              img={kurshKosa}
              text1={
                "Здесь, посреди лесов и песчаных дюн, вы сможете увидеть два водных горизонта — спокойного Куршского залива с одной стороны и подёрнутого рябью волн Балтийского моря с другой. Уникальная природная зона на краю российского анклава."
              }
              text2={
                "На этом Калининградская область не заканчивается. Для путешественника и исследователя там же по соседству — самая западная точка России, Балтийская коса, — и немецкое наследие россыпи небольших приморских городов. Атмосфера здешних мест исключает суету, окуная в спокойствие природы и запах стального, прохладного моря."
              }
              link={"http://park-kosa.ru"}
              linkName={"Park-kosa.ru"}
            />
            <Place
              alt={"Кольский"}
              title={"Кольский"}
              img={kolskiy}
              text1={
                "Почти весь полуостров находится за Полярным кругом. Саамская тундра, от которой на юг — тайга, а на север — Ледовитый океан, прикидывающийся Баренцевым морем."
              }
              text2={
                "Возможно, вы смотрели Звягинцева и даже слышали историю арктического фестиваля в Териберке. Возможно, слово «Хибины» не осталось под снегом школьных воспоминаний об уроках географии. Возможно, вы не интересовались пронизывающей земную кору сверхглубокой скважиной, а от апатитов вас давно накрывает апатия. Но ваша мечта увидеть северное сияние начинает сбываться с билетом в Мурманск."
              }
              link={
                "https://yourshot.nationalgeographic.com/photos/?keywords=kolskiy"
              }
              linkName={"National Geographic"}
            />
            <Cover />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
