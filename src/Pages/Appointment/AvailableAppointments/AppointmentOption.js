import React from "react";
import PrimaryButton from "./../../../components/PrimaryButton/PrimaryButton";

const AppointmentOption = ({ option }) => {
  const { name, slots } = option;

  return (
    <div className="card w-80 md:w-[26rem shadow-md mx-auto text-center bg-white">
      <div className="card-body text-center">
        <h2 className="text-center text-secondary text-xl font-semibold">
          {name}
        </h2>
        <p>{slots.length > 0 ? slots[0] : "No slots available"}</p>
        <p>
          {slots.length > 0
            ? `${slots.length} ${
                slots.length > 1 ? "spaces" : "space"
              } available`
            : "no space available"}
        </p>

        <div className="card-actions justify-center">
          <PrimaryButton>Book Appointment</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
