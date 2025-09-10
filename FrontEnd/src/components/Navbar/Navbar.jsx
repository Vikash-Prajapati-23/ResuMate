import React, { useEffect, useState } from "react";
import "./Navbar.css";
import BrandLogo from "../../assets/BrandName.png";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "@/store/slices/theme/themeSlice";
import { setLogIn, setLogOut } from "@/store/slices/loogedIn/loogedIn";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const baseUrl = import.meta.env.VITE_BASE_URL;

const Navbar = ({ setIsSignUp }) => {
  const isLoggedIn = useSelector((state) => state.loggedIn.value);
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  // This checks if the screen size is less that = 500px.
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // This function updates the isMobile state every time the window is resized, by re-checking window.innerWidth <= 500..
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };
    // Whenever the screen resizes, run the handleResize function.
    window.addEventListener("resize", handleResize);
    // Clean ups to avoid memory leaks or unwanted state updates.
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // This is for shadow effect.
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    const response = await fetch(`${baseUrl}/api/auth/logout`, {
      method: "GET",
      credentials: "include",
    });
    const data = await response.json();
    if (response.ok) {
      dispatch(setLogOut());
      toast.success(data.message);
    } else {
      dispatch(setLogIn());
      console.error("Error while loging out.");
    }
  };

  const handleToggel = () => {
    setIsOpen((open) => (open = !open));
  };

  const handleGetStarted = () => {
    if (!isLoggedIn) {
      setIsSignUp(true);
    } else {
      navigate("/Dashboard");
    }
  };

  const handleMessage = () => {
    toast("This feature will be available soon.!");
  };

  return (
    <nav
      className={`fixed top-0 z-50 w-full py-0 lg:px-20 md:px-10 lg:text-xl md:text-sm ${
        isScrolled
          ? "bg-blue-50 shadow-md transition duration-300 ease-in "
          : "bg-white"
      }`}
    >
      {isMobile ? (
        <div className="flex justify-between px-5">
          <div className="flex items-center gap-8 font-semibold">
            <Link
              onClick={() => setIsLoggedIn(false)}
              to="/"
              className=" nav-item"
            >
              <img
                src={BrandLogo}
                style={{
                  height: "20px",
                  filter: theme ? "invert(1)" : "invert(0)", // Invert colors in dark mode
                  transition: "filter 0.3s ease-in-out",
                }}
                alt="Logo"
              />
            </Link>
          </div>
          <div>
            <i
              onClick={handleToggel}
              className={`fa-solid text-2xl fa-${!isOpen ? "bars" : "xmark"}`}
            ></i>
          </div>
        </div>
      ) : (
        <div className="flex justify-between py-3 lg:text-xl md:text-sm">
          <div className="flex items-center gap-8 font-semibold">
            <Link to="/" className=" nav-item">
              <img
                src={BrandLogo}
                style={{
                  height: "20px",
                  filter: theme ? "invert(1)" : "invert(0)", // Invert colors in dark mode
                  transition: "filter 0.3s ease-in-out",
                }}
                alt="Logo"
              />
            </Link>
            <button onClick={handleGetStarted}>Get started</button>
            <Link
              to="/"
              onClick={handleMessage}
              className="nav-item border-b-2 border-transparent hover:border-blue-500 nav-item"
            >
              Resume Templates
            </Link>
          </div>

          <div className="flex gap-8 font-semibold">
            {/* <button
              className="moon-icon hidden border-b-2 border-transparent hover:border-blue-500 nav-item"
              onClick={() => dispatch(toggleTheme())}
            >
              <span className="material-symbols-outlined flex align-center">
                dark_mode
              </span>
            </button>
            <button
              className="sun-icon border-b-2 border-transparent hover:border-blue-500 nav-item"
              onClick={() => dispatch(toggleTheme())}
            >
              <span className="material-symbols-outlined flex align-center">
                light_mode
              </span>
            </button> */}
            {!isLoggedIn ? (
              <div className="flex gap-8">
                <button
                  onClick={() => setIsSignUp(true)}
                  className="nav-item border-b-2 border-transparent hover:border-blue-500 nav-item"
                >
                  Sign Up
                </button>
                {/* {isSignUp && <SignUp setIsSignUp={setIsSignUp} />} */}
              </div>
            ) : (
              <div className="flex gap-8">
                <Link
                  onClick={handleLogout}
                  to="/"
                  className="border-b-2 border-transparent nav-item"
                >
                  Logout
                </Link>

                <Link
                  to="/Dashboard"
                  className="border-b-2 border-transparent hover:border-blue-500 nav-item"
                >
                  Dashboard
                </Link>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mobile - Burger view */}
      {isOpen && (
        <div className=" ">
          <div
            onClick={() => setIsOpen(false)}
            className="flex flex-col gap-3 lg:text-xl md:text-sm text-black px-5 mt-4 font-semibold"
          >
            <Link
              to="/"
              className="nav-item border-b-2 border-transparent nav-item"
            >
              Resume Examples
            </Link>
            <Link
              to="/"
              onClick={handleMessage}
              className="nav-item border-b-2 border-transparent nav-item"
            >
              Resume Templates
            </Link>
            {/* <button
              className="moon-icon hidden border-b-2 border-transparent nav-item"
              onClick={() => dispatch(toggleTheme())}
            >
              <span className="material-symbols-outlined flex align-center">
                dark_mode
              </span>
            </button>
            <button
              className="sun-icon border-b-2 border-transparent nav-item"
              onClick={() => dispatch(toggleTheme())}
            >
              <span className="material-symbols-outlined flex align-center">
                light_mode
              </span>
            </button> */}
            {!isLoggedIn ? (
              <div className="flex gap-8">
                <button
                  onClick={() => setIsSignUp(true)}
                  className="nav-item border-b-2 border-transparent hover:border-blue-500 nav-item"
                >
                  Sign Up
                </button>
                {/* {isSignUp && <SignUp setIsSignUp={setIsSignUp} />} */}
              </div>
            ) : (
              <div className="flex gap-1 flex-col justify-end ">
                <Link
                  onClick={handleLogout}
                  to="/"
                  className="border-b-2 border-transparent nav-item"
                >
                  Logout
                </Link>
                <Link
                  to="/Dashboard"
                  className="border-b-2 border-transparent nav-item"
                >
                  Dashboard
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
