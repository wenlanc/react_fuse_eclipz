import { authRoles } from 'app/auth';
import Login from './Login';
import ForgotPasswordPage from './ForgotPasswordPage';
import MailConfirmPage from './MailConfirmPage';
import ResetPasswordPage from './ResetPasswordPage';
import Verify2FAPage from './Verify2FAPage';

const LoginConfig = {
	settings: {
		layout: {
			config: {
				navbar: {
					display: false
				},
				toolbar: {
					display: false
				},
				footer: {
					display: false
				},
				leftSidePanel: {
					display: false
				},
				rightSidePanel: {
					display: false
				}
			}
		}
	},
	auth: authRoles.onlyGuest,
	routes: [
		{
			path: '/login',
			component: Login
		},
		{
			path: '/forgot-password',
			component: ForgotPasswordPage
		},
		{
			path: '/reset-password/:adminId/:resetToken',
			component: ResetPasswordPage
		},
		{
			path: '/mail-confirm',
			component: MailConfirmPage
		},
		{
			path: '/2fa_verify',
			component: Verify2FAPage
		}
	]
};

export default LoginConfig;
