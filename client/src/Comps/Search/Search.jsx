import React, { useState } from "react";
import {
  IoIosSearch,
  IoIosArrowDown,
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosAdd,
} from "react-icons/io";
import Add from "../Add";

const data = ["item1", "item2", "item3", "item4"];

export default function Search() {
  const [currentPage, setCurrentPage] = useState(1);
  const numofitem = 2;
  const totalPages = Math.ceil(data.length / numofitem);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // const startindex = (currentPage - 1) * numofitem;
  // const arrayitems = data.slice(startindex, startindex + numofitem);

  return (
    <div className="flex bg-[#090040] text-gray-400 items-center justify-between py-2.5 px-5 mx-auto">
      <div className="flex gap-5">
        <div className="flex items-center gap-2">
          <IoIosSearch className="text-2xl cursor-pointer" />
          <span>Search</span>
        </div>
        <div className="flex items-center gap-2">
          <IoIosArrowDown className="text-2xl cursor-pointer" />
          <span>Show KPIs</span>
        </div>
      </div>

      <div className="flex items-center gap-2.5">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`text-xl ${
            currentPage === 1
              ? "text-gray-600 cursor-not-allowed"
              : "text-gray-400 cursor-pointer hover:text-white"
          }`}
        >
          <IoIosArrowBack />
        </button>
        <p className="text-sm">
          Page {currentPage} of {totalPages}
        </p>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`text-xl ${
            currentPage === totalPages
              ? "text-gray-600 cursor-not-allowed"
              : "text-gray-400 cursor-pointer hover:text-white"
          }`}
        >
          <IoIosArrowForward />
        </button>
        <Add />
      </div>

      {/* Add Button - في آخر الهيدر */}
    </div>
  );
}
