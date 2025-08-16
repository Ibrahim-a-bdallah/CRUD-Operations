import Lottie from "lottie-react";
import loading from "@/assets/LottieFiles/loading.json";
import error from "@/assets/LottieFiles/Error.json";
import notFound from "@/assets/LottieFiles/NotFound.json";
import succeded from "@/assets/LottieFiles/Success.json";
const lottieType = {
  loading,
  error,
  notFound,
  succeded,
};

const LottieHandler = ({ message, type, styled }) => {
  return (
    <div
      className={`flex justify-center items-center flex-col ${
        type === "loading" ? "h-screen" : ""
      }`}
    >
      <Lottie
        className={`${styled ? styled : "w-[300px]"}`}
        animationData={lottieType[type]}
      />
      <p>{message}</p>
    </div>
  );
};
export default LottieHandler;
