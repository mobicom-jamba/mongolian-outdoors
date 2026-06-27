import type { CollectionConfig } from "payload";

export const News: CollectionConfig = {
  slug: "news",
  labels: {
    singular: "News post",
    plural: "News",
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "date", "published"],
    group: "Content",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      index: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      label: "Cover image",
    },
    {
      name: "date",
      type: "date",
      required: true,
      admin: { date: { pickerAppearance: "dayOnly" } },
    },
    {
      name: "description",
      type: "textarea",
      label: "Excerpt",
    },
    {
      name: "body",
      type: "richText",
    },
    {
      name: "published",
      type: "checkbox",
      defaultValue: true,
    },
  ],
};
