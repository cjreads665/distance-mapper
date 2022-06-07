import React from "react";
import useStore from "./context/useStore";

const Button = () => {
  let { destinationCenter, fromCenter,start, setStart,end, setEnd } = useStore();
  let handleSubmit = (e) => {
    console.log(destinationCenter, fromCenter);
    setStart(fromCenter)
    setEnd(destinationCenter)
  };
  return (
    <button
      type="submit"
      className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      onClick={handleSubmit}
      disabled={!destinationCenter || !fromCenter ? true : false}
    >
      Submit
    </button>
  );
};

export default Button;
