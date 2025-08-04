import { useDispatch, useSelector } from "react-redux";
import Module from "../module/Module";
import { Button } from "../ui/button";
import { closeModule } from "@/store/module/moduleSlice";
import LottieHandler from "../LottieHandler/LottieHandler";

const Succssed = () => {
  const dispatch = useDispatch();

  const { open } = useSelector((state) => state.module);

  return (
    <Module
      open={open}
      onChange={(val) => {
        if (!val) dispatch(closeModule());
      }}
    >
      <div className="text-white flex flex-col justify-center items-center gap-4 md:gap-5">
        <div className="flex text-center justify-center items-center gap-3 flex-col md:flex-row">
          <div>
            <LottieHandler type="succeded" styled="w-[100px] md:w-[200px]" />
          </div>
          <div>
            <h2>Creation Succeded</h2>
            <p>Wait a few minutes while the informations is being validated </p>
          </div>
        </div>
        <div className="flex  justify-center items-center gap-3">
          <Button className="cursor-pointer">Edit</Button>
          <Button
            className="cursor-pointer"
            onClick={() => dispatch(closeModule())}
          >
            Close
          </Button>
        </div>
      </div>
    </Module>
  );
};

export default Succssed;
