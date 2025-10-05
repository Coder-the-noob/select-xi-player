import React from "react";
import bannerShadow from "../../assets/bg-shadow.png"; 
import bannerImg from "../../assets/banner-main.png"; 

const Banner = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 my-8">
      <div className="relative rounded-2xl overflow-hidden">
        <img
          src={bannerShadow}
          alt="Background"
          className="w-full h-[400px] object-cover rounded-2xl bg-[#1E1E1E]"
        />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <img
            src={bannerImg}
            alt="Cricket Logo"
            className="w-28 md:w-36 mb-4 drop-shadow-lg"
          />
          <h1 className="text-2xl md:text-4xl font-bold mb-2">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="text-gray-300 mb-6 text-sm md:text-base">
            Beyond Boundaries Beyond Limits
          </p>
          <div className="border-1 border-amber-100 p-3 rounded-2xl">
            <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-pink-300 to-yellow-300 text-black font-semibold shadow-lg hover:scale-105 transform transition duration-300">
            Claim Free Credit
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
