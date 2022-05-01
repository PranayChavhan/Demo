import React from "react";
import { IoCallOutline } from "react-icons/io5";

const App = () => {
  return (
    <div>
      <div className=" min-h-fit overflow-hidden">
        <div className="relative">
          <img src="assets/img2.jpg" width="100%" alt="imageeee" />
          <img src="assets/img1.jpg" width="100%" alt="imageeee" />
          <div className=" absolute bottom-0 right-0">
            <img className="p-0 w-96" src="assets/img3.jpg" alt="call" />
          </div>

          <div className=" absolute bottom-[40%] left-[40%] bg-pink-200 rounded-3xl border-4 border-blue-800">
            <div className="flex flex-col items-center justify-between px-9 py-16  gap-5 ">
              <h1 className="text-2xl text-black font-semibold">LOGIN</h1>
              <div className="relative">
                <div className="text-pink-500 hidden sm:block relative border-b-2 border-b-pink-500">
                  <span className="left-3 top-3 absolute">
                    <IoCallOutline />
                  </span>
                  <input
                    className="h-[40px] w-[100%] rounded-md focus:outline-none static px-9 bg-transparent  text-pink-500 placeholder:text-pink-500"
                    placeholder="Phone Number"
                    type="text"
                  />
                  
                </div>
              </div>
              <button className="bg-white text-black px-24 rounded-md p-2 mt-2">Continue</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
