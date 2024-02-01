import React from "react";
import Cardscontainer from "../../containers/cardscontainer/Cardscontainer";
import Card from "../../components/card/Card";
import { cardsContentEn, textContentUA } from "./text";
import { useSelector } from "react-redux";

function Howitworks() {
  const lang = useSelector((state) => state.languages);

  return (
    <div className="container">
      <h1 className="text-center pb-4 md:pb-8">{lang === 'en'?'How our company works':'Як наша компанія працює'}</h1>
      <Cardscontainer>
        {lang === "en"
          ? cardsContentEn.map((el) => (
              <Card titel={el.titel} text={el.text} id={el.id} />
            ))
          : textContentUA.map((el) => (
              <Card titel={el.titel} text={el.text} id={el.id} />
            ))}
      </Cardscontainer>
    </div>
  );
}

export default Howitworks;
