import BlogDetails from "@/components/blog/BlogDetails";
import Breadcrumb from "@/components/shared/Breadcrumb";

const page = () => {
  return (
    <>
      <Breadcrumb title="Blog - Details" items={["Home", "Blog", "Details"]} />
      <BlogDetails />
    </>
  );
};

export default page;
