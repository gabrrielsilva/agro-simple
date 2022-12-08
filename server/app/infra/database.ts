import { config } from "https://deno.land/std@0.163.0/dotenv/mod.ts";
import postgres from 'https://deno.land/x/postgresjs@v3.3.2/mod.js';

const envVars = await config();

export const sql = postgres(envVars.DATABASE_URL);