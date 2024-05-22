import HelpSupport from "@/components/help-support/HelpSupport";
import Breadcrumb from "@/components/shared/Breadcrumb";
import React from "react";

const page = () => {
  return (
    <>
      <Breadcrumb
        title="Help & Support"
        items={["Home", "Pages", "Help & Support"]}
      />
      <HelpSupport />
    </>
  );
};

export default page;
