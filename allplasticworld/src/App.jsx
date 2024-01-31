import "./App.css";
import Header from "./components/header/Header";
import Blurblock from "./components/blurblock/Blurblock";
import Mainsection from "./ui/mainsection/Mainsection";
import About from "./ui/about/About";

function App() {
  return (
    <>
      <section className="relative pb-10 md:pb-20">
        <Header />
        <Blurblock
          top={"-200px"}
          left={"-200px"}
          rotate={"6.584deg"}
          width={"650px"}
          height={"752px"}
        />
      </section>
      <section className="relative pb-10 md:pb-20">
        <Mainsection />
        <Blurblock
          top={"-300px"}
          right={"-300px"}
          rotate={"174deg"}
          width={"1100px"}
          height={"770px"}
        />
      </section>
      <section className="relative pb-10 md:pb-20">
        <About />
      </section>
    </>
  );
}

export default App;
