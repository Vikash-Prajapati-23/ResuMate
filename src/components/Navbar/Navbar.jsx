import React from "react";
import BrandLogo from "../../assets/BrandName.png";

const Navbar = ({ toggleTheme }) => {
  return (
    <nav className="flex bg-transparent text-blue-700 text-xl font-bold items-center justify-around py-3">
      <div>
        <img src={BrandLogo} style={{ height: "30px" }} alt="Logo" />
      </div>

      <div className="flex items-center gap-8">
        <a href="#" className="nav-item ">
          Home
        </a>
        <a href="#" className="nav-item ">
          Resume Examples
        </a>
        <a href="#" className="nav-item ">
          Resume Templates
        </a>
      </div>

      <div className="flex gap-8">
        <button className="nav-item dark hidden" onClick={toggleTheme}>
          <span className="material-symbols-outlined flex align-center">
            dark_mode
          </span>
        </button>
        <button className="nav-item light" onClick={toggleTheme}>
          <span className="material-symbols-outlined flex align-center">
            light_mode
          </span>
        </button>
        <a href="#">
          <button className="nav-item">Sign Up</button>
        </a>
        <a href="#">
          <button className="nav-item">Login</button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
