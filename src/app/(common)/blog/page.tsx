import Blogs from "@/components/blog/Blogs";
import Breadcrumb from "@/components/shared/Breadcrumb";
import React from "react";

const page = () => {
  return (
    <>
      <Breadcrumb title="Blog" items={["Home", "Blog"]} />
      <Blogs />
    </>
  );
};

export default page;
