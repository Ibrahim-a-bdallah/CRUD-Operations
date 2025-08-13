import { useDispatch, useSelector } from "react-redux";
import { closeModule } from "@/store/module/moduleSlice";
// import Form from "./Form";
import Succssed from "./succssed";
import Module from "./module/Module";
import { ProfileForm } from "./Form";
import { resetItems } from "@/store/create/itemsSlice";

const Modules = () => {
  const dispatch = useDispatch();

  const { open, type } = useSelector((state) => state.module);
  if (open === false) {
    dispatch(resetItems());
  }

  console.log("Module state:", { open, type });
  return (
    <Module
      open={open}
      onChange={(val) => {
        if (!val) dispatch(closeModule());
      }}
    >
      {type !== "success" ? <ProfileForm /> : <Succssed />}
    </Module>
  );
};

export default Modules;
