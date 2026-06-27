import Header from "@/components/layout/header/Header";
import Breadcrumb from "@/components/layout/banner/Breadcrumb";
import TourDetails from "@/components/containers/tour/TourDetails";
import Footer from "@/components/layout/footer/Footer";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import InitAnimations from "@/components/layout/InitAnimations";

const page = () => {
  return (
    <>
      <Header />
      <Breadcrumb title="Listing Details" />
      <TourDetails />
      <Footer />
      <ScrollProgressButton />
      <InitAnimations />
    </>
  );
};

export default page;
