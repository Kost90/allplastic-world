import React from "react";
import Header from "../components/header/Header";
import Blurblock from "../components/blurblock/Blurblock";
import Mainsection from "../ui/mainsection/Mainsection";
import About from "../ui/about/About";
import Howitworks from "../ui/howitworks/Howitworks";
import Progressrecycle from "../ui/progressrecycle/Progressrecycle";
import { Link, useLocation } from "react-router-dom";
import UpdateForm from "../components/form/UpdateForm";

function RootLayout() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/update" ? (
        <UpdateForm />
      ) : (
        <>
          <section className="relative pb-10 md:pb-20">
            <Link to={"update"}>update</Link>
            <Header />
            <Blurblock top={"-20%"} left={"-20%"} rotate={"6.584deg"} />
          </section>
          <section className="relative pb-10 md:pb-20">
            <Mainsection />
            <Blurblock top={"-30%"} right={"-30%"} rotate={"174deg"} />
          </section>
          <section className="relative pb-10 md:pb-20">
            <About />
          </section>
          <section className="relative pb-10 md:pb-20">
            <Howitworks />
            <Blurblock top={"90%"} right={"60%"} rotate={"52deg"} />
          </section>
          <section className="pb-10 md:pb-20">
            <Progressrecycle />
          </section>
        </>
      )}
    </>
  );
}

export default RootLayout;
