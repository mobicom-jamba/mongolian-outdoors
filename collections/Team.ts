import type { CollectionConfig } from "payload";

export const Team: CollectionConfig = {
  slug: "team",
  labels: {
    singular: "Team member",
    plural: "Team",
  },
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "designation"],
    group: "Content",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      index: true,
      admin: {
        description: "URL path, e.g. john-doe -> /team-details/john-doe",
      },
    },
    {
      name: "designation",
      type: "text",
      defaultValue: "Tourist Guide",
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "bio",
      type: "textarea",
    },
    {
      type: "row",
      fields: [
        { name: "facebook", type: "text" },
        { name: "twitter", type: "text" },
        { name: "instagram", type: "text" },
        { name: "dribble", type: "text" },
      ],
    },
  ],
};
