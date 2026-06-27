import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/layout/header/Header";
import Breadcrumb from "@/components/layout/banner/Breadcrumb";
import TourDetails from "@/components/containers/tour/TourDetails";
import Footer from "@/components/layout/footer/Footer";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import InitAnimations from "@/components/layout/InitAnimations";
import { getPayloadClient } from "@/lib/payload";

export const revalidate = 60;

type Params = { params: Promise<{ slug: string }> };

const getTour = async (slug: string) => {
  const payload = await getPayloadClient();
  const { docs } = await payload.find({
    collection: "tours",
    where: { slug: { equals: slug } },
    depth: 1,
    limit: 1,
  });
  return docs[0] ?? null;
};

export async function generateStaticParams() {
  const payload = await getPayloadClient();
  const { docs } = await payload.find({
    collection: "tours",
    limit: 100,
    depth: 0,
    pagination: false,
  });
  return docs.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const tour = await getTour(slug);
  if (!tour) return { title: "Tour not found" };
  return {
    title: tour.spot,
    description: tour.shortDescription ?? undefined,
  };
}

const page = async ({ params }: Params) => {
  const { slug } = await params;
  const tour = await getTour(slug);
  if (!tour) notFound();

  return (
    <>
      <Header />
      <Breadcrumb title={tour.spot} />
      <TourDetails tour={tour} />
      <Footer />
      <ScrollProgressButton />
      <InitAnimations />
    </>
  );
};

export default page;
