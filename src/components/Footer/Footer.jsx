import React from "react";
import cricketLogo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-[#030617] text-white mt-30">
      <div className="max-w-[1200px] mx-auto px-4 -translate-y-24">
        <div className="bg-gradient-to-r from-[#dbeafe] to-[#fef3c7] p-[2px] rounded-2xl shadow-lg">
          <div className="bg-white rounded-2xl text-center py-10 px-6 md:px-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800">
              Subscribe to our Newsletter
            </h2>
            <p className="text-gray-500 mb-6">
              Get the latest updates and news right in your inbox!
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered rounded-full w-full md:w-96"
              />
              <button className="btn rounded-full bg-gradient-to-r from-pink-400 to-yellow-400 border-none text-black font-semibold hover:scale-105 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer sm:footer-horizontal bg-[#030617] text-gray-300 p-10 max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center space-y-3">
          <img src={cricketLogo} alt="Cricket Logo" className="w-16" />
          <h3 className="text-lg font-bold text-white">CRICKET</h3>
        </div>
        <nav>
          <h6 className="footer-title text-white">About Us</h6>
          <p className="max-w-[220px] text-gray-400">
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </nav>
        <nav>
          <h6 className="footer-title text-white">Quick Links</h6>
          <a className="link link-hover text-gray-400">Home</a>
          <a className="link link-hover text-gray-400">Services</a>
          <a className="link link-hover text-gray-400">About</a>
          <a className="link link-hover text-gray-400">Contact</a>
        </nav>
        <form>
          <h6 className="footer-title text-white">Subscribe</h6>
          <p className="text-gray-400 mb-3 max-w-[220px]">
            Subscribe to our newsletter for the latest updates.
          </p>
          <div className="join">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered join-item rounded-l-full"
            />
            <button className="btn join-item rounded-r-full bg-gradient-to-r from-pink-400 to-yellow-400 text-black font-semibold border-none hover:scale-105 transition">
              Subscribe
            </button>
          </div>
        </form>
      </footer>
      <div className="text-center py-4 text-sm text-gray-500 border-t border-gray-700">
        ©2025 Bangladesh Cricket Board. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
