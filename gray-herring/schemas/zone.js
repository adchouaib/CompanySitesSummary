export default {
  name: "zone",
  type: "document",
  title: "Zone",
  readOnly : true,
  fields: [
    {
      name: "id",
      type: "number",
      title: "Id",
      validation: (Rule) => Rule.required().min(0).max(6),
    },
    {
      name: "name",
      type: "string",
      title: "Name",
      validation: (Rule) => Rule.required(),
    },
    {
        name: "image",
        type: "image",
        title: "Image",
        validation: (Rule) => Rule.required(),
    }
  ],
};
