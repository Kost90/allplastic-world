import React, { useEffect, useState } from "react";
import Mockapi from "../../API/Mockapi";

function UpdateForm() {
  const [current, setCurrent] = useState([]);
  const [mounth, setMounth] = useState([]);

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

  const handelSubmit = (e) => {
    e.preventDefault();
    let data = {};
    const formdata = new FormData(e.target);
    formdata.forEach((value, key) => (data[key] = value));
    data = {
      id: 1,
      ...data,
    };
    const toneCurrent = Number(data.tone) + Number(current.tone);
    data.tone = `${toneCurrent}`;
    const controller = new AbortController();
    const signal = controller.signal;
    Mockapi.updateCurrent({
      signal: signal,
      id: data.id,
      body: data,
    });
    const toneMounth = Number(data.tone) + Number(mounth.tone);
    const monthdata = {
      id:1,
      tone: `${toneMounth}`,
    };
    Mockapi.updateMonth({
      signal: signal,
      id: monthdata.id,
      body: monthdata,
    });
    e.target.reset();
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handelSubmit}
        className="flex flex-col w-80 items-center justify-center gap-2 m-auto"
      >
        <label htmlFor="input" className="text-white">
          Добавить тоннаж:
        </label>
        <input type="text" name="tone" />
        <button
          type="submit"
          className="flex justify-center items-center p-2 bg-sky-500 text-white rounded-sm"
        >
          send
        </button>
      </form>
    </div>
  );
}

export default UpdateForm;
