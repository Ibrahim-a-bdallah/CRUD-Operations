import Succssed from "@/components/succssed";
import Header from "@/components/ui/Header";
import React from "react";
import { Outlet } from "react-router-dom";

const MainLayouts = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Form />
      <Succssed />
    </>
  );
};

export default MainLayouts;
