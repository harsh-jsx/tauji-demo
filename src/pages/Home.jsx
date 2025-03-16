import React from "react";
import Navbar from "../Components/Navbar";
import BGVIDEO from "../assets/BGVIDEO.mp4";
import LoaderAnimation from "../Components/Loader";
import Hero from "../Components/Hero";

const Home = () => {
  return (
    <>
      <div className="w-full min-h-[100vh]">
        <Navbar />
        <Hero />
        <video
          src={BGVIDEO}
          className="absolute top-0 left-0 opacity-[.6] h-[100vh] w-full object-cover z-[-1]"
          loop
          autoPlay
          muted
        ></video>
      </div>
    </>
  );
};

export default Home;
