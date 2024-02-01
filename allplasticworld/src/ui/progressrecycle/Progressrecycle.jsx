import React from "react";
import Progressbar from "../../components/progressbar/Progressbar";
import { useSelector } from "react-redux";

function Progressrecycle() {
  const lang = useSelector((state) => state.languages);
  return (
    <div className="container">
      <h1 className="text-center pb-4 md:pb-8 uppercase">
        {lang === "en" ? "Live recycle progress" : "Живий прогрес переробки"}
      </h1>
      <div className="w-80 md:w-1/2 m-auto text-start">
        <h3 className="uppercase p-2 md:p-4">
          {lang === "en" ? "Current progress:" : "Поточний прогрес:"}
        </h3>
        <Progressbar data={35} />
        <h3 className="uppercase p-2 md:p-4">
          {lang === "en"
            ? "Last month progress:"
            : "Прогрес за останній місяць:"}
        </h3>
        <Progressbar data={50} />
        <h3 className="uppercase p-2 md:p-4">
          {lang === "en" ? "All recycle progress:" : "Весь прогрес переробки:"}
        </h3>
        <Progressbar data={75} />
      </div>
    </div>
  );
}

export default Progressrecycle;
