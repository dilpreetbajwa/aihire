import Freelancers from "@/components/freelancer/Freelancers";
import Breadcrumb from "@/components/shared/Breadcrumb";
import React from "react";

const page = () => {
  return (
    <>
      <Breadcrumb
        title="Freelancer"
        items={["Home", "Find Talent", "Freelancer"]}
      />
      <Freelancers />
    </>
  );
};

export default page;
