import React from "react";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <nav
      className="flex px-36 justify-between items-center w-full h-[20vh] z-[10]"
      style={{ paddingInline: 80 }}
    >
      <div className="brand-section flex items-center flex-row gap-2 h-full">
        <h1 className="text-white text-[2vw] bold font">Rajani</h1>
        <img src={Logo} alt="logo" className="w-24" />
        <h1 className="text-white text-[2vw] bold font">Properties</h1>
      </div>
      <div className="menu-section flex flex-row items-center  gap-6 h-full">
        <div
          className="bg-[#fff] cursor-pointer"
          style={{ paddingBlock: 10, paddingInline: 20, borderRadius: "500px" }}
        >
          <h1 className="text-black text-[1vw] bold font">Menu</h1>
        </div>
        <div className="flex flex-row gap-8">
          <i class="fa-brands fa-facebook-f text-white text-[30px]"></i>
          <i class="fa-brands fa-instagram text-white text-[30px]"></i>
          <i class="fa-brands fa-linkedin-in text-white text-[30px]"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
