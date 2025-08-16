import Header from "../Comps/ui/Header";
import { Outlet } from "react-router-dom";
import Modules from "../Comps/Modules";

const MainLayouts = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Modules />
    </>
  );
};

export default MainLayouts;
