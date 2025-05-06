import React from "react";
import { Link } from 'react-router-dom';
import images from "../assets/images.jpg";

const LoginForm = () => {
  console.log("Image path:", images);

  // Array of input field configurations
  const inputFields = [
    { type: "email", placeholder: "Email" },
    { type: "password", placeholder: "Password" },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl w-full m-4">
        {/* Left Section: Background Image with Testimonial */}
        <div
          className="hidden md:flex w-1/2 p-10 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${images})` }}
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

        {/* Right Section: Login Form */}
        <div className="w-full md:w-1/2 p-8 sm:p-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">Welcome back to Nucleus</h2>
          <p className="text-gray-500 mb-8 text-center">Build your design system effortlessly with our powerful component library.</p>
          <form className="space-y-5">
            {/* Map over inputFields to render input elements */}
            {inputFields.map((field, index) => (
              <div key={index}>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                />
              </div>
            ))}
            <div className="flex items-center justify-between text-sm">
              <a href="#" className="text-purple-600 hover:text-purple-800 font-medium">Forgot password?</a>
              <div className="flex items-center">
                <label className="text-gray-600 mr-2">Remember sign in details</label>
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-purple-600 focus:ring-purple-500 rounded"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white p-3 rounded-full hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            >
              Log in
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
              <span>Continue with Google</span>
            </button>

            <p className="text-center text-sm text-gray-500 mt-6">
              Don’t have an account?{' '}
              <Link to="/signup" className="text-purple-600 hover:text-purple-800 font-medium">
                Sign up here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;