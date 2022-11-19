import React from "react";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../Shared/Spinner/Spinner";

const AllUsers = () => {
  const { data: users, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: () => {
      return fetch("http://localhost:5000/users").then(res => res.json());
    },
  });

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <div>
      <div className="overflow-x-auto mx-2 lg:mx-0">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
