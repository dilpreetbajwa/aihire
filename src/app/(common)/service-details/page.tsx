import ServiceDetails from "@/components/service/ServiceDetails";
import Breadcrumb from "@/components/shared/Breadcrumb";
import React from "react";

const page = () => {
  return (
    <>
      <Breadcrumb
        title="Services - Details"
        items={["Home", "Browse Job", "Services", "Details"]}
      />
      <ServiceDetails />
    </>
  );
};

export default page;
