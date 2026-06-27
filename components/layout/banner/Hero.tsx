"use client";
import { useRef } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/swiper-bundle.css";

const ACCENT = "#FF6B1F";

type Slide = { src: string; pos: string };

// Backgrounds crossfade behind a single, focused message.
const slides: Slide[] = [
  { src: "/images/hero/02.jpg", pos: "30% center" }, // musician with tovshuur
  { src: "/images/hero/01.png", pos: "60% center" }, // herder at golden hour
];

const COPY = {
  eyebrow: "Adventure Begins Here",
  pre: "",
  mark: "Mongolia",
  post: " is waiting for you",
  text: "Ride across the open steppe, sleep under a sky full of stars, and live with nomad families on a trip shaped around you.",
};

/** Hand-drawn orange brushstroke that sits below the marked word. */
const Brush = () => (
  <svg className="hero-brush" viewBox="0 0 320 28" preserveAspectRatio="none" aria-hidden="true">
    <path
      d="M8 18 C 70 9, 140 23, 210 13 S 296 9, 314 16"
      fill="none"
      stroke={ACCENT}
      strokeWidth="9"
      strokeLinecap="round"
    />
  </svg>
);

/** Faint topographic contour lines curving across the bottom-left corner. */
const Contour = () => (
  <svg
    className="hero-contour"
    width="620"
    height="460"
    viewBox="0 0 620 460"
    fill="none"
    aria-hidden="true"
  >
    {[0, 1, 2, 3, 4].map((i) => (
      <path
        key={i}
        d={`M${-40 + i * 26} 460 C ${120 + i * 22} ${360 - i * 18}, ${60 + i * 30} ${
          250 - i * 16
        }, ${190 + i * 24} ${220 - i * 14} S ${340 + i * 20} ${130 - i * 12}, ${
          430 + i * 26
        } ${150 - i * 18}`}
        stroke={ACCENT}
        strokeOpacity={0.22 - i * 0.025}
        strokeWidth="1.2"
      />
    ))}
  </svg>
);

const Hero = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section
      className="hero-section"
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        background: "#0c0c0e",
      }}
    >
      <Swiper
        slidesPerView={1}
        speed={1400}
        loop
        effect="fade"
        fadeEffect={{ crossFade: true }}
        modules={[EffectFade, Autoplay, Navigation]}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        onBeforeInit={(swiper: SwiperType) => {
          // @ts-expect-error navigation refs assigned before init
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-expect-error navigation refs assigned before init
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        style={{ height: "100%", width: "100%" }}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `url(${slide.src})`,
                backgroundSize: "cover",
                backgroundPosition: slide.pos,
              }}
            />
            {/* dark on the text side, clear over the subject */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(90deg, rgba(10,10,12,0.92) 0%, rgba(10,10,12,0.78) 28%, rgba(10,10,12,0.4) 52%, rgba(10,10,12,0) 76%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
                height: "10rem",
                background:
                  "linear-gradient(0deg, rgba(10,10,12,0.6) 0%, rgba(10,10,12,0) 100%)",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Top scrim so the overlaid nav stays legible over bright sky */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 170,
          zIndex: 6,
          pointerEvents: "none",
          background:
            "linear-gradient(180deg, rgba(10,10,12,0.6) 0%, rgba(10,10,12,0) 100%)",
        }}
      />

      <Contour />

      {/* Content overlay — static, never crossfades with the slides */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          pointerEvents: "none",
        }}
      >
        <div className="container">
          <div className="hero-copy" style={{ maxWidth: 640, color: "#fff", pointerEvents: "auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
              <span style={{ display: "block", height: 2, width: 48, background: ACCENT }} />
              <span
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  color: ACCENT,
                  letterSpacing: "0.28em",
                }}
              >
                {COPY.eyebrow}
              </span>
            </div>

            <h1 className="hero-title">
              {COPY.pre}
              <span className="hero-mark">
                {COPY.mark}
                <Brush />
              </span>
              {COPY.post}
            </h1>

            <p className="hero-sub">{COPY.text}</p>

            <div className="hero-actions">
              <Link href="/tour-list" className="hero-cta" style={{ backgroundColor: ACCENT }}>
                <span>Explore Tours</span>
                <span className="hero-cta__arrow" style={{ color: ACCENT }}>
                  <i className="far fa-arrow-right"></i>
                </span>
              </Link>
              <Link href="/contact" className="hero-ghost">
                Plan Your Trip
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Chevron slider controls, bottom-right */}
      <div style={{ position: "absolute", bottom: 32, right: 32, zIndex: 20, display: "flex", gap: 12 }}>
        <button ref={prevRef} aria-label="Previous slide" className="hero-chevron">
          <i className="fas fa-chevron-left"></i>
        </button>
        <button ref={nextRef} aria-label="Next slide" className="hero-chevron">
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>

      <style>{`
        .hero-section .swiper,
        .hero-section .swiper-wrapper,
        .hero-section .swiper-slide { height: 100% !important; }

        .hero-title {
          font-family: 'Satoshi', var(--heading-font), system-ui, sans-serif;
          font-weight: 900;
          color: #fff;
          line-height: 0.98;
          letter-spacing: -0.01em;
          font-size: clamp(2.6rem, 6vw, 5.5rem);
          margin: 0;
          text-transform: none;
        }
        .hero-mark { position: relative; display: inline-block; white-space: nowrap; }
        .hero-brush {
          position: absolute; left: -2%; width: 104%;
          bottom: -0.26em; height: 0.34em; overflow: visible;
        }
        .hero-sub {
          margin-top: 1.75rem; max-width: 34rem;
          font-size: 1.125rem; line-height: 1.7; color: rgba(255,255,255,0.82);
        }
        @media (min-width: 768px) { .hero-sub { font-size: 1.25rem; } }
        .hero-actions {
          margin-top: 2.5rem; display: flex; flex-wrap: wrap;
          align-items: center; gap: 1.75rem;
        }
        .hero-cta {
          display: inline-flex; align-items: center; gap: 1rem;
          padding: 0.45rem 0.45rem 0.45rem 1.75rem;
          border-radius: 999px; color: #fff; font-weight: 700; font-size: 1.05rem;
          transition: transform .25s ease, filter .25s ease;
          box-shadow: 0 12px 30px rgba(255,107,31,0.35);
        }
        .hero-cta:hover { transform: translateY(-2px); filter: brightness(1.05); color:#fff; }
        .hero-cta__arrow {
          display: inline-flex; align-items: center; justify-content: center;
          width: 2.9rem; height: 2.9rem; border-radius: 999px; background: #fff; font-size: 0.95rem;
        }
        .hero-ghost {
          color: rgba(255,255,255,0.92); font-weight: 600; font-size: 1.02rem;
          text-decoration: none; text-underline-offset: 6px; transition: color .2s ease;
        }
        .hero-ghost:hover { color:#fff; text-decoration: underline; }
        .hero-contour { position: absolute; left: 0; bottom: 0; z-index: 5; pointer-events: none; }
        .hero-chevron {
          width: 3rem; height: 3rem; border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.4); background: rgba(255,255,255,0.08);
          backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
          color: #fff; font-size: 0.85rem;
          display: inline-flex; align-items: center; justify-content: center;
          transition: background .2s ease, border-color .2s ease; cursor: pointer;
        }
        .hero-chevron:hover { background: ${ACCENT}; border-color: ${ACCENT}; }
        @media (max-width: 991px) { .hero-copy { max-width: 100% !important; } }
      `}</style>
    </section>
  );
};

export default Hero;
