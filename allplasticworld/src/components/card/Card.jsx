import React from "react";
import styles from "./Card.module.css";
import Svg from "../../assets/svg/Group 28.svg";

function Card({ text, titel }) {
  return (
    <div className={styles.card_container}>
      <h3>{titel}</h3>
      <p>{text}</p>
      <img
        src={Svg}
        alt="svg_icon"
        className="absolute top-1/3 left-1/3 z-blurZindex"
      />
    </div>
  );
}

export default Card;
