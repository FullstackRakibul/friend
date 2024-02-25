import React from "react";

const CustomButton = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="bg-gradient-to-br from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-sm text-white font-sans font-normal py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
    >
      {props.text}
    </button>
  );
};

export default CustomButton;
