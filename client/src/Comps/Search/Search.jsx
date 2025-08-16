import React from "react";
import { IoIosSearch, IoIosArrowDown } from "react-icons/io";
import Add from "../Add";

export default function Search() {
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

      <Add />

      {/* Add Button - في آخر الهيدر */}
    </div>
  );
}
