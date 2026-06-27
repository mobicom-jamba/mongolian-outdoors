import Header from "@/components/layout/header/Header";
import Hero from "@/components/layout/banner/Hero";
import TravelLocations from "@/components/containers/TravelLocations";
import TourSection from "@/components/containers/TourSection";
import TourDiscover from "@/components/containers/TourDiscover";
import TeamSection from "@/components/containers/TeamSection";
import TopDestination from "@/components/containers/TopDestination";
import TestimonialSection from "@/components/containers/TestimonialSection";
import InstagramSection from "@/components/containers/InstagramSection";
import NewsSection from "@/components/containers/NewsSection";
import Footer from "@/components/layout/footer/Footer";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import InitAnimations from "@/components/layout/InitAnimations";

const page = () => {
  return (
    <>
      <Header />
      <Hero />
      <TravelLocations />
      {/* <About /> */}
      {/* <Brand /> */}
      <TourSection />
      <TourDiscover />
      {/* <TeamSection /> */}
      {/* <TopDestination /> */}
      <TestimonialSection />
      {/* <NewsSection /> */}
      {/* <InstagramSection /> */}
      <Footer />
      <ScrollProgressButton />
      <InitAnimations />
    </>
  );
};

export default page;
