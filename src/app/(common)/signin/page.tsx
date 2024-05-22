import Breadcrumb from "@/components/shared/Breadcrumb";
import SignIn from "@/components/signin/SignIn";
import React from "react";

const page = () => {
  return (
    <>
      <Breadcrumb title="Sign In" items={["Home", "Pages", "Sign In"]} />
      <SignIn />
    </>
  );
};

export default page;
