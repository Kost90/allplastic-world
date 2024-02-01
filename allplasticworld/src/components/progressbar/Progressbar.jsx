import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import styles from "./Progressbar.module.css";

// подгружать данные с сервера по количеству переработки, сделать юстейт дата и  ее передать в юзэфект, а так же сделать фетч в этом же юз эфекте или пропсой сюда передавать

function Progressbar({ data }) {
  const lang = useSelector((state) => state.languages);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < data) {
        setProgress((prevCount) => prevCount + 1);
      } else {
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div className={styles.progress_bar_container}>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${progress}%` }}
        transition={{ duration: 0.5 }}
        className={styles.progrees_filer}
      >
        <span className={styles.count}>
          {lang === "en" ? `${progress} tone` : `${progress} тон`}
        </span>
      </motion.div>
    </div>
  );
}

export default Progressbar;
