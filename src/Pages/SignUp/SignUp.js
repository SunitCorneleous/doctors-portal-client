import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const signupHandler = data => {
    console.log(data);
  };

  return (
    <div className="min-h-[90vh] md:min-h-[100vh] flex justify-center items-center">
      <div className="w-11/12 md:w-[370px] md:min-h-[480px] p-5 shadow-md rounded-lg ">
        <h3 className="text-center text-xl font-normal">Sign Up</h3>
        <form onSubmit={handleSubmit(signupHandler)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("name", { required: "name field can not be blank" })}
              type="text"
              className="input input-bordered w-full"
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
              className="input input-bordered w-full"
            />
            {errors.email && (
              <label className="label">
                <span className="text-red-600">{errors.email?.message}</span>
              </label>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", {
                required: "must enter password",
                minLength: {
                  value: 6,
                  message: "password must be at least 6 characters",
                },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message: "password must be strong",
                },
              })}
              type="password"
              className="input input-bordered w-full"
            />
            {errors.password && (
              <label className="label">
                <span className="text-red-600">{errors.password?.message}</span>
              </label>
            )}
          </div>

          <input
            type="submit"
            value="sign up"
            className="btn btn-accent w-full mt-8"
          />
        </form>
        <p className="mt-3 text-center">
          Already have and account?{" "}
          <Link to="/login" className="text-secondary hover:underline">
            Login
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-accent btn-outline w-full mt-4">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default SignUp;
