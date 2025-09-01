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
import { useEffect, useState } from "react";
import { setLogIn, setLogOut } from "./store/slices/loogedIn/loogedIn";
import { useDispatch } from "react-redux";

const baseUrl = import.meta.env.VITE_BASE_URL;

function App() {
  const [isSignUp, setIsSignUp] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`${baseUrl}/api/auth/me`, {
      credentials: "include", // include cookie (JWT token)
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.user) {
          dispatch(setLogIn()); // mark user as logged in
        } else {
          dispatch(setLogOut()); // mark user as logged out
        }
      })
      .catch((err) => {
        console.error("Auth check failed:", err);
        dispatch(setLogOut());
      });
  }, [dispatch]);

  // useEffect(() => {
  //   fetch()
  // })

  return (
    <>
      <div className="no-print">
        <Navbar setIsSignUp={setIsSignUp} />
        {isSignUp && <SignUp baseUrl={baseUrl} setIsSignUp={setIsSignUp} />}
      </div>
      <Routes>
        <Route path="/" element={<Main setIsSignUp={setIsSignUp} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/dashboard/resume/:resumeId/edit"
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
