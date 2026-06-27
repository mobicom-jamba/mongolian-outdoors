import Header from "@/components/layout/header/Header";
import Breadcrumb from "@/components/layout/banner/Breadcrumb";
import TourMain from "@/components/containers/tour/TourMain";
import Footer from "@/components/layout/footer/Footer";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import InitAnimations from "@/components/layout/InitAnimations";

const page = () => {
  return (
    <>
      <Header />
      <Breadcrumb title="Our Tour Listing" />
      <TourMain />
      <Footer />
      <ScrollProgressButton />
      <InitAnimations />
    </>
  );
};

export default page;
