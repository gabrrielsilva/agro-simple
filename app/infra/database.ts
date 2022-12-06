import { config } from "https://deno.land/std@0.163.0/dotenv/mod.ts";
import { Client } from "https://deno.land/x/postgres@v0.17.0/mod.ts";

const envVars = await config();

export const client = new Client(envVars.DATABASE_URL);