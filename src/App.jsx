import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Carousel from "./components/Carousel/Carousel";
import Footer from "./components/Footer/Footer";
import Counter from "./components/Counter";

function App() {

  return (
    <>
      <Navbar />
      <Main /> 
      <Carousel />
      <Footer />
      <Counter />
    </>
  );
}

export default App;
