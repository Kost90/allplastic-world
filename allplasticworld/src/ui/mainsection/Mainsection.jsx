import React from "react";
import { useSelector } from "react-redux";
import Animation from "../animation/Animation";
import { motion } from "framer-motion";

function Mainsection() {
  const lang = useSelector((state) => state.languages);
  return (
    <div className="container">
      <motion.h1
        initial={{
          opacity: 0,
          x: -50,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.3,
          },
          once: true,
        }}
        className="md:max-w-screen-md max-w-80 leading-12"
      >
        {lang === "en"
          ? `Welcome to All plastic world`
          : `Ласкаво просимо до всього пластикового світу`}
      </motion.h1>
      <motion.p
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 0.5,
          },
          once: true,
        }}
        className="md:max-w-screen-md max-w-80 text-justify mb-7"
      >
        {lang === "en"
          ? "Join us on a transformative journey towards a greener future as we lead the charge in recycling plastic. Together, let is make a positive impact on our planet by turning plastic waste into valuable resources. Embrace a world where every bottle, bag, and container finds a new purpose, paving the way for a more eco-friendly tomorrow."
          : "Приєднуйтесь до нас у трансформаційній подорожі до зеленішого майбутнього, коли ми лідируємо витрати на переробку пластику. Давайте разом робити позитивний вплив на нашій планеті, перетворюючи пластикові відходи на цінні ресурси. Обійми світ, де кожна пляшка, пакет і контейнер знаходять нове призначення, прокладаючи шлях до більш екологічного майбутнього."}
      </motion.p>
      <Animation />
    </div>
  );
}

export default Mainsection;
