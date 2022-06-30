export const weeklyQuery = (weekNumber) => {
    const query = `
    *[_type == "data" && week._ref in *[_type=="week" && weekNumber==${weekNumber}]._id]{
      _id,
      week,
      avancementGlobal,
      evolution,
      retard,
      motif,
      companies,
      zone -> {
      id,
      name
    },
    week -> {
      weekNumber
    }
    }
    `;
    return query;
  };