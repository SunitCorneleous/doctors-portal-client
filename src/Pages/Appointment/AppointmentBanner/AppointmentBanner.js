import React from "react";
import HeroImage from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentBanner = ({ selected, setSelected }) => {
  return (
    <section className="hero md:h-[70vh] mb-8">
      <div className="hero-content md:w-8/12 justify-between flex-col lg:flex-row-reverse">
        <img
          src={HeroImage}
          className="w-full md:max-w-lg rounded-lg "
          alt="banner"
        />
        <div className="shadow-lg rounded-xl bg-white">
          <DayPicker mode="single" selected={selected} onSelect={setSelected} />
        </div>
      </div>
    </section>
  );
};

export default AppointmentBanner;
