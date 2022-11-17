import { format } from "date-fns";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "./../../../contexts/AuthProvider";

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
  const { name, slots } = treatment;
  const { user } = useContext(AuthContext);

  const handleBooking = event => {
    event.preventDefault();

    const form = event.target;
    const date = form.selectedDate.value;
    const slot = form.slot.value;
    const name = form.name.value;
    const phoneNumber = form.phoneNumber.value;
    const email = form.email.value;

    const bookingObj = {
      appointmentDate: date,
      treatment: treatment.name,
      patient: name,
      slot,
      phoneNumber,
      email,
    };

    // create a new booking api call
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingObj),
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          setTreatment(null);
          toast.success("booking successful");
          refetch();
        }
      })
      .catch(error => console.error(error));
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>

          {/* body */}
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              type="text"
              name="selectedDate"
              placeholder="Type here"
              className="input input-bordered w-full"
              value={format(selectedDate, "PP")}
              disabled
            />
            {/* selecte options */}
            <select name="slot" className="select select-bordered w-full">
              {slots.map((slot, index) => (
                <option value={slot} key={index}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="input input-bordered w-full"
              defaultValue={user?.displayName}
              disabled
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full"
              defaultValue={user?.email}
              disabled
            />
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              className="input input-bordered w-full"
            />
            <br />
            {/* submit button */}
            <input
              className="uppercase btn btn-accent"
              type="submit"
              value="submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
