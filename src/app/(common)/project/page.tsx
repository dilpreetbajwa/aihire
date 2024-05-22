import Projects from "@/components/project/Projects";
import Breadcrumb from "@/components/shared/Breadcrumb";
import React from "react";

const page = () => {
  return (
    <>
      <Breadcrumb title="Projects" items={["Home", "Browse Job", "Projects"]} />
      <Projects />
    </>
  );
};

export default page;
