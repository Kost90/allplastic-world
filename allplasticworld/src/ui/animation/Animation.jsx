import { useEffect, useState } from "react";
import Mockapi from "../../API/Mockapi";
import Canvascomponent from "../../components/animations/bounce/Canvas";
import Plastiitems from "../../components/animations/plasticsitems/Plastiitems";
import { motion } from "framer-motion";
import styles from "./Animation.module.css";
// import Progressbar from "../../components/progressbar/Progressbar";

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Animation() {
  const [alltime, setAlltime] = useState([]);

  useEffect(() => {
    let controller;
    const fetchData = async () => {
      const controller = new AbortController();
      const signal = controller.signal;
      const resAlltime = await Mockapi.getAlltime({ signal });
      const count = (resAlltime[0].tone / 1000000) * 100;
      setAlltime((prev) => (prev = count));
    };
    fetchData();

    return () => {
      if (controller) {
        controller.abort();
      }
    };
  }, []);

  return (
    <div className="relative h-44 md:h-60 lg:h-72 flex items-baseline gap-2">
      <div className={styles.plastic_item_group}>
        <div className={styles.plastic_item}></div>
        <div className={styles.plastic_item}></div>
        <div className={styles.plastic_item}></div>
        <div className={styles.plastic_item}></div>
        <div className={styles.plastic_item}></div>
        <div className={styles.plastic_item}></div>
        <div className={styles.plastic_item}></div>
      </div>
      {array.map((el, i) => (
        <Plastiitems left={"30%"} top={"5%"} delay={i} />
      ))}
      <Canvascomponent />
      <div className={styles.sorted_plate}>
        <div className={styles.sorted_div}></div>
        {/* <Progressbar data={alltime}/> */}
        <div className={styles.progress_bar_container}>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: alltime < 10 ? `3%` : `${alltime}%` }}
            transition={{ duration: 0.7 }}
            className={styles.progrees_filer}
          >
            <span className={styles.count}>{alltime} %</span>
          </motion.div>
        </div>

        <div className={styles.sorted_div}></div>
      </div>
      <div className={styles.recycle_bin}>
        <h3>goal 1 000 000</h3>
      </div>
    </div>
  );
}

export default Animation;
