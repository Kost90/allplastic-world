import React from "react";
import styles from "./About.module.css";
import Card from "../../components/card/Card";
import { textEn, textUa } from "./text";
import { useSelector } from "react-redux";

function About() {
  const lang = useSelector((state) => state.languages);
  return (
    <div className="container">
      <div className={styles.about_wrapper}>
        <Card
          titel={lang === "en" ? `Recycle plastic` : `Перероботка пластику`}
          text={lang === "en" ? "From all over the world" : "Зі всього світу"}
        />
        <div className="max-w-xl">
          <h1 className="text-center">
            {lang === "en" ? "About company" : "Про компанію"}
          </h1>
          {lang === "en"
            ? textEn.map((el) => <p className="text-justify pb-2">{el}</p>)
            : textUa.map((el) => <p className="text-justify pb-2">{el}</p>)}
        </div>
      </div>
    </div>
  );
}

export default About;
