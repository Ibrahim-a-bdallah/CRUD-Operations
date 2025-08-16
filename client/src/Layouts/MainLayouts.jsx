// import Header from "@/components/ui/Header";
import { Outlet } from "react-router-dom";
// import Modules from "@/components/Modules";

const MainLayouts = () => {
  return (
    <>
      {/* <Header /> */}
      <Outlet />
      {/* <Modules /> */}
    </>
  );
};

export default MainLayouts;
