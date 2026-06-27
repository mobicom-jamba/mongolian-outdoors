import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/layout/header/Header";
import Breadcrumb from "@/components/layout/banner/Breadcrumb";
import TeamDetails from "@/components/containers/TeamDetails";
import Footer from "@/components/layout/footer/Footer";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import InitAnimations from "@/components/layout/InitAnimations";
import { getPayloadClient } from "@/lib/payload";

export const revalidate = 60;

type Params = { params: Promise<{ slug: string }> };

const getMember = async (slug: string) => {
  const payload = await getPayloadClient();
  const { docs } = await payload.find({
    collection: "team",
    where: { slug: { equals: slug } },
    depth: 1,
    limit: 1,
  });
  return docs[0] ?? null;
};

export async function generateStaticParams() {
  const payload = await getPayloadClient();
  const { docs } = await payload.find({
    collection: "team",
    limit: 100,
    depth: 0,
    pagination: false,
  });
  return docs.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const member = await getMember(slug);
  if (!member) return { title: "Team member not found" };
  return {
    title: member.name,
    description: member.bio ?? undefined,
  };
}

const page = async ({ params }: Params) => {
  const { slug } = await params;
  const member = await getMember(slug);
  if (!member) notFound();

  return (
    <>
      <Header />
      <Breadcrumb title={member.name} />
      <TeamDetails member={member} />
      <Footer />
      <ScrollProgressButton />
      <InitAnimations />
    </>
  );
};

export default page;
