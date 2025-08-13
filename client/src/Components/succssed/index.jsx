import { useDispatch } from "react-redux";
import { Button } from "../ui/button";
import { closeModule, openModule } from "@/store/module/moduleSlice";
import LottieHandler from "../LottieHandler/LottieHandler";
import { resetItems } from "@/store/create/itemsSlice";

const Succssed = () => {
  const dispatch = useDispatch();
  const editHandler = () => {
    dispatch(openModule({ type: "Update" }));
  };
  return (
    <div className="text-white w-full max-m-full h-full max-h-full bg-blue-950 p-4 rounded-2xl flex flex-col justify-center items-center gap-4 md:gap-5">
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
        <Button className="cursor-pointer" onClick={editHandler}>
          Edit
        </Button>
        <Button
          className="cursor-pointer"
          onClick={() => {
            dispatch(closeModule());
            dispatch(resetItems());
          }}
        >
          Close
        </Button>
      </div>
    </div>
  );
};

export default Succssed;
