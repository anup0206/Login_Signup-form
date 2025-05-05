import React from "react";
import { Link } from 'react-router-dom';
import image from "../assets/image.jpg";

const SignUpForm = () => {
  console.log("Image path:", image);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl w-full m-4">
        {/* Left Section: Background Image with Testimonial */}
        <div
          className="hidden md:flex w-1/2 p-10 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative z-10 flex flex-col h-full">
            <div className="text-3xl font-bold text-white">Nucleus</div>
            <div className="mt-auto text-sm">
              <div className="bg-black bg-opacity-60 p-6 rounded-lg">
                <p className="italic text-white">"Simply all the tools that my team and I need."</p>
                <p className="mt-3 text-gray-200">
                  Karen Yue
                  <br />
                  Director of Digital Marketing Technology
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Sign-Up Form */}
        <div className="w-full md:w-1/2 p-8 sm:p-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Create your account</h2>
          <p className="text-gray-500 mb-8">Join Nucleus UI and start designing with ease.</p>

          <form className="space-y-5">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Confirm password"
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white p-3 rounded-full hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            >
              Create account
            </button>

            <div className="flex items-center w-full gap-4 my-6">
              <hr className="flex-1 h-px bg-gray-200" />
              <div className="text-gray-500 font-medium">OR</div>
              <hr className="flex-1 h-px bg-gray-200" />
            </div>

            <button
              className="w-full bg-white border border-gray-300 p-3 rounded-full flex items-center justify-center gap-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
            >
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
              <span>Sign up with Google</span>
            </button>

            <p className="text-center text-sm text-gray-500 mt-6">
              Have an account?{' '}
              <Link to="/login" className="text-purple-600 hover:text-purple-800 font-medium">
                Log in here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;