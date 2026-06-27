import Header from "@/components/layout/header/Header";
import Breadcrumb from "@/components/layout/banner/Breadcrumb";
import ChooseSection from "@/components/containers/ChooseSection";
import MarqueeSection from "@/components/containers/MarqueeSection";
import Brand from "@/components/containers/Brand";
import Footer from "@/components/layout/footer/Footer";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import InitAnimations from "@/components/layout/InitAnimations";
import TourSection from "@/components/containers/TourSection";

const page = () => {
  return (
    <>
      <Header />
      <Breadcrumb title="About Us" />
      <ChooseSection />
      <MarqueeSection />
      {/* <MarqueeSectionTwo />
      <AboutMain /> */}
      <Brand />
      {/* <TeamSectionTwo /> */}
      {/* <CtaTwo /> */}
      <TourSection />
      <Footer />
      <ScrollProgressButton />
      <InitAnimations />
    </>
  );
};

export default page;
