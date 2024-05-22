import ServiceGrid from "@/components/service/ServiceGrid";
import Breadcrumb from "@/components/shared/Breadcrumb";
import React from "react";

const page = () => {
  return (
    <>
      <Breadcrumb title="Services" items={["Home", "Browse Job", "Services"]} />
      <ServiceGrid />
    </>
  );
};

export default page;
