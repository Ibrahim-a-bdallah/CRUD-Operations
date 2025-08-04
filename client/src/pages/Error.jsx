import LottieHandler from "@/components/LottieHandler/LottieHandler";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <LottieHandler
        styled={"mb-0"}
        type="notFound"
        message=""
        cssStyle={{ width: "500px", marginTop: "-10%" }}
      />
      <Link to="/" replace={true} className="text-blue-800">
        How about going back to safety
      </Link>
    </div>
  );
};

export default Error;
