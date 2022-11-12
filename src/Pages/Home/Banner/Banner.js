import React from "react";
import "./Banner.css";
import HeroImage from "../../../assets/images/chair.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const Banner = () => {
  return (
    <section className="hero h-screen">
      <div className="hero-content  flex-col lg:flex-row-reverse">
        <img
          src={HeroImage}
          className="w-full md:max-w-lg rounded-lg "
          alt="banner"
        />
        <div className="w-full md:max-w-xl">
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default Banner;
