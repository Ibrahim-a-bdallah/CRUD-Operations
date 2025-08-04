import React, { Suspense } from "react";
import LottieHandler from "./LottieHandler";

const SuspensLottieFallback = ({
  children,
  type,
  message,
  styled = "mt-5 mb-2",
}) => {
  return (
    <Suspense
      fallback={
        <LottieHandler
          styled={styled}
          type={type ?? "loading"}
          message={message || ""}
        />
      }
    >
      {children}
    </Suspense>
  );
};

export default SuspensLottieFallback;
