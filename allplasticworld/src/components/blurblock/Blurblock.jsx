import React from "react";
import styles from "./Blurblock.module.css";

function Blurblock({ rotate, top, bottom, left, right }) {
  return (
    <>
      <div
        className={styles.blur_block}
        style={{
          transform: `rotate(${rotate})`,
          top: `${top}`,
          bottom: `${bottom}`,
          left: `${left}`,
          right: `${right}`,
        }}
      ></div>
    </>
  );
}

export default Blurblock;
