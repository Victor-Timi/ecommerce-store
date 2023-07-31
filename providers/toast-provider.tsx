"use client";

import { Toaster } from "react-hot-toast";

const ToastProvider = () => {
  return (
    <Toaster
      toastOptions={{
        style: {
          backgroundColor: "#333333",
          color: "#FFFFFF",
          borderRadius: "1px",
        },
      }}
    />
  );
};

export default ToastProvider;
