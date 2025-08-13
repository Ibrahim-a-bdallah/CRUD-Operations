import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Form({ onClose = null, onAdd = null }) {
  const navigate = useNavigate();
  const [area, setArea] = useState("");
  const [dateNeeded, setDateNeeded] = useState("");
  const [materialCode, setMaterialCode] = useState("");
  const [units, setUnits] = useState("");


   const handleClose = (e) => {
    if (e && typeof e.preventDefault === "function") e.preventDefault();
    if (typeof onClose === "function") {
      onClose();
    } else {
      // لو الكومبوننت معمول كصفحة وحدها بدون prop، ارجع لصفحة سابقة
      navigate(-1);
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!area || !dateNeeded || !materialCode || !units) {
      alert("Please fill all fields");
      return;
    }

    
    if (typeof onAdd === "function") {
      onAdd({ area, dateNeeded, materialCode, units });
    }
    // بعد الإضافة نقفل الفورم أيضاً
    handleClose();

    onAdd({ area, dateNeeded, materialCode, units });
    setArea("");
    setDateNeeded("");
    setMaterialCode("");
    setUnits("");
  };

  return (
    <form className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50 px-4">
      <div className="text-white w-full max-w-3xl rounded-lg flex flex-col sm:flex-row">
        {/* Left Section */}
        <div className="w-full bg-blue-950 sm:w-1/3 p-6 sm:p-8 flex flex-col justify-between">
          <h2 className="text-2xl font-light mb-6 sm:mb-10">Add a new Item</h2>

          <div className="mt-auto space-y-4">
            <button
              className="w-full border border-fuchsia-600 py-2 rounded hover:bg-fuchsia-100 hover:text-pink-800"
              onClick={(e) => {
                e.preventDefault();
                onClose();
              }}
            >
              Cancel
            </button>
            <button
              className="w-full bg-fuchsia-700 py-2 rounded hover:bg-fuchsia-800"
              onClick={handleSubmit}
            >
              Add
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full bg-blue-900 sm:w-2/3 p-6 sm:p-8 relative space-y-6">
          {/* Close Icon */}
          <button
            type="button"
            className="absolute text-2xl top-4 right-4 text-red-600 font-bold cursor-pointer"
            onClick={handleClose}
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

          {/* Units */}
          <div>
            <label className="block text-sm mb-1">Number of Units</label>
            <input
              type="number"
              value={units}
              onChange={(e) => setUnits(e.target.value)}
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
