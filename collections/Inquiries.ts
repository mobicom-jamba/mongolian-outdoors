import type { CollectionConfig } from "payload";

export const Inquiries: CollectionConfig = {
  slug: "inquiries",
  labels: {
    singular: "Inquiry",
    plural: "Inquiries",
  },
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "email", "subject", "handled", "createdAt"],
    group: "Submissions",
  },
  access: {
    create: () => true,
    read: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "email", type: "email", required: true },
    { name: "phone", type: "text" },
    { name: "subject", type: "text" },
    { name: "message", type: "textarea", required: true },
    {
      name: "handled",
      type: "checkbox",
      defaultValue: false,
    },
  ],
};
