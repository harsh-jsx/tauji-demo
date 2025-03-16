import React from "react";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full px-16 h-[10vh] z-[10]">
      <div className="brand-section flex flex-row gap-2">
        <h1 className="text-white bold font">Rajani</h1>
        <img src={Logo} alt="logo" className="w-24" />
        <h1>Properties</h1>
      </div>
      <div className="menu-section flex flex-row gap-3">
        <div className="p-5 bg-[#EB3535]">Menu</div>
        <div className="flex flex-row gap-3">
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-linkedin-in"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
