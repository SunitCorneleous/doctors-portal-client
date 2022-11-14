import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import AppointmentOption from "./AppointmentOption";
import BookingModal from "../BookingModal/BookingModal";

const AvailableAppointments = ({ selected }) => {
  const [appointmentOptions, setAppointmentOptions] = useState();
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch("appointmentOptions.json")
      .then(res => res.json())
      .then(data => setAppointmentOptions(data));
  }, []);

  return (
    <div className="my-11 ">
      <h3 className="text-secondary text-center font-normal text-lg">
        Available Appointments on {format(selected, "PP")}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-9">
        {appointmentOptions?.map(option => (
          <AppointmentOption
            key={option._id}
            option={option}
            setTreatment={setTreatment}
          ></AppointmentOption>
        ))}
      </div>
      {treatment && (
        <BookingModal
          treatment={treatment}
          selectedDate={selected}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointments;
