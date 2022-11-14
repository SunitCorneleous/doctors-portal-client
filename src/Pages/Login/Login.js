import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-[80vh] flex justify-center items-center">
      <div className="w-11/12 md:w-[370px] md:h-[480px] p-5 shadow-lg rounded-lg">
        <h3 className="text-center text-xl font-normal">Login</h3>
        <form>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" className="input input-bordered w-full" />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" className="input input-bordered w-full" />
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
