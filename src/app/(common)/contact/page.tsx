import Contact from "@/components/contact/Contact";
import Breadcrumb from "@/components/shared/Breadcrumb";

const page = () => {
  return (
    <>
      <Breadcrumb title="Contact us" items={["Home", "Contact us"]} />
      <Contact />
    </>
  );
};

export default page;
