/**
 * Authorization Roles
 */
const authRoles = {
	superadmin: ['superadmin'],
	admin: ['superadmin', 'admin'],
	user: ['superadmin', 'admin', 'user'],
	onlyGuest: []
};

export default authRoles;
