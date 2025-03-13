import React from "react";
import "./Navbar.css";
// import index from "../../Dashboard/index.js"
import BrandLogo from "../../assets/BrandName.png";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../features/theme/themeSlice";
import { Link } from "react-router-dom";

const Navbar = () => {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();

  return (
    <nav
      className={`sticky top-0 flex text-xl font-bold shadow-xl z-40 items-center justify-around py-3 ${
        theme ? "bg-gray-900 text-indigo-600" : "bg-white text-blue-600"
      }`}
    >
      <div>
        <img
          src={BrandLogo}
          style={{
            height: "30px",
            filter: theme ? "invert(1)" : "invert(0)", // Invert colors in dark mode
            transition: "filter 0.3s ease-in-out",
          }}
          alt="Logo"
        />
      </div>

      <div className="flex items-center gap-8">
        <Link
          to="/"
          className="border-b-2 border-transparent hover:border-blue-500 nav-item"
        >
          Home
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

      <div className="flex gap-8">
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
        <Link to="/">
          <button className="nav-item border-b-2 border-transparent hover:border-blue-500 nav-item">
            Sign Up
          </button>
        </Link>
        <Link to="/">
          <button className="nav-item border-b-2 border-transparent hover:border-blue-500 nav-item">
            Login
          </button>
        </Link>
        <Link to="/Dashboard">
          Dashboard
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
