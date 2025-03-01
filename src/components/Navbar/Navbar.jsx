import React from "react";
// import Logo from "../../assets/Logo.png";
import BrandLogo from "../../assets/BrandName.png";

const Navbar = () => {
  return (
    <nav className="flex bg-red-700 text-white font-bold items-center justify-around py-3 ">
      <div className="">
        <img src={BrandLogo} style={{ height: "30px" }} alt="Logo" />
      </div>

      <div className="flex items-center gap-8">
        <div className="nav-item cursor-pointer">Home</div>

        <div className="nav-item cursor-pointer gap8">Resume Examples</div>

        <div className="nav-item cursor-pointer">Resume Templates</div>
      </div>

      <div className="flex gap-8">
        <button className="nav-item cursor-pointer">
          <span class="material-symbols-outlined flex align-center">light_mode</span>
        </button>
        <button className="nav-item cursor-pointer hidden">
          <span class="material-symbols-outlined flex align-center">dark_mode</span>
        </button>
        <button className="nav-item cursor-pointer">Sign Up</button>
        <button className="nav-item cursor-pointer">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
