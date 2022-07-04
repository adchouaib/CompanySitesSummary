export default {
  name: "data",
  type: "document",
  title: "Data",
  fields: [
    {
      name: "zone",
      type: "reference",
      title: "Zone",
      to: { type: "zone" },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "month",
      type: "reference",
      title: "Month",
      to: { type: "month" },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "avancementGlobal",
      type: "number",
      title: "Avancement global de la zone",
    },
    {
      name: "evolution",
      type: "number",
      title: "Evolution budget de la zone",
    },
    {
      name: "retard",
      type: "number",
      title: "Retard de la zone",
    },
    {
      name: "motif",
      type: "string",
      title: "Motif de retard",
    },
    {
      name: "companies",
      type: "array",
      title: "Les entreprises opérantes",
      of: [{ type: "company" }],
    },
  ],
};
