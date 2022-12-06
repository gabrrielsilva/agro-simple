import { client } from "./infra/database.ts";

export const resolvers = {
  Query: {
    calendarioAgricola: async (cultura: string, regiao: string) => {
      await client.connect();
      const calendario = await client
        .queryObject`SELECT id, epoca_plantio, dias_cultivo FROM agro.cultura_regiao cr INNER JOIN agro.cultura c ON c.nome = cr.cultura WHERE cr.cultura = ${cultura} AND regiao = ${regiao}"`;
      await client.end();
      return calendario;
    }
  },
};