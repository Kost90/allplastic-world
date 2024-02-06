import React, { useState, useEffect, memo } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import styles from "./Progressbar.module.css";

const Progressbar = memo(({ data }) => {
  const lang = useSelector((state) => state.languages);
  const [progress, setProgress] = useState(0);
  const prop = data;

  useEffect(() => {
    const interval = setInterval(() => {
      if (prop.length !== 0) {
        const count = (prop.tone / 1000000) * 100;
        if (progress < count) {
          setProgress((prevCount) => prevCount + count);
        } else {
          clearInterval(interval);
        }
      }
    }, 40);

    return () => clearInterval(interval);
  }, [prop, progress, lang]);

  return (
    <div className={styles.progress_bar_container}>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: progress < 10 ? `3%` : `${progress}%` }}
        transition={{ duration: 0.7 }}
        className={styles.progrees_filer}
      >
        <span className={styles.count}>
          {lang === "en" ? `${progress} %` : `${progress} %`}
        </span>
      </motion.div>
    </div>
  );
});

export default Progressbar;
