import React, { useEffect, useState } from "react";
import "./Navbar.css";
import BrandLogo from "../../assets/BrandName.png";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../features/theme/themeSlice";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  // This checks if the screen size is less that = 500px.
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

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

  const handleToggel = () => {
    setIsOpen((open) => (open = !open));
  };

  return (
    <nav
      className={`sticky top-0 shadow-xl z-40  py-3 lg:px-20 md:px-10 lg:text-xl md:text-sm ${
        theme ? "bg-gray-900 text-indigo-600" : "bg-white text-blue-600"
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
            <Link
              to="/"
              className="nav-item border-b-2 border-transparent hover:border-blue-500 nav-item"
            >
              Resume Examples
            </Link>
            <Link
              to="/"
              className="nav-item border-b-2 border-transparent hover:border-blue-500 nav-item"
            >
              Resume Templates
            </Link>
          </div>

          <div className="flex gap-8 font-semibold">
            <button
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
            </button>
            {!isLoggedIn ? (
              <div className="flex gap-8">
                <Link to="/">
                  <button className="nav-item border-b-2 border-transparent hover:border-blue-500 nav-item">
                    Sign Up
                  </button>
                </Link>
                <Link to="/">
                  <button
                    onClick={() => setIsLoggedIn(true)}
                    className="nav-item border-b-2 border-transparent hover:border-blue-500 nav-item"
                  >
                    Login
                  </button>
                </Link>
              </div>
            ) : (
              <Link
                to="/Dashboard"
                className="border-b-2 border-transparent hover:border-blue-500 nav-item"
              >
                Dashboard
              </Link>
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
              className="nav-item border-b-2 border-transparent nav-item"
            >
              Resume Templates
            </Link>
            <button
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
            </button>
            {!isLoggedIn ? (
              <div className="flex gap-1 flex-col justify-end ">
                <Link to="/">
                  <button className="nav-item border-b-2 border-transparent nav-item">
                    Sign Up
                  </button>
                </Link>
                <Link to="/">
                  <button
                    onClick={() => setIsLoggedIn(true)}
                    className="nav-item border-b-2 border-transparent nav-item"
                  >
                    Login
                  </button>
                </Link>
              </div>
            ) : (
              <div className="flex gap-1 flex-col justify-end ">
                <Link
                  onClick={() => setIsLoggedIn(false)}
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
