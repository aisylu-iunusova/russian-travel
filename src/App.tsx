import React from "react";
import s from "./App.module.scss";
import Header from "./Header";
import Lead from "./Lead";
import Intro from "./Intro";
import PhotoGrid from "./PhotoGrid";
import Cover from "./Cover";
import Footer from "./Footer";
import Places from "./Places";

function App() {
  return (
    <>
      <div className="App">
        <div className={s.page}>
          <Header />
          <Lead />
          <Intro />
          <PhotoGrid />
          <Places />
          <Cover />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
