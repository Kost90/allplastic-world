import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import styles from "./Footer.module.css";

const svgClass = {
    fill: "white",
    cursor: "pointer",
  };
  
  const svgClassHover = {
    "&:hover": {
      fill: "#20B18D",
    },
  };

function Footer() {
  return (
    <div className={styles.footer_wrapper}>
      <div className="flex justify-center items-center gap-2 md:gap-5">
        <p className="text-white text-pMob md:text-pDesk">Follow us:</p>
        <a href="#" target="blanc">
          <InstagramIcon sx={{ ...svgClass, ...svgClassHover }} />
        </a>
        <a href="#" target="blanc">
          <FacebookIcon sx={{ ...svgClass, ...svgClassHover }} />
        </a>
      </div>
      <div className={styles.bottom_container}>
        <p className="text-pMob md:text-pDesk text-slate-300">2024 Kostiantyn Dontsov</p>
      </div>
    </div>
  );
}

export default Footer;
