import { FastifyInstance } from 'fastify';
import { createApplicationJsonSchema } from './applications.schema';
import { createApplicationHandler, getApplicationHandler } from './applications.controller';

export async function applicationRoutes(app:FastifyInstance) {
	app.post('/', {schema: createApplicationJsonSchema}, createApplicationHandler)
	app.get('/', getApplicationHandler)
}