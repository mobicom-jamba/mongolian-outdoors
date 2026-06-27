import type { CollectionConfig } from "payload";

export const Tours: CollectionConfig = {
  slug: "tours",
  admin: {
    useAsTitle: "spot",
    defaultColumns: ["spot", "country", "price", "day", "featured"],
    group: "Content",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "spot",
      type: "text",
      required: true,
      label: "Tour name / Spot",
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      index: true,
      admin: {
        description: "URL path, e.g. otgontenger -> /tour-details/otgontenger",
      },
    },
    {
      name: "country",
      type: "text",
      defaultValue: "MONGOLIA",
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
      label: "Cover image",
    },
    {
      name: "gallery",
      type: "array",
      label: "Photo gallery",
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
        },
      ],
    },
    {
      type: "row",
      fields: [
        { name: "price", type: "number", required: true },
        { name: "discount", type: "number", label: "Original / strike price" },
      ],
    },
    {
      type: "row",
      fields: [
        { name: "day", type: "number", label: "Days", required: true },
        { name: "night", type: "number", label: "Nights", required: true },
      ],
    },
    {
      name: "totalCountry",
      type: "number",
      defaultValue: 1,
      admin: { description: "Number of countries covered" },
    },
    {
      name: "shortDescription",
      type: "textarea",
    },
    {
      name: "description",
      type: "richText",
    },
    {
      name: "highlights",
      type: "array",
      fields: [{ name: "text", type: "text" }],
    },
    {
      name: "included",
      type: "array",
      label: "What's included",
      fields: [{ name: "text", type: "text" }],
    },
    {
      name: "excluded",
      type: "array",
      label: "What's not included",
      fields: [{ name: "text", type: "text" }],
    },
    {
      name: "itinerary",
      type: "array",
      label: "Day-by-day itinerary",
      fields: [
        { name: "title", type: "text" },
        { name: "details", type: "textarea" },
      ],
    },
    {
      name: "featured",
      type: "checkbox",
      label: "Show as featured / hot deal",
      defaultValue: false,
    },
  ],
};
