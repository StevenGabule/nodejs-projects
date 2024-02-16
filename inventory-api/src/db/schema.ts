import {int, mysqlTable, serial, timestamp, varchar} from "drizzle-orm/mysql-core";

export const products = mysqlTable('products', {
  id: serial('id').primaryKey(),
  name: varchar('name', {length: 256}).notNull(),
  sku_number: varchar('sku_number', {length: 256}).notNull(),
  qty: int('qty').default(0),
  rate: varchar('rate', {length: 256}),
  price: varchar('price', { length: 256 }).default("0.00"),
  total_item: varchar('total_item', { length: 256 }).default("0"),
  createdAt: timestamp('created_at'),
  updatedAt: timestamp('updated_at')
});