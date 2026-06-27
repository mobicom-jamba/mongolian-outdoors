import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/layout/header/Header";
import Breadcrumb from "@/components/layout/banner/Breadcrumb";
import BlogDetailsSection from "@/components/containers/BlogDetailsSection";
import Footer from "@/components/layout/footer/Footer";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import InitAnimations from "@/components/layout/InitAnimations";
import { getPayloadClient } from "@/lib/payload";

export const revalidate = 60;

type Params = { params: Promise<{ slug: string }> };

const getPost = async (slug: string) => {
  const payload = await getPayloadClient();
  const { docs } = await payload.find({
    collection: "news",
    where: { slug: { equals: slug }, published: { equals: true } },
    depth: 1,
    limit: 1,
  });
  return docs[0] ?? null;
};

export async function generateStaticParams() {
  const payload = await getPayloadClient();
  const { docs } = await payload.find({
    collection: "news",
    where: { published: { equals: true } },
    limit: 100,
    depth: 0,
    pagination: false,
  });
  return docs.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.description ?? undefined,
  };
}

const page = async ({ params }: Params) => {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <>
      <Header />
      <Breadcrumb title={post.title} />
      <BlogDetailsSection post={post} />
      <Footer />
      <ScrollProgressButton />
      <InitAnimations />
    </>
  );
};

export default page;
