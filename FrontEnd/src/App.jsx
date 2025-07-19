import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Dashboard from "./Dashboard";
import EditResume from "./Dashboard/resume/[resumeID]/edit";
import { Toaster } from "@/components/ui/sonner";
import ViewResume from "./ViewResume/[resumeViewID]/View";
import SignUp from "./components/SignUp/SignUp";
import { useState } from "react";

function App() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <>
      <div className="no-print">
        <Navbar setIsSignUp={setIsSignUp} />
        {isSignUp && <SignUp setIsSignUp={setIsSignUp} />}
      </div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/dashboard/resume/:resumeID/edit"
          element={<EditResume />}
        />
        <Route path="/ViewResume/:resumeViewID/view" element={<ViewResume />} />
      </Routes>
      <Toaster />

      <div className="no-print">
        <Footer />
      </div>
    </>
  );
}

export default App;
