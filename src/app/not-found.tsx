import Error from "@/components/error/Error";
import Breadcrumb from "@/components/shared/Breadcrumb";

const Page = () => {
  return (
    <>
      <Breadcrumb title="404 Page" items={["Home", "Pages", "404 Page"]} />
      <Error />
    </>
  );
};

export default Page;
