import "./App.css";
import Header from "./components/header/Header";
import Blurblock from "./components/blurblock/Blurblock";
import Mainsection from "./ui/mainsection/Mainsection";
import About from "./ui/about/About";
import Howitworks from "./ui/howitworks/Howitworks";

function App() {
  return (
    <>
      <section className="relative pb-10 md:pb-20">
        <Header />
        <Blurblock
          top={"-20%"}
          left={"-20%"}
          rotate={"6.584deg"}
        />
      </section>
      <section className="relative pb-10 md:pb-20">
        <Mainsection />
        <Blurblock
          top={"-30%"}
          right={"-30%"}
          rotate={"174deg"}
        />
      </section>
      <section className="relative pb-10 md:pb-20">
        <About />
      </section>
      <section className="relative pb-10 md:pb-20">
        <Howitworks/>
        <Blurblock
          top={"90%"}
          right={"60%"}
          rotate={"52deg"}
        />
      </section>
    </>
  );
}

export default App;
