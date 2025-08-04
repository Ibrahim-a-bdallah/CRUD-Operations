import React from "react";
import { Outlet } from "react-router-dom";

const MainLayouts = () => {
  return (
    <>
      <Header />
      <div className="flex min-h-svh flex-col items-center justify-center">
        <Search />

        <Button>app</Button>
        <DemoPage></DemoPage>
      </div>
      <Outlet />
    </>
  );
};

export default MainLayouts;
