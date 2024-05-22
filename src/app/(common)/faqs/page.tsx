import Faq from "@/components/faq/Faq";
import App from "@/components/home-1/App";
import CompanyLogo from "@/components/home-1/CompanyLogo";
import Breadcrumb from "@/components/shared/Breadcrumb";
import React from "react";

const page = () => {
  return (
    <>
      <Breadcrumb title="FAQs" items={["Home", "Pages", "FAQs"]} />
      <Faq />
      <App />
      <CompanyLogo />
    </>
  );
};

export default page;
