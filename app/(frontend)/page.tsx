import Header from "@/components/layout/header/Header";
import Hero from "@/components/layout/banner/Hero";
import TravelLocations from "@/components/containers/TravelLocations";
import TourSection from "@/components/containers/TourSection";
import TestimonialSection from "@/components/containers/TestimonialSection";
import Footer from "@/components/layout/footer/Footer";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import InitAnimations from "@/components/layout/InitAnimations";

export const revalidate = 60;

const page = () => {
  return (
    <>
      <Header />
      <Hero />
      <TravelLocations />
      <TourSection />
      <TestimonialSection />
      <Footer />
      <ScrollProgressButton />
      <InitAnimations />
    </>
  );
};

export default page;
