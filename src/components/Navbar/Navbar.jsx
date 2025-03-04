import React from "react";
import BrandLogo from "../../assets/BrandName.png";

const Navbar = ({ toggleTheme }) => {
  return (
    <nav className="flex bg-transparent text-blue-700 text-xl font-bold items-center justify-around py-3">
      <div>
        <img src={BrandLogo} style={{ height: "30px" }} alt="Logo" />
      </div>

      <div className="flex items-center gap-8">
        <a href="#" className=" border-b-2 border-transparent hover:border-blue-500 nav-item">
          Home
        </a>
        <a href="#" className="nav-item  border-b-2 border-transparent hover:border-blue-500 nav-item">
          Resume Examples
        </a>
        <a href="#" className="nav-item  border-b-2 border-transparent hover:border-blue-500 nav-item">
          Resume Templates
        </a>
      </div>

      <div className="flex gap-8">
        <button className="nav-item dark hidden border-b-2 border-transparent hover:border-blue-500 nav-item" onClick={toggleTheme}>
          <span className="material-symbols-outlined flex align-center">
            dark_mode
          </span>
        </button>
        <button className="nav-item light border-b-2 border-transparent hover:border-blue-500 nav-item" onClick={toggleTheme}>
          <span className="material-symbols-outlined flex align-center">
            light_mode
          </span>
        </button>
        <a href="#">
          <button className="nav-item border-b-2 border-transparent hover:border-blue-500 nav-item">Sign Up</button>
        </a>
        <a href="#">
          <button className="nav-item border-b-2 border-transparent hover:border-blue-500 nav-item">Login</button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
