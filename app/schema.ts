export const typeDefs = `
  type Cultura {
    nome: String!
    dias_cultivo: String!
  }

  type Regiao {
    nome: String!
  }

  type CalendarioAgricola {
    cultura: Cultura!,
    regiao: Regiao!,
    epoca_plantio: String!
  }

  type Query {
    calendarioAgricola: [CalendarioAgricola!]!
      calendario(cultura: String, regiao: String): CalendarioAgricola
  }
`;