import React, { useContext } from "react";
import { AuthContext } from "./../../../contexts/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Spinner from "./../../Shared/Spinner/Spinner";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      try {
        const res = await fetch(url, {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <div className="overflow-x-auto mx-2 lg:mx-0">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Treatment</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={booking._id}>
              <th>{index + 1}</th>
              <td>{booking.patient}</td>
              <td>{booking.treatment}</td>
              <td>{booking.appointmentDate}</td>
              <td>{booking.slot}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
