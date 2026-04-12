import Header from "@/components/layout/header/Header";
import HeroTwo from "@/components/layout/banner/HeroTwo";
import Brand from "@/components/containers/Brand";
import TrendyLocation from "@/components/containers/TrendyLocation";
import FeaturedPlaces from "@/components/containers/FeaturedPlaces";
import AboutTwo from "@/components/containers/AboutTwo";
import Cta from "@/components/containers/Cta";
import InstagramSection from "@/components/containers/InstagramSection";
import TourPackage from "@/components/containers/TourPackage";
import HotDeals from "@/components/containers/HotDeals";
import TestimonialTwo from "@/components/containers/TestimonialTwo";
import Faq from "@/components/containers/Faq";
import NewsSection from "@/components/containers/NewsSection";
import Footer from "@/components/layout/footer/Footer";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import InitAnimations from "@/components/layout/InitAnimations";

const page = () => {
  return (
    <>
      <Header />
      <HeroTwo />
      <Brand />
      <TrendyLocation />
      <FeaturedPlaces />
      <AboutTwo />
      <Cta />
      <TourPackage />
      <HotDeals />
      <TestimonialTwo />
      <Faq />
      <NewsSection />
      <InstagramSection />
      <Footer />
      <ScrollProgressButton />
      <InitAnimations />
    </>
  );
};

export default page;
