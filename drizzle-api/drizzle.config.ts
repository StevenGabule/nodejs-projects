import type{ Config } from 'drizzle-kit'
import dotenv from "dotenv";

dotenv.config();

export default {
  schema: "./src/db/schema.ts",
  out: './src/db/migrations',
  driver: 'mysql2',
  dbCredentials: {
    uri: process.env.DB_URL!,
  },
} satisfies Config