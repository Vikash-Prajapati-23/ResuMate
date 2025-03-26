import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Dashboard from "./Dashboard";
import EditResume from "./Dashboard/resume/[resumeID]/edit";
import { Toaster } from "@/components/ui/sonner"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/dashboard/resume/:resumeID/edit"
          element={<EditResume />}
        />
      </Routes>
      <Toaster />
      <Footer />
    </>
  );
}

export default App;
