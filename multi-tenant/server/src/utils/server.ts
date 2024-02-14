import fastify from 'fastify'
import fastifyGuard from 'fastify-guard';
import { applicationRoutes } from '../modules/applications/applications.routes';
import { roleRoutes } from '../modules/roles/roles.routes';
import { userRoutes } from '../modules/users/users.routes';
import { logger } from './logger';
import jwt from 'jsonwebtoken';

type User = {
	id: string;
	scopes: Array<string>;
	applicationId: string
}

declare module 'fastify' {
	interface FastifyRequest {
		user: User
	}
}

export async function buildServer() {
	const app = fastify({
		logger
	});

	app.decorateRequest('user', null)

	app.addHook('onRequest', async function(request, reply) {
		const authHeader = request.headers.authorization;
		
		if (!authHeader) return;

		try {
			const token = authHeader.replace('Bearer ', '');
			const decoded = jwt.verify(token, 'secret') as User;
			request.user = decoded;
		} catch (e) {
			
		}

	})

	app.register(fastifyGuard, {
		requestProperty: 'user',
		scopeProperty: 'scopes',
		errorHandler: (result, request, reply) => {
			return reply.send('you can not do that.')
		}
	})

	// register plugins
	// register routes
	app.register(applicationRoutes, { prefix: '/api/applications' })
	app.register(userRoutes, { prefix: '/api/users' })
	app.register(roleRoutes, { prefix: '/api/roles' })

	return app ;
}