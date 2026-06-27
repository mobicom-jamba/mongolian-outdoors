import HeroThree from "@/components/layout/banner/HeroThree";
import AboutThree from "@/components/containers/AboutThree";
import MarqueeSection from "@/components/containers/MarqueeSection";
import MarqueeSectionTwo from "@/components/containers/MarqueeSectionTwo";
import TourSectionThree from "@/components/containers/TourSectionThree";
import CtaThree from "@/components/containers/CtaThree";
import FeaturedPlaceTwo from "@/components/containers/FeaturedPlaceTwo";
import TestimonialThree from "@/components/containers/TestimonialThree";
import TeamSectionTwo from "@/components/containers/TeamSectionTwo";
import CtaTwo from "@/components/containers/CtaTwo";
import FaqTwo from "@/components/containers/FaqTwo";
import NewsSectionThree from "@/components/containers/NewsSectionThree";
import Footer from "@/components/layout/footer/Footer";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import InitAnimations from "@/components/layout/InitAnimations";

const page = () => {
  return (
    <>
      {/* <HeaderTwo /> */}
      <HeroThree />
      <AboutThree />
      <MarqueeSection />
      <MarqueeSectionTwo />
      <TourSectionThree />
      <CtaThree />
      <FeaturedPlaceTwo />
      <TestimonialThree />
      <TeamSectionTwo />
      <CtaTwo />
      <FaqTwo />
      <NewsSectionThree />
      <Footer />
      <ScrollProgressButton />
      <InitAnimations />
    </>
  );
};

export default page;
