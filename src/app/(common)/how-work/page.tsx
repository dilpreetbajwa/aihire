import App from "@/components/home-1/App";
import GetStarted from "@/components/home-1/GetStarted";
import HowItWork from "@/components/home-1/HowItWork";
import HowWork from "@/components/home-2/HowWork";
import Breadcrumb from "@/components/shared/Breadcrumb";
import React from "react";

const page = () => {
  return (
    <>
      <Breadcrumb title="How It Works" items={["Home", "How It Works"]} />
      <HowWork />
      <App />
      <HowItWork />
      <GetStarted />
    </>
  );
};

export default page;
