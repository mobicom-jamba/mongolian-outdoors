import type { CollectionConfig } from "payload";

export const Destinations: CollectionConfig = {
  slug: "destinations",
  admin: {
    useAsTitle: "type",
    defaultColumns: ["type", "price", "quantity"],
    group: "Content",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "type",
      type: "text",
      required: true,
      label: "Category name",
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      label: "Icon / image",
    },
    {
      name: "price",
      type: "number",
    },
    {
      name: "quantity",
      type: "number",
      label: "Number of tours",
    },
  ],
};
