import firebaseService from 'app/services/firebaseService';
import jwtService from 'app/services/jwtService';
import * as Actions from 'app/store/actions';
import * as UserActions from './user.actions';
import history from '@history';

export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export function submitLogin({ email, password }) {
	return dispatch =>
		jwtService
			.signInWithEmailAndPassword(email, password)
			.then(response => {
				if(response.is2fa) {
					if(response.message)
						dispatch(Actions.showMessage({ message: response.message }));
					
					// Redirecting to 6 digit code input
					history.push({
						pathname: '/2fa_verify',
						state: { userId: response.userId, userEmail: response.userEmail, token: response.token }
					});

				} else {
					dispatch(UserActions.setUserData(response));
					return dispatch({
						type: LOGIN_SUCCESS
					});
				}
			})
			.catch(error => {
				dispatch(Actions.showMessage({ message: error }));
				return dispatch({
					type: LOGIN_ERROR,
					payload: error
				});
			});
}

export function submitRequest2FAAuth ( { userId, email, verify_code, token }) {
	return dispatch =>
		jwtService
			.request2FAAuth(userId, email, verify_code, token)
			.then(response => {
				
				dispatch(UserActions.setUserData(response));
				return dispatch({
					type: LOGIN_SUCCESS
				});
				
			})
			.catch(error => {
				dispatch(Actions.showMessage({ message: error }));
				return dispatch({
					type: LOGIN_ERROR,
					payload: error
				});
			});
}

export function submitRequestResetPassword({ email }) { 
	return dispatch =>
		jwtService
			.requestResetPassword(email)
			.then(response => {
				return dispatch(Actions.showMessage({ message: response.message }));
			})
			.catch(error => {
				return dispatch(Actions.showMessage({ message: error }));
			});
}

export function submitGetResetToken({ adminId, resetToken }) { 
	return dispatch =>
		jwtService
			.requestGetResetToken({ adminId, resetToken })
			.then(response => { 
				// email , message 
				dispatch(UserActions.setResetPasswordEmail(response.email));
				return dispatch(Actions.showMessage({ message: response.message }));
			})
			.catch(error => {
				return dispatch(Actions.showMessage({ message: error }));
			});
}

export function submitRequestUpdatePassword({ email, password }) { 
	return dispatch =>
		jwtService
			.requestUpdatePassword({ email, password })
			.then(response => {
				return dispatch(Actions.showMessage({ message: response.message }));
			})
			.catch(error => {
				return dispatch(Actions.showMessage({ message: error }));
			});
}

export function submitLoginWithFireBase({ username, password }) {
	if (!firebaseService.auth) {
		console.warn("Firebase Service didn't initialize, check your configuration");

		return () => false;
	}

	return dispatch =>
		firebaseService.auth
			.signInWithEmailAndPassword(username, password)
			.then(() => {
				return dispatch({
					type: LOGIN_SUCCESS
				});
			})
			.catch(error => {
				console.info('error');
				const usernameErrorCodes = [
					'auth/email-already-in-use',
					'auth/invalid-email',
					'auth/operation-not-allowed',
					'auth/user-not-found',
					'auth/user-disabled'
				];
				const passwordErrorCodes = ['auth/weak-password', 'auth/wrong-password'];

				const response = {
					username: usernameErrorCodes.includes(error.code) ? error.message : null,
					password: passwordErrorCodes.includes(error.code) ? error.message : null
				};

				if (error.code === 'auth/invalid-api-key') {
					dispatch(Actions.showMessage({ message: error.message }));
				}

				return dispatch({
					type: LOGIN_ERROR,
					payload: response
				});
			});
}
