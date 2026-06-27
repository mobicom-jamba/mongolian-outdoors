// Seed: first admin user + starter content (tours, destinations, news, team, faqs)
// with uploaded media. Idempotent-ish: skips content if tours already exist.
// Run: yarn seed
import path from "node:path";
import { fileURLToPath } from "node:url";
import configPromise from "@payload-config";
import { getPayload } from "../node_modules/payload/dist/index.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const img = (...p: string[]) => path.join(root, "public", "images", ...p);

const ADMIN_EMAIL = "ganzojamba@gmail.com";
const ADMIN_PASSWORD = "MongolianOutdoors2026!";

/** Minimal Lexical richText document from a plain paragraph string. */
const rich = (text: string) => ({
  root: {
    type: "root",
    format: "" as const,
    indent: 0,
    version: 1,
    direction: "ltr" as const,
    children: [
      {
        type: "paragraph",
        version: 1,
        format: "" as const,
        indent: 0,
        direction: "ltr" as const,
        children: [
          { type: "text", version: 1, text, format: 0, style: "", mode: "normal", detail: 0 },
        ],
      },
    ],
  },
});

const run = async () => {
  const payload = await getPayload({ config: await configPromise });

  // 1) Admin user
  const existingUsers = await payload.count({ collection: "users" });
  if (existingUsers.totalDocs === 0) {
    await payload.create({
      collection: "users",
      data: { email: ADMIN_EMAIL, password: ADMIN_PASSWORD, name: "Admin" },
    });
    console.log(`✓ Admin user created: ${ADMIN_EMAIL} / ${ADMIN_PASSWORD}`);
  } else {
    console.log("• Users already exist — skipping admin creation");
  }

  // Skip content seed if tours already present
  const tourCount = await payload.count({ collection: "tours" });
  if (tourCount.totalDocs > 0) {
    console.log("• Content already seeded — done");
    return;
  }

  const upload = async (filePath: string, alt: string) => {
    const doc = await payload.create({
      collection: "media",
      data: { alt },
      filePath,
    });
    return doc.id as number;
  };

  // 2) Tours
  const tours = [
    {
      spot: "Otgontenger Mountain", slug: "otgontenger", price: 450, discount: 500,
      day: 6, night: 5, featured: true, file: img("tour", "mongolia", "otgontenger.jpg"),
      shortDescription: "Sacred snow-capped peak of the Khangai range, a pilgrimage and trekking gem.",
    },
    {
      spot: "Ulaagchinii Khar Lake", slug: "ulaagchinii-khar-nuur", price: 380, discount: 420,
      day: 5, night: 4, featured: false, file: img("tour", "mongolia", "nuur.jpeg"),
      shortDescription: "A serene freshwater lake surrounded by sand dunes and steppe.",
    },
    {
      spot: "Altai Tavan Bogd National Park", slug: "altai-tavan-bogd", price: 600, discount: 650,
      day: 7, night: 6, featured: true, file: img("tour", "mongolia", "altai-tawan.jpg"),
      shortDescription: "Mongolia's highest peaks, glaciers and Kazakh eagle-hunter culture.",
    },
    {
      spot: "Tsambagarav Mountain", slug: "tsambagarav", price: 550, discount: 600,
      day: 6, night: 5, featured: false, file: img("tour", "mongolia", "tsambagarav.jpg"),
      shortDescription: "Glacier-topped massif on the border of Bayan-Ölgii and Khovd.",
    },
  ];
  for (const t of tours) {
    const image = await upload(t.file, t.spot);
    await payload.create({
      collection: "tours",
      data: {
        spot: t.spot, slug: t.slug, country: "MONGOLIA", image,
        price: t.price, discount: t.discount, day: t.day, night: t.night,
        totalCountry: 1, featured: t.featured, shortDescription: t.shortDescription,
        description: rich(`${t.spot} — ${t.shortDescription} Experience the wild beauty of Mongolia with expert local guides, comfortable camps and unforgettable landscapes.`),
        highlights: [
          { text: "Experienced local guides" },
          { text: "All park entrance fees" },
          { text: "Authentic ger camp stays" },
        ],
        included: [{ text: "Accommodation" }, { text: "Meals (breakfast, lunch, dinner)" }, { text: "Transport in 4x4" }],
        excluded: [{ text: "International flights" }, { text: "Travel insurance" }, { text: "Personal expenses" }],
        itinerary: [
          { title: "Day 1: Arrival & departure from Ulaanbaatar", details: "Drive into the countryside and set up the first camp." },
          { title: "Day 2: Exploration", details: "Full-day guided exploration of the area's highlights." },
          { title: "Final day: Return", details: "Return transfer to Ulaanbaatar." },
        ],
      },
    });
  }
  console.log(`✓ ${tours.length} tours seeded`);

  // 3) Destinations (category icons)
  const destinations = [
    { type: "Families Tour", icon: "icon-01.svg" },
    { type: "Young Adults", icon: "icon-02.svg" },
    { type: "Seniors Person", icon: "icon-3.svg" },
    { type: "Bike Tours", icon: "icon-4.svg" },
    { type: "Night Tours", icon: "icon-5.svg" },
    { type: "Hiking & Trekking", icon: "icon-6.svg" },
    { type: "Day Trips", icon: "icon-7.svg" },
    { type: "River Cruises", icon: "icon-8.svg" },
  ];
  for (const d of destinations) {
    const image = await upload(img(d.icon), d.type);
    await payload.create({
      collection: "destinations",
      data: { type: d.type, image, price: 359, quantity: 5 },
    });
  }
  console.log(`✓ ${destinations.length} destinations seeded`);

  // 4) News
  const news = [
    { title: "The top 10 places to travel in Mongolia with your family", slug: "top-10-places-mongolia", file: "news-01.jpg", date: "2026-01-22" },
    { title: "Enrich your mind: nomadic culture and the open steppe", slug: "nomadic-culture-open-steppe", file: "news-02.jpg", date: "2026-01-09" },
    { title: "Exploring the green spaces of the Khangai mountains", slug: "green-spaces-khangai", file: "news-03.jpg", date: "2026-04-08" },
  ];
  for (const n of news) {
    const image = await upload(img("news", n.file), n.title);
    await payload.create({
      collection: "news",
      data: {
        title: n.title, slug: n.slug, image, date: new Date(n.date).toISOString(),
        description: "We offer carefully curated destinations and tours that capture the true essence of Mongolia.",
        body: rich("We offer carefully curated destinations and tours that capture the true essence of Mongolia. Travel with us to discover hidden valleys, alpine lakes and the warm hospitality of nomadic herders."),
        published: true,
      },
    });
  }
  console.log(`✓ ${news.length} news posts seeded`);

  // 5) Team
  const team = [
    { name: "Michel Smith", slug: "michel-smith", file: "09.jpg" },
    { name: "Arden Smith", slug: "arden-smith", file: "10.jpg" },
    { name: "Clover Lilac", slug: "clover-lilac", file: "11.jpg" },
    { name: "Jenny Watson", slug: "jenny-watson", file: "12.jpg" },
  ];
  for (const m of team) {
    const image = await upload(img("team", m.file), m.name);
    await payload.create({
      collection: "team",
      data: {
        name: m.name, slug: m.slug, designation: "Tourist Guide", image,
        bio: `${m.name} is an experienced guide who loves sharing Mongolia's landscapes and culture with travellers.`,
        facebook: "#", twitter: "#", instagram: "#", dribble: "#",
      },
    });
  }
  console.log(`✓ ${team.length} team members seeded`);

  // 6) FAQs
  const faqs = [
    { question: "How do I book a trip?", answer: "Pick a tour, fill in the booking form with your dates and number of guests, and our team will confirm availability and next steps by email." },
    { question: "Can I customize my itinerary?", answer: "Yes. Every tour can be tailored — contact us with your interests, dates and group size and we'll build a custom route." },
    { question: "Is travel insurance included in the package?", answer: "Travel insurance is not included. We strongly recommend arranging comprehensive cover before you travel." },
    { question: "How do I make changes to my booking?", answer: "Just reply to your booking confirmation email or contact us; we'll help adjust dates, guests or the itinerary where possible." },
    { question: "What's included in my travel package?", answer: "Accommodation, meals, ground transport and guiding are included. International flights and personal expenses are not." },
    { question: "Can I pay for my trip in installments?", answer: "Yes, a deposit secures your booking and the balance can be paid in installments before departure." },
  ];
  let order = 0;
  for (const f of faqs) {
    await payload.create({ collection: "faqs", data: { ...f, order: order++ } });
  }
  console.log(`✓ ${faqs.length} FAQs seeded`);

  console.log("\nSeed complete.");
};

run()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
