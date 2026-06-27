import Header from "@/components/layout/header/Header";
import Breadcrumb from "@/components/layout/banner/Breadcrumb";
import FaqMain from "@/components/containers/FaqMain";
import FaqContact from "@/components/containers/FaqContact";
import Footer from "@/components/layout/footer/Footer";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import InitAnimations from "@/components/layout/InitAnimations";

const page = () => {
  return (
    <>
      <Header />
      <Breadcrumb title="FAQ's" />
      <FaqMain />
      <FaqContact />
      <Footer />
      <ScrollProgressButton />
      <InitAnimations />
    </>
  );
};

export default page;
