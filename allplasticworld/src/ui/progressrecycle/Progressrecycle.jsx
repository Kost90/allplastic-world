import React, { useEffect, useState } from "react";
import Progressbar from "../../components/progressbar/Progressbar";
import { useSelector } from "react-redux";
import Mockapi from "../../API/Mockapi";

function Progressrecycle() {
  const lang = useSelector((state) => state.languages);
  const [current, setCurrent] = useState([]);
  const [mounth, setMounth] = useState([]);

  console.log('render parent from progress bar')

  // необходимо сделать красивый лоадер компонентом и добавить сюда. в виде suspense

  useEffect(() => {
    let controller;

    const fetchData = async () => {
      const controller = new AbortController();
      const signal = controller.signal;
      const resCurrent = await Mockapi.getCurrent({ signal });
      const resMounth = await Mockapi.getMonth({ signal });
      setCurrent((prev) => (prev = resCurrent[0]));
      setMounth((prev) => (prev = resMounth[0]));
    };
    fetchData();
    return () => {
      if (controller) {
        controller.abort();
      }
    };
  }, []);

  return (
    <div className="container">
      <h1 className="text-center pb-4 md:pb-8 uppercase">
        {lang === "en" ? "Live recycle progress" : "Живий прогрес переробки"}
      </h1>
      <div className="w-80 md:w-1/2 m-auto text-start">
        <h3 className="uppercase p-2 md:p-4">
          {lang === "en" ? "Current progress:" : "Поточний прогрес:"}
        </h3>
        <Progressbar data={current} />
        <h3 className="uppercase p-2 md:p-4">
          {lang === "en"
            ? "Last month progress:"
            : "Прогрес за останній місяць:"}
        </h3>
        <Progressbar data={mounth} />
        {/* <h3 className="uppercase p-2 md:p-4">
          {lang === "en" ? "All recycle progress:" : "Весь прогрес переробки:"}
        </h3>
        <Progressbar data={70} /> */}
      </div>
    </div>
  );
}

export default Progressrecycle;
