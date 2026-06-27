import Header from "@/components/layout/header/Header";
import Breadcrumb from "@/components/layout/banner/Breadcrumb";
import FaqMain from "@/components/containers/FaqMain";
import FaqContact from "@/components/containers/FaqContact";
import Footer from "@/components/layout/footer/Footer";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import InitAnimations from "@/components/layout/InitAnimations";
import { getPayloadClient } from "@/lib/payload";

export const revalidate = 60;

const page = async () => {
  const payload = await getPayloadClient();
  const { docs: faqs } = await payload.find({
    collection: "faqs",
    limit: 50,
    sort: "order",
  });

  return (
    <>
      <Header />
      <Breadcrumb title="FAQ's" />
      <FaqMain faqs={faqs} />
      <FaqContact />
      <Footer />
      <ScrollProgressButton />
      <InitAnimations />
    </>
  );
};

export default page;
