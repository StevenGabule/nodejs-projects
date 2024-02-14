import { FastifyReply, FastifyRequest } from 'fastify';
import { createRoleBody } from './roles.schemas';
import { createRole } from './roles.services';

export async function createRoleHandler(request:FastifyRequest<{Body: createRoleBody}>, reply: FastifyReply) {
	const applicationId = request.user.applicationId;
	const {name, permissions} = request.body
	const role = await createRole({name,permissions,applicationId})
	return role;
}