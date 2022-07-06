import React from "react";

const Nabvar = () => {
  return (
    <div className="flex items-center justify-between absolute p-4 z-[100] w-full">
      <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
        NETFLIX
      </h1>
      <div>
        <button className="text-white pr-4">Sign In</button>
        <button className="bg-red-600 text-white px-6 py-4 rounded cursor-pointer">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Nabvar;
