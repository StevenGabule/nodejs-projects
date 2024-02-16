import type {Config} from 'drizzle-kit'

const dotenv = require("dotenv");
dotenv.config();

export default {
  schema: "./src/db/schema.ts",
  out: './src/db/migrations',
  driver: 'mysql2',
  dbCredentials: {
    uri: "mysql://root:root@127.0.0.1:3306/inventory_app_db",
  },
} satisfies Config