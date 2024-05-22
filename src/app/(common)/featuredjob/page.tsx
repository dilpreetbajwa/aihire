import FeaturedJob from "@/components/featured/FeaturedJob";
import Breadcrumb from "@/components/shared/Breadcrumb";
import React from "react";

const page = () => {
  return (
    <>
      <Breadcrumb
        title="Featured Job"
        items={["Home", "Browse Job", "Featured Job"]}
      />
      <FeaturedJob />
    </>
  );
};

export default page;
