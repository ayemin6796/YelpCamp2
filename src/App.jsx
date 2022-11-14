import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* main container */}
      <div className="lg:flex min-h-screen">
        {/* sub left container */}
        <div className="lg:w-3/5 lg:px-60 sm:px-14 px-4 py-8 lg:flex flex-col justify-between ">
          {/* head left container */}
          <div className="flex justify-between">
            <img src="./img/Logo.svg" alt="" className="" />
            <p className="flex items-center lg:text-lg sm:text-xl text-base">
              <HiOutlineArrowNarrowLeft className="mr-2" /> Back to campgrounds
            </p>
          </div>
          {/* mid left container */}
          <div className="sm:mt-8">
            <h2 className="lg:text-4xl sm:text-4xl text-3xl font-bold lg:mb-8 sm:mb-8 my-6">
              Start exploring camps from all around the world.
            </h2>
            {/* input form 1 */}
            <div className="sm:mb-6">
              <label htmlFor="username" className=" text-lg sm:text-2xl">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="jhondoe_91"
                className="block bg-gray-300 px-6 py-4 min-w-full my-4 rounded sm:text-2xl sm:leading-10"
              />
            </div>
            {/* input form 2 */}
            <div className="sm:mb-6">
              <label htmlFor="password" className=" text-lg sm:text-2xl">
                Password
              </label>
              <input
                type="text"
                name="password"
                id="password"
                placeholder="Enter Your Password"
                className="block bg-gray-300 px-6 py-4 min-w-full my-4 rounded sm:text-2xl sm:leading-10 "
              />
            </div>
            <input
              type="submit"
              value="Login"
              className="min-w-full px-6 py-4 text-white bg-black rounded lg:text-xl my-3 sm:text-2xl text-lg sm:font-semibold"
            />
            <p className="text-lg mt-1 sm:mt-3 sm:text-2xl">
              Not a user yet?
              <a href="#" className=" underline text-sky-500 font-semibold">
                Create an account
              </a>
            </p>
          </div>
          <div className=""></div>
        </div>
        {/* sub right container */}
        <div className=" bg-red-200 lg:w-2/5 lg:px-56 sm:px-14 px-4 sm:h-full py-8 lg:flex flex-col justify-center lg:h-screen">
          {/* sub right paragraph */}
          <p className=" font-bold lg:text-2xl sm:text-3xl text-xl">
            " Yelpcamp has honestly saved me hours of research time, and the
            camp on here are definitely well picked and added "
          </p>
          {/* sub right info */}
          <div className="flex items-center sm:mt-6 my-5">
            <img
              src="./img/User Testimonial.svg"
              alt=""
              className="mr-3 sm:w-14"
            />
            <div className="">
              <p className=" font-bold sm:text-xl">May Andrews</p>
              <p className="sm:text-xl">Professional Biker</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
