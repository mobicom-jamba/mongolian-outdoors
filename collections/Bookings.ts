import type { CollectionConfig } from "payload";

export const Bookings: CollectionConfig = {
  slug: "bookings",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "tour", "date", "status", "createdAt"],
    group: "Submissions",
  },
  access: {
    // Anyone can create a booking (public form); only admins read/manage.
    create: () => true,
    read: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "email", type: "email", required: true },
    { name: "phone", type: "text" },
    {
      name: "tour",
      type: "relationship",
      relationTo: "tours",
    },
    { name: "date", type: "date", label: "Preferred date" },
    { name: "guests", type: "number", defaultValue: 1 },
    { name: "message", type: "textarea" },
    {
      name: "status",
      type: "select",
      defaultValue: "new",
      options: [
        { label: "New", value: "new" },
        { label: "Contacted", value: "contacted" },
        { label: "Confirmed", value: "confirmed" },
        { label: "Cancelled", value: "cancelled" },
      ],
    },
  ],
};
