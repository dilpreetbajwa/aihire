import Employers from "@/components/employer/Employers";
import Breadcrumb from "@/components/shared/Breadcrumb";
import React from "react";

const page = () => {
  return (
    <>
      <Breadcrumb title="Employer" items={["Home", "Pages", "Employer"]} />
      <Employers />
    </>
  );
};

export default page;
