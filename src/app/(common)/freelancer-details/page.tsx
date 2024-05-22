import FreelancerDetails from "@/components/freelancer/FreelancerDetails";
import Breadcrumb from "@/components/shared/Breadcrumb";

const page = () => {
  return (
    <>
      <Breadcrumb
        items={["Home", "Find Talent", "Freelancer", "Details"]}
        title="Freelancer - Details"
      />
      <FreelancerDetails />
    </>
  );
};

export default page;
