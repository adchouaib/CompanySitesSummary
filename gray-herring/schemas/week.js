export default {
  name: "week",
  type: "document",
  title: "Week",
  fields: [
    {
      name: "weekNumber",
      type: "number",
      title: "Week Number",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "avancement",
      type: "number",
      title: "Avancement Site",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "retard",
      type: "number",
      title: "Retard sur chantier",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "budget",
      type: "number",
      title: "Budget du Site",
      validation: (Rule) => Rule.required(),
    },
  ],
};
