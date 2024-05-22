import Breadcrumb from "@/components/shared/Breadcrumb";
import SignUp from "@/components/signup/SignUp";

const page = () => {
  return (
    <>
      <Breadcrumb title="Sign up" items={["Home", "Pages", "Sign up"]} />
      <SignUp />
    </>
  );
};

export default page;
