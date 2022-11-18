import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const SignUp = () => {
  const { createUser, updateUser, googleLogin } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm();
  const navigate = useNavigate();

  const signupHandler = data => {
    createUser(data.email, data.password)
      .then(result => {
        const user = result.user;
        console.log(user);

        const profile = {
          displayName: data.name,
        };

        // set username
        updateUser(profile)
          .then(() => {
            console.log("username added");
            navigate("/");
          })
          .catch(error => console.error(error));

        resetField("name");
        resetField("email");
        resetField("password");
      })
      .catch(error => console.error(error));
  };

  const googleLoginHandler = () => {
    googleLogin()
      .then(result => {
        const user = result.user;
        toast.success(`${user.displayName} logged in`);
        navigate("/");
      })
      .catch(error => {
        toast.error(error?.message);
      });
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
        <button
          onClick={googleLoginHandler}
          className="btn btn-accent btn-outline w-full mt-4"
        >
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default SignUp;
