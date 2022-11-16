import React, { useState } from "react";
import { format } from "date-fns";
import AppointmentOption from "./AppointmentOption";
import BookingModal from "../BookingModal/BookingModal";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../Shared/Spinner/Spinner";

const AvailableAppointments = ({ selected }) => {
  const [treatment, setTreatment] = useState(null);

  const { data: appointmentOptions, isLoading } = useQuery({
    queryKey: ["appointmentoptions"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/appointmentoptions");
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Spinner></Spinner>;
  }

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
          setTreatment={setTreatment}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointments;
