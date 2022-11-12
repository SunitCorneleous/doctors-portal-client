import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section
      className="mx-auto mb-28 mt-52 px-10 pt-10 pb-10 md:pb-0"
      style={{ backgroundImage: `url(${appointment})` }}
    >
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row md:pb-0">
          <img
            src={doctor}
            alt="treatment"
            className="w-2/4 -mt-64 hidden md:block"
          />
          <div className="md:ml-5 text-white py-6">
            <p className="text-xl font-bold text-secondary">Appointment</p>
            <h1 className="text-4xl font-semibold  mt-5">
              Make an appointment Today
            </h1>
            <p className="py-6 font-normal text-base">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <PrimaryButton>Appointment</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
