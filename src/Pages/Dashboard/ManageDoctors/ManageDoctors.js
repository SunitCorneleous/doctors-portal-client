import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../Shared/Spinner/Spinner";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";
import { toast } from "react-hot-toast";

const ManageDoctors = () => {
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery({
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
  const [deletingDoctor, setDeletingDoctor] = useState(null);

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  const handleDelete = doctor => {
    fetch(`http://localhost:5000/doctors/${doctor._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          toast.success("successfully deleted");
          refetch();
        }
      })
      .catch(error => console.error(error));

    setDeletingDoctor(null);
  };

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
              <th>Action</th>
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
                    <label
                      htmlFor="confirmation-modal"
                      className="btn btn-error btn-xs"
                      onClick={() => setDeletingDoctor(doctor)}
                    >
                      delete
                    </label>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {deletingDoctor && (
        <ConfirmationModal
          title={`Are you sure you want to delete?`}
          message={`After deleting ${deletingDoctor.name}. It can not be undone.`}
          setDeletingDoctor={setDeletingDoctor}
          successAction={handleDelete}
          modalData={deletingDoctor}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default ManageDoctors;
