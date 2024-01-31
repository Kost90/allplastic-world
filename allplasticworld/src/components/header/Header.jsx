import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeEN, changeUA } from "../../store/languages/languagesSlice";
import styles from "./Header.module.css";
import Logo from "../../assets/svg/Logopicture.svg";

function Header() {
  const lang = useSelector((state) => state.languages);
  const dispatch = useDispatch();

  return (
    <div className="relative p-4 md:p-8">
      <div className={styles.nav_bar}>
        <img
          src={Logo}
          alt="logo"
          className="w-16 h-16 md:w-24 md:h-24 rounded-lg object-cover"
        />
        <div className={styles.btn_wrapper}>
          <button
            type="button"
            onClick={() => dispatch(changeUA())}
            className={lang === "ua" ? styles.active_btn : null}
          >
            UA
          </button>
          <button
            type="button"
            onClick={() => dispatch(changeEN())}
            className={lang === "en" ? styles.active_btn : null}
          >
            EN
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
