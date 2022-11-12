import React from "react";
import { Link } from "react-router-dom";
import footerBg from "../../../assets/images/footer.png";

const Footer = () => {
  return (
    <footer
      className="pt-2 h-[350px]"
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col md:flex-row items-left justify-between ">
        <div className="ml-8 md:ml-0 p-5">
          <h3 className="font-bold text-base mb-4 text-slate-500">SERVICES</h3>
          <Link to="/" className="block">
            Emergency Checkup
          </Link>
          <Link to="/" className="block">
            Monthly Checkup
          </Link>
          <Link to="/" className="block">
            Weekly Checkup
          </Link>
          <Link to="/" className="block">
            Deep Checkup
          </Link>
        </div>
        <div className="ml-8 md:ml-0 p-5">
          <h3 className="font-bold text-base mb-4 text-slate-500">
            ORAL HEALTH
          </h3>
          <Link to="/" className="block">
            Fluoride Treatment
          </Link>
          <Link to="/" className="block">
            Cavity Filling
          </Link>
          <Link to="/" className="block">
            Teath Whitening
          </Link>
        </div>
        <div className="ml-8 md:ml-0 p-5">
          <h3 className="font-bold text-base mb-4 text-slate-500">
            OUR ADDRESS
          </h3>
          <p>New York - 101010 Hudson</p>
        </div>
      </div>
      <div className="mt-14 p-6">
        <p className="text-center">Copyright 2022 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
