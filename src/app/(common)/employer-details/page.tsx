import EmployerDetails from "@/components/employer/EmployerDetails";
import Breadcrumb from "@/components/shared/Breadcrumb";
import React from "react";

const page = () => {
  return (
    <>
      <Breadcrumb
        title="Employer - Details"
        items={["Home", "Pages", "Employer", "Details"]}
      />
      <EmployerDetails />
    </>
  );
};

export default page;
