import Header from "@/components/layout/header/Header";
import Breadcrumb from "@/components/layout/banner/Breadcrumb";
import TourList from "@/components/containers/tour/TourList";
import Footer from "@/components/layout/footer/Footer";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import InitAnimations from "@/components/layout/InitAnimations";
import { getPayloadClient } from "@/lib/payload";

export const revalidate = 60;

const page = async () => {
  const payload = await getPayloadClient();
  const { docs: tours } = await payload.find({
    collection: "tours",
    limit: 9,
    depth: 1,
    sort: "-createdAt",
  });

  return (
    <>
      <Header />
      <Breadcrumb title="Tour list" />
      <TourList tours={tours} />
      <Footer />
      <ScrollProgressButton />
      <InitAnimations />
    </>
  );
};

export default page;
