import ProjectDetails from "@/components/project/ProjectDetails";
import Breadcrumb from "@/components/shared/Breadcrumb";

const page = () => {
  return (
    <>
      <Breadcrumb
        title="Projects - Details"
        items={["Home", "Browse Job", "Projects", "Projects - Details"]}
      />
      <ProjectDetails />
    </>
  );
};

export default page;
