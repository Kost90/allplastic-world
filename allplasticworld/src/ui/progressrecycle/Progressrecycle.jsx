import React, { useEffect, useState, lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import Mockapi from "../../API/Mockapi";
import Loader from "../../components/loader/Loader";

const ProgressBar = lazy(() =>
  import("../../components/progressbar/Progressbar")
);

function Progressrecycle() {
  const lang = useSelector((state) => state.languages);
  const [current, setCurrent] = useState([]);
  const [mounth, setMounth] = useState([]);
  const [alltime, setAlltime] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    let controller;
    // setLoading(true);
    const fetchData = async () => {
      const controller = new AbortController();
      const signal = controller.signal;
      const resCurrent = await Mockapi.getCurrent({ signal });
      const resMounth = await Mockapi.getMonth({ signal });
      const resAlltime = await Mockapi.getAlltime({signal})
      setCurrent((prev) => (prev = resCurrent[0]));
      setMounth((prev) => (prev = resMounth[0]));
      setAlltime((prev) => (prev = resAlltime[0]));
      // setLoading(false);
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
      <Suspense fallback={<Loader />}>
        <h3 className="uppercase p-2 md:p-4">
          {lang === "en" ? "Current progress:" : "Поточний прогрес:"}
        </h3>
        <ProgressBar data={current} />
        <h3 className="uppercase p-2 md:p-4">
          {lang === "en"
            ? "Last month progress:"
            : "Прогрес за останній місяць:"}
        </h3>
        <ProgressBar data={mounth} />
        <h3 className="uppercase p-2 md:p-4">
          {lang === "en"
            ? "All time progress:"
            : "Прогрес за весь період:"}
        </h3>
        <ProgressBar data={alltime} />
      </Suspense>
    </div>
  );
}

export default Progressrecycle;
