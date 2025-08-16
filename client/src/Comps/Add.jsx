import { openModule } from "@/store/module/moduleSlice";
import { IoIosAdd } from "react-icons/io";
import { useDispatch } from "react-redux";

export default function Add() {
  const dispatch = useDispatch();
  const handleAddClick = () => {
    dispatch(openModule({ type: "add" })); // Dispatch the action to open the module
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
