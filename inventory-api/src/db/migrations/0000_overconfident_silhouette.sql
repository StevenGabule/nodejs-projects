CREATE TABLE `products` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` varchar(256) NOT NULL,
	`sku_number` varchar(256) NOT NULL,
	`qty` int DEFAULT 0,
	`rate` varchar(256),
	`price` varchar(256) DEFAULT '0.00',
	`total_item` varchar(256) DEFAULT '0',
	`created_at` timestamp,
	`updated_at` timestamp,
	CONSTRAINT `products_id` PRIMARY KEY(`id`)
);
