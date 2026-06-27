import Header from "@/components/layout/header/Header";
import Breadcrumb from "@/components/layout/banner/Breadcrumb";
import ErrorSection from "@/components/containers/ErrorSection";
import Footer from "@/components/layout/footer/Footer";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import InitAnimations from "@/components/layout/InitAnimations";

const page = () => {
  return (
    <>
      <Header />
      <Breadcrumb title="404 Error" />
      <ErrorSection />
      <Footer />
      <ScrollProgressButton />
      <InitAnimations />
    </>
  );
};

export default page;
