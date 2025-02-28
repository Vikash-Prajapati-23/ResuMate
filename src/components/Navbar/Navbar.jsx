import React from "react";

const Navbar = () => {
  return (
    <nav className="flex bg-red-700 text-white font-bold items-center justify-between py-3">
      <div className="ms-5">
        <h3 className="cursor-pointer" >ResuMate</h3>
      </div>

      {/* <div className="flex items-center"> */}
        <div className="flex items-center gap-8">
          <div className="nav-item cursor-pointer">Home</div>
          <div className="nav-item cursor-pointer">
            Resume Examples
          </div>cursor-pointer
          <div className="nav-item cursor-pointer">
            Resume Templates
          </div>
        </div>
      {/* </div> */}

      {/* <div className="flex"> */}
        <div className="flex gap-8 ">
          <div className="nav-item cursor-pointer">Sign Up</div>
          <div className="nav-item me-5 cursor-pointer">Login</div>
        {/* </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
