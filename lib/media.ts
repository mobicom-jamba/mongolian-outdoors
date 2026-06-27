import type { Media } from "@/payload-types";

export type MediaSize = "thumbnail" | "card" | "feature";

export type ImgProps = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

/**
 * Normalize a Payload upload field into props for next/image.
 *
 * Accepts the union Payload returns for an upload relation: a populated `Media`
 * object (depth >= 1), a numeric id (unpopulated), null/undefined.
 * Returns null when there is no usable image so callers can fall back.
 *
 * `size` picks a generated image size (thumbnail/card/feature); falls back to
 * the original when that size is missing. SVGs have no generated sizes and may
 * lack width/height, so `fallback` dimensions are used in that case.
 */
export function mediaProps(
  media: number | Media | null | undefined,
  size?: MediaSize,
  fallback: { width: number; height: number } = { width: 800, height: 600 },
): ImgProps | null {
  if (!media || typeof media === "number") return null;

  const sized = size ? media.sizes?.[size] : undefined;
  const src = sized?.url ?? media.url;
  if (!src) return null;

  const width = sized?.width ?? media.width ?? fallback.width;
  const height = sized?.height ?? media.height ?? fallback.height;

  return {
    src,
    width: width ?? fallback.width,
    height: height ?? fallback.height,
    alt: media.alt ?? "",
  };
}
