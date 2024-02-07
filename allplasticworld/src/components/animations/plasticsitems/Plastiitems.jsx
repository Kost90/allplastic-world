import React from "react";
import { motion } from "framer-motion";
import styles from "./Plastiitems.module.css";

function Plastiitems({ top, right, bottom, left }) {
  return (
    <>
      <div
        className={styles.plastic_item}
        style={{
          top: `${top}`,
          left: `${left}`,
          bottom: `${bottom}`,
          right: `${right}`,
        }}
      ></div>
    </>
  );
}

export default Plastiitems;

// animate={{
//     x: [-150, 50],
//     y: [50, -50, 50],
//     transition: {
//         duration: 2,
//         ease: "spring",
//         repeat: Infinity,
//         repeatDelay: 0,
//         delay: 0
//     }
// }}

// rotate: 300,
//                 rotateY: 100,
//                 x: [-100, 100,],
//                 y:[50, 45, 40, 35,34,33,32,31, 30,29,28,27,26, 25, 24,23,22,21, 20, 19,18,17,16, 15, 10, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4,-5,-6,-7,-8, -9,-10, -11,-12,-13,-14, -15, -16,-17,-18,-19, -20, -21, -22, -23, -24, -25, 1, 2, 3, 4, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
//                 transition: {
//                     duration: 5,
//                     ease: "linear",
//                     repeat: Infinity,
//                     repeatDelay: 0,
//                     delay: 0
//                 }
//             }}

// animate={{
//     rotate: 300,
//     rotateY: 100,
//     x: [-100, 100,],
//     y:[50, 45, 40, 35,34,33,32,31, 30,29,28,27,26, 25, 24,23,22,21, 20, 19,18,17,16, 15, 10, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4,-5,-6,-7,-8, -9,-10, -11,-12,-13,-14, -15, -16,-17,-18,-19, -20, -21, -22, -23, -24, -25, 1, 2, 3, 4, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
//     transition: {
//         duration: 5,
//         ease: "linear",
//         repeat: Infinity,
//         repeatDelay: 0,
//         delay: 0
//     }
// }}
