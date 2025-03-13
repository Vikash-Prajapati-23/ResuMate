import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Carousel from "./components/Carousel/Carousel";
import Footer from "./components/Footer/Footer";
import Dashboard from "./Dashboard";
import EditResume from "./Dashboard/resume/[resumeID]/edit";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/resume/:resumeID/edit" element={<EditResume />} />
        <Route path="/" element={<Main />} />
        <Route path="/carousel" element={<Carousel />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
