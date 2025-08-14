import React, { useState } from "react";
import Form from "@/pages/Form";

export default function Parent() {
  const [showForm, setShowForm] = useState(false);
  const [items, setItems] = useState([]);

  const handleAddItem = (newItem) => {
    setItems((prev) => [...prev, newItem]);
    setShowForm(false);
  };

  return (
    <div className="p-4">
      {/* الزر اللي بيظهر الفورم */}
      <button
        onClick={() => setShowForm(true)}
        className="bg-[#8C197E] text-white rounded-full transition-all duration-200 border-2 border-white cursor-pointer"
        style={{
          width: "36px",
          height: "36px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        +
      </button>

      {/* الجدول */}
      <table className="mt-4 border-collapse border border-gray-300 w-full text-left">
        <thead>
          <tr>
            <th className="border p-2">Area</th>
            <th className="border p-2">Date Needed</th>
            <th className="border p-2">Material Code</th>
            <th className="border p-2">Units</th>
          </tr>
        </thead>
        <tbody>
          {items.length === 0 ? (
            <tr>
              <td colSpan="4" className="p-4 text-center">
                No data
              </td>
            </tr>
          ) : (
            items.map((item, index) => (
              <tr key={index}>
                <td className="border p-2">{item.area}</td>
                <td className="border p-2">{item.dateNeeded}</td>
                <td className="border p-2">{item.materialCode}</td>
                <td className="border p-2">{item.units}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* الفورم */}
      {showForm && (
        <Form
          onClose={() => setShowForm(false)}
          onAdd={handleAddItem}
        />
      )}
    </div>
  );
}
