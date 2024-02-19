import React from "react";
import styles from "./Card.module.css";
import {motion} from 'framer-motion'
import Svg from "../../assets/svg/Group 28.svg";

// подумаю о анимации свг крутиться вокруг себя

function Card({ text, titel, id }) {
  return (
    <motion.div
    initial={{
      y:20,
      opacity:0,
    }}
    whileInView={{
      y:0,
      opacity:1,
    }}
    viewport={{amount:0.2,once:true}}
      className={styles.card_container}
      style={id ? { background: "none" } : null}
    >
      <h3 className="uppercase font-semibold text-center">{titel}</h3>
      <div className="relative w-24 h-24">
        <img src={Svg} alt="svg_icon" className={styles.img_position} />
        {id ? (
          <div className={id === 2 || id === 5 ? styles.div_green : styles.div}>
            <p className="font-semibold">{id}</p>
          </div>
        ) : null}
      </div>
      <p className="text-justify">{text}</p>
    </motion.div>
  );
}

export default Card;
