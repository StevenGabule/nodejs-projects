import {z} from 'zod';
import { ALL_PERMISSIONS } from '../../config/permissions';
import zodToJsonSchema from 'zod-to-json-schema';

const CreateRoleBodySchema = z.object({
	name: z.string(),
	permissions: z.array(z.enum(ALL_PERMISSIONS)),
	// applicationId: z.string().uuid(),
})

export type createRoleBody = z.infer<typeof CreateRoleBodySchema>;

export const createRoleJsonSchema = {
	body: zodToJsonSchema(CreateRoleBodySchema, 'createRoleBodySchema')
}