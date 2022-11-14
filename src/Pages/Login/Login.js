import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleLogin = data => {
    console.log(data);
  };

  return (
    <div className="min-h-[80vh] flex justify-center items-center">
      <div className="w-11/12 md:w-[370px] md:min-h-[480px] p-5 shadow-lg rounded-lg border border-gray-400">
        <h3 className="text-center text-xl font-normal">Login</h3>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", { required: "Email Address is required" })}
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
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum password length 6 characters",
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
            <label className="label">
              <span className="label-text-alt">
                <Link className="hover:underline">Forgot password?</Link>
              </span>
            </label>
          </div>

          <input
            type="submit"
            value="login"
            className="btn btn-accent w-full"
          />
        </form>
        <p className="mt-3 text-center">
          New to doctor's portal?{" "}
          <Link className="text-secondary">Create new account</Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-accent btn-outline w-full mt-4">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;
