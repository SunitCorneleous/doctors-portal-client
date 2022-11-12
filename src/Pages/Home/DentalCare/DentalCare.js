import React from "react";
import treatment from "../../../assets/images/treatment.png";

const DentalCare = () => {
  return (
    <div className="md:w-4/5 mx-auto mb-28">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={treatment}
            alt="treatment"
            className="md:w-2/6 rounded-md"
          />
          <div className="md:ml-32">
            <h1 className="text-5xl font-bold">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DentalCare;
