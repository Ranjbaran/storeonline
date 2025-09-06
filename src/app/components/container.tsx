import React from "react";

function Container({ children }: { children: React.ReactNode }) {
  return <div className=" max-w-[90%] mx-auto px-4  py-6 my-6 bg-white shadow-lg rounded-xl inset-shadow-sm">{children}</div>;
}

export default Container;
