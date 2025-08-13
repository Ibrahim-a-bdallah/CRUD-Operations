import { IoIosAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function Add() {
  const navigate = useNavigate();

    const handleAddClick = () => {
    navigate("/form");
    };

  return (
    <div className="bg-[#8C197E] p-4 rounded-lg transition-all duration-200 cursor-pointer">
      <button
        onClick={handleAddClick}
        className="bg-[#8C197E] text-white rounded-full transition-all duration-200 border-2 border-white cursor-pointer"
        style={{
          width: "36px",
          height: "36px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <IoIosAdd className="text-xl font-bold" />
      </button>
    </div>
  );
}
