import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Carousel from "./components/Carousel/Carousel";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    const sun = document.querySelector(".light");
    const moon = document.querySelector(".dark");
    if (theme === true) {
      setTheme(false);
      sun.classList.add("hidden");
      moon.classList.remove("hidden");
      document.body.style.backgroundColor = "#121212";
      document.body.style.color = "#fff";
    } else {
      setTheme(true);
      sun.classList.remove("hidden");
      moon.classList.add("hidden");
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#121212";
    }

  };

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Main theme={theme} toggleTheme={toggleTheme} /> 
      <Carousel theme={theme} toggleTheme={toggleTheme} />
      <Footer theme={theme} toggleTheme={toggleTheme} />
    </>
  );
}

export default App;
