import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../Shared/Spinner/Spinner";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const { data: specialty, isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      return fetch("http://localhost:5000/appointmentOption").then(res =>
        res.json()
      );
    },
  });

  const imageHostKey = process.env.REACT_APP_imageHostKey;

  const handleAddDoctor = data => {
    const image = data.img[0];
    const formData = new FormData();

    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

    // save image to image hosting
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then(res => res.json())
      .then(imgData => {
        if (imgData.success) {
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            image: imgData.data.url,
          };

          // save doctor information to database
          fetch("http://localhost:5000/doctors", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then(res => res.json())
            .then(doctorData => {
              if (doctorData.acknowledged) {
                toast.success(`Doctor ${data.name} added successfully`);
                navigate("/dashboard/managedoctors");
              }
            });
        }
      })
      .catch(error => console.error("image upload: ", error));

    // resetField("name");
    // resetField("email");
  };

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-7 ml-4 lg:ml-0">
        Add a New Doctor
      </h2>
      <form
        onSubmit={handleSubmit(handleAddDoctor)}
        className="w-11/12 mx-auto lg:mx-0 lg:w-[520px] bg-white p-12 rounded-md"
      >
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            {...register("name", { required: "name field can not be blank" })}
            type="text"
            className="input input-bordered w-full bg-white"
            placeholder="Enter Your Name"
          />
          {errors.name && (
            <label className="label">
              <span className="text-red-600">{errors.name?.message}</span>
            </label>
          )}
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            {...register("email", { required: "must enter a valid email" })}
            type="email"
            className="input input-bordered w-full bg-white"
            placeholder="Enter Your Email"
          />
          {errors.email && (
            <label className="label">
              <span className="text-red-600">{errors.email?.message}</span>
            </label>
          )}
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Specialty</span>
          </label>
          <select
            {...register("specialty")}
            className="select select-bordered w-full bg-white"
          >
            {specialty?.map(option => (
              <option key={option._id}>{option.name}</option>
            ))}
          </select>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input
            {...register("img", { required: "Image required" })}
            type="file"
            className="file-input file-input-bordered file-input-primary w-full bg-white"
          />
          {errors.img && (
            <label className="label">
              <span className="text-red-600">{errors.img?.message}</span>
            </label>
          )}
        </div>
        <input
          type="submit"
          value="add"
          className="btn btn-accent w-full mt-8"
        />
      </form>
    </div>
  );
};

export default AddDoctor;
