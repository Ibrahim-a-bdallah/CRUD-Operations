import DemoPage from "@/components/payments/page";
// import { Button } from "@/components/ui/button";
// import { openModule } from "@/store/module/moduleSlice";
import React from "react";
// import { useDispatch } from "react-redux";
const Dashboard = () => {
  // const dispatch = useDispatch();
  return (
    <div>
      {/* <Button onClick={() => dispatch(openModule())}>Dashboard</Button> */}
      <div className="flex min-h-svh flex-col items-center justify-center">
        <DemoPage></DemoPage>
      </div>
    </div>
  );
};

export default Dashboard;
