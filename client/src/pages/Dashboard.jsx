import { Button } from "@/components/ui/button";
import { openModule } from "@/store/module/moduleSlice";
import React from "react";
import { useDispatch } from "react-redux";
const Dashboard = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Button onClick={() => dispatch(openModule())}>Dashboard</Button>
    </div>
  );
};

export default Dashboard;
