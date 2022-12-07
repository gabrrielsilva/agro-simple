import { serve } from "https://deno.land/std@0.167.0/http/server.ts";
import { sql } from './infra/database.ts';

serve(handler, { port: 3000 });
console.log("Server is running");

async function handler(req: Request): Promise<Response> {
  const url = new URL(req.url).pathname;
  const method = req.method;
  const body = JSON.parse(await req.text());

  if (url === "/" && method === "POST") {
    const { cultura, regiao } = body;
    const [calendarioCultivo] = await sql`SELECT id, epoca_plantio, dias_cultivo FROM agro.cultura_regiao cr INNER JOIN agro.cultura c ON c.nome = cr.cultura WHERE cr.cultura = ${cultura} AND regiao = ${regiao}`;

    return new Response(JSON.stringify(calendarioCultivo), {
      status: 200,
      headers: {
        "content-type": "application/json; charset=utf-8",
      },
    });
  }

  return new Response(JSON.stringify({ message: "NOT FOUND" }), {
    status: 404,
    headers: {
      "content-type": "application/json; charset=utf-8",
    },
  });
}