import React, { useState } from "react";

function Form() {
<<<<<<< HEAD
  const [handleClose, setHandleClose] = useState(true);

  // Form fields state
  const [area, setArea] = useState("");
  const [dateNeeded, setDateNeeded] = useState("");
  const [materialCode, setMaterialCode] = useState("");
  const [units, setUnits] = useState(0);

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      area,
      dateNeeded,
      materialCode,
      units
    };
    console.log("Form Submitted:", formData);

    // Example: reset after submit
    setArea("");
    setDateNeeded("");
    setMaterialCode("");
    setUnits(0);
    setHandleClose(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`${handleClose ? "" : "hidden"} fixed inset-0 bg-white bg-opacity-40 flex items-center justify-center z-50 px-4`}
=======
  const [handleClose, setHandelClose] = useState(true);
  return (    
      <form
      className={`${
        handleClose ? "" : "hidden"
      }  fixed inset-0 bg-black/50 backdrop-blur-md  flex items-center justify-center z-50 px-4`}
>>>>>>> e9172ab21994c07df8d593cfe207c7dcec78dff7
    >
      <div className="text-white w-full max-w-3xl rounded-lg flex flex-col sm:flex-row">
        {/* Left Section */}
        <div className="w-full bg-blue-950 sm:w-1/3 p-6 sm:p-8 flex flex-col justify-between">
          <h2 className="text-2xl font-light mb-6 sm:mb-10">Add a new Item</h2>

          <div className="mt-auto space-y-4">
            <button
<<<<<<< HEAD
              type="button"
              className="w-full cursor-pointer border border-fuchsia-600 text-white py-2 rounded hover:bg-fuchsia-100 hover:text-pink-800 transition"
              
=======
              className="w-full transition-colors  duration-700 cursor-pointer border border-fuchsia-600 text-white-600 py-2 rounded hover:bg-fuchsia-100 hover:text-pink-800 transition"
              onClick={(e) => {
                e.preventDefault();
                setHandelClose(false);
              }}
>>>>>>> e9172ab21994c07df8d593cfe207c7dcec78dff7
            >
              Cancel
            </button>
<<<<<<< HEAD
            <button
              type="submit"
              className="w-full bg-fuchsia-700 text-white py-2 rounded hover:bg-fuchsia-800 transition cursor-pointer"
            >
=======
            <button className="w-full transition-colors duration-400 bg-fuchsia-700 text-white py-2 rounded hover:bg-fuchsia-800 transition cursor-pointer">
>>>>>>> e9172ab21994c07df8d593cfe207c7dcec78dff7
              Add
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full bg-blue-900 sm:w-1/2 p-6 sm:p-8 relative space-y-6">
          {/* Close Icon */}
          <button
<<<<<<< HEAD
            type="button"
            className="absolute text-2xl top-4 right-4 text-red-600 font-bold cursor-pointer sm:top-4 sm:right-6"
            onClick={() => setHandleClose(false)}
=======
            className="absolute text-2xl top-4 right-4 text-red-600 font-bold cursor-pointer  sm:top-4 sm:right-6"
            onClick={(e) => {
              e.preventDefault();
              setHandelClose(false);
            }}
>>>>>>> e9172ab21994c07df8d593cfe207c7dcec78dff7
          >
            &times;
          </button>

          {/* Area Dropdown */}
          <div>
            <label className="block text-sm mb-1">Area</label>
            <select
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="w-full bg-transparent border border-white p-2 rounded text-white"
            >
              <option value="">Select Area</option>
              <option value="Area 1">Area 1</option>
              <option value="Area 2">Area 2</option>
            </select>
          </div>

          {/* Date Picker */}
          <div>
            <label className="block text-sm mb-1">Date Needed</label>
            <input
              type="date"
              value={dateNeeded}
              onChange={(e) => setDateNeeded(e.target.value)}
              className="w-full bg-transparent border border-white p-2 rounded text-white"
            />
          </div>

          {/* Material Code */}
          <div>
            <label className="block text-sm mb-1">Material Code</label>
            <select
              value={materialCode}
              onChange={(e) => setMaterialCode(e.target.value)}
              className="w-full bg-transparent border border-white px-3 py-2 rounded text-white"
            >
              <option value="">Select Code</option>
              <option value="M001">M001</option>
              <option value="M002">M002</option>
            </select>
          </div>
<<<<<<< HEAD

          {/* Number of Units */}
=======
>>>>>>> e9172ab21994c07df8d593cfe207c7dcec78dff7
          <div>
            <label className="block text-sm mb-1">Number of Units</label>
            <input
              type="number"
              value={units}
              onChange={(e) => setUnits(Number(e.target.value))}
              className="w-full bg-transparent border border-white p-2 rounded text-white text-right text-2xl"
              min={0}
            />
          </div>
        </div>
      </div>
    </form>
  );
}

export default Form;
