import FeaturedDetails from "@/components/featured/FeaturedDetails";
import Breadcrumb from "@/components/shared/Breadcrumb";

const page = () => {
  return (
    <>
      <Breadcrumb
        title="Featured Job - Details"
        items={["Home", "Browse Job", "Featured Job", "Details"]}
      />
      <FeaturedDetails />
    </>
  );
};

export default page;
