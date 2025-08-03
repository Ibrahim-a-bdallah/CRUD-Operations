import React, { useState } from "react";
function Form() {
  const [handleClose,setHandelClose] = useState(true);
  return (   
    <form className={`${handleClose? "":"hidden"}  fixed inset-0 bg-white bg-opacity-40 flex items-center justify-center z-50 px-4`}>
      <div className="text-white w-full max-w-3xl rounded-lg flex flex-col sm:flex-row">
        {/* Left Section */}
        <div className="w-full bg-blue-950 sm:w-1/3 p-6 sm:p-8 flex flex-col justify-between">
          <h2 className="text-2xl font-light mb-6 sm:mb-10">Add a new Item</h2>

          <div className="mt-auto space-y-4">
            <button className="w-full cursor-pointer border border-fuchsia-600 text-white-600 py-2 rounded hover:bg-fuchsia-100 hover:text-pink-800 transition"
              onClick={(e) => {
    e.preventDefault();
    setHandelClose(false);
  }}            
            >

              Cancel
            </button>
            <button className="w-full bg-fuchsia-700 text-white py-2 rounded hover:bg-fuchsia-800 transition cursor-pointer">
              Add
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full bg-blue-900 sm:w-1/2 p-6 sm:p-8 relative space-y-6">
          {/* Close Icon */}
          <button className="absolute text-2xl top-4 right-4 text-red-600 font-bold cursor-pointer  sm:top-4 sm:right-6" onClick={(e)=>{e.preventDefault(); setHandelClose(false) }} >&times;</button>

          {/* Area Dropdown */}
          <div>
            <label className="block text-sm mb-1">Area</label>
            <select className="w-full bg-transparent border border-white p-2 rounded text-white">
              <option>Area</option>
            </select>
          </div>

          {/* Date Picker */}
          <div>
            <label className="block text-sm mb-1">Number of Units</label>
            <input
              type=""
              className="w-full bg-transparent border border-white p-2 rounded text-white"
              placeholder="Date Needed"
            />
          </div>

          {/* Material Code */}
          <div>
            <label className="block text-sm mb-1">Material Code</label>
            <select className="w-full bg-transparent border border-white px-3 py-2 rounded text-white">
              <option>Material Code</option>
            </select>
          </div>          
          <div>
            <label className="block text-sm mb-1">Number of Units</label>
            <input
              
              className="w-full bg-transparent border border-white p-2 rounded text-white text-right text-2xl"
              defaultValue={0}
            />
          </div>
        </div>
      </div>
    </form>
  );
}

export default Form;