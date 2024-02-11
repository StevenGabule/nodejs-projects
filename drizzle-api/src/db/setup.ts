import dotenv from "dotenv";
dotenv.config();

import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2';

if (!process.env.DB_URL) {
	throw new Error("DB credentials error");
}

// create the connection
const poolConnection = mysql.createPool(process.env.DB_URL as string);

export const db = drizzle(poolConnection);