import React from "react";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../Shared/Spinner/Spinner";

const ManageDoctors = () => {
  const { data: doctors, isLoading } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/doctors", {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <div>
      <h1 className="mb-2 text-2xl font-bold">
        Manage Doctors: {doctors.length}
      </h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Specialty</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {doctors.map(doctor => {
              return (
                <tr key={doctor._id}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={doctor.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{doctor.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{doctor.specialty}</td>
                  <td>{doctor.email}</td>
                  <th>
                    <button className="btn btn-error btn-xs">delete</button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDoctors;
