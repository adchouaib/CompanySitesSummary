export const monthlyQuery = (monthNumber) => {
    const query = `
    *[_type == "data" && month._ref in *[_type=="month" && monthNumber==${monthNumber}]._id]{
      _id,
      month,
      avancementGlobal,
      evolution,
      retard,
      motif,
      companies,
      zone -> {
      id,
      name
    },
    month -> {
      monthNumber
    }
    }
    `;
    return query;
  };