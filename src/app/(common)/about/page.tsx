import App from "@/components/home-1/App";
import CompanyLogo from "@/components/home-1/CompanyLogo";
import Freelancer from "@/components/home-1/Freelancer";
import Perform from "@/components/home-1/Perform";
import Testimonial from "@/components/home-1/Testimonial";
import WhyChoose from "@/components/home-1/WhyChoose";
import Breadcrumb from "@/components/shared/Breadcrumb";
import HowWork from "@/components/shared/HowWork2";

const page = () => {
  return (
    <>
      <Breadcrumb title="About" items={["Home", "Pages", "About us"]} />
      <Perform />
      <WhyChoose />
      <HowWork />
      <Freelancer />
      <App />
      <CompanyLogo />
      <Testimonial />
    </>
  );
};

export default page;
