import FuseUtils from '@fuse/utils/FuseUtils';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import jwt from 'jsonwebtoken';

/* eslint-disable camelcase */
import { rootUrl } from 'app/fuse-configs/apiConfig';
//import axiosInstance from 'app/services/axios';

//import https from 'https';
const https = require('https');
var fs = require('fs')
const httpsAgent = new https.Agent({

	rejectUnauthorized: false,
	requestCert: false,
	agent: false,
    //requestCert: false,
    //agent: false,
	
})
axios.defaults.httpsAgent = httpsAgent

class JwtService extends FuseUtils.EventEmitter {
	init() {
		this.setInterceptors();
		this.handleAuthentication();

		//axios.defaults.headers.common['Content-Type'] = 'multipart/form-data';
		//delete axios.defaults.headers.common.Authorization;
	}
	setInterceptors = () => {
		axios.interceptors.response.use(
			response => {
				return response;
			},
			err => {
				return new Promise((resolve, reject) => {
					if ( err.response && err.response.status === 401 && err.config && !err.config.__isRetryRequest) {
						// if you ever get an unauthorized response, logout the user
						this.emit('onAutoLogout', 'Invalid access_token');
						this.setSession(null);
					}
					throw err;
				});
			}
		);
	};

	handleAuthentication = () => {
		const access_token = this.getAccessToken();
		if (!access_token) {
			this.emit('onNoAccessToken');
			return;
		}
		if (this.isAuthTokenValid(access_token)) {
			this.setSession(access_token);
			this.emit('onAutoLogin', true);
		} else {
			this.setSession(null);
			this.emit('onAutoLogout', 'access_token expired');
		}
	};

	createUser = data => {
		return new Promise((resolve, reject) => {
			axios.post(`${rootUrl}/api/register`, data).then(response => {
				if (response.data.userData) {
					this.setSession(response.data.token);
					resolve(response.data.userData);
				} else {
					reject(response.data.error);
				}
			});
		});
	};

	signInWithEmailAndPassword = (email, password) => {
		return new Promise((resolve, reject) => {
			axios
				.post(`${rootUrl}/api/login`, {
					email,
					password
				}).then(response => { 
					console.log(response);
					if( response.data.token )
						this.setSession(response.data.token);

					if (response.data.userData) 
						resolve(response.data.userData);
					
					if (response.data.error) 
						reject(response.data.error);

					if (response.data) 
						resolve(response.data);	
				});
		});
	};

	request2FAAuth = (userId, email, verify_code, token) => {
		return new Promise((resolve, reject) => {
			axios
				.post(`${rootUrl}/api/2fa-confirm`, {
					userId,
					email,
					verify_code,
					token
				}).then(response => { 
					console.log(response);
					if( response.data.token )
						this.setSession(response.data.token);

					if (response.data.userData) 
						resolve(response.data.userData);
					
					if (response.data.error) 
						reject(response.data.error);

					if (response.data) 
						reject(response.data);	
				});
		});
	};

	requestResetPassword = (email) => {
		return new Promise((resolve, reject) => {
			axios
				.post(`${rootUrl}/api/request-reset-password`, {
					email
				}).then(response => { 
					console.log(response);
					if (response.data.message) {
						resolve(response.data);
					} else {
						reject(response.data.error);
					}
				});
		});
	};

	requestGetResetToken  = ({ adminId, resetToken }) => {
		return new Promise((resolve, reject) => {
			axios
				.get(`${rootUrl}/api/reset-password/${adminId}/${resetToken}`).then(response => { 
					console.log(response);
					if (response.data) {
						resolve(response.data);
					} else {
						reject(response.data.error);
					}
				});
		});
	};

	requestUpdatePassword  = ({ email, password }) => {
		return new Promise((resolve, reject) => {
			axios
				.post(`${rootUrl}/api/update-password` , {  email, password  } ).then(response => { 
					if (response.data.message) {
						resolve(response.data);
					} else {
						reject(response.data.error);
					}
				});
		});
	};
	

	signInWithToken = () => {
		return new Promise((resolve, reject) => {
			axios
				.post(`${rootUrl}/api/auth/access-token`, {
						access_token: this.getAccessToken()
				})
				.then(response => {
					if (response.data && response.data.userData) {
						this.setSession(response.data.access_token);
						resolve(response.data.userData);
					} else {
						this.logout();
						//Promise.reject(new Error('Failed to login with token.'));
					}
				})
				.catch(error => {
					this.logout();
					//Promise.reject(new Error('Failed to login with token.'));
				});
		});
	};

	updateUserData = user => {
		return axios.post(`${rootUrl}/api/auth/user/update`, {
			user
		});
	};

	setSession = access_token => {
		if (access_token) {
			localStorage.setItem('jwt_access_token', access_token);
			axios.defaults.headers.common.Authorization = `Bearer ${access_token}`;

		} else {
			localStorage.removeItem('jwt_access_token');
			delete axios.defaults.headers.common.Authorization;
		}
	};
	logout = () => {

		axios
			.get(`${rootUrl}/api/logout`)
			.then(response => {
				if (response.data) {
					
				} else {

				}
			})
			.catch(error => {

			});

		this.setSession(null);
		
	};
	isAuthTokenValid = access_token => {
		if (!access_token) {
			return false;
		}
		const decoded = jwtDecode(access_token);
		console.log(decoded)
		//jwt.verify(token, config.secret, async (err, user) => {
		//
		//  })
		const currentTime = Date.now() / 1000;
		if (decoded.exp < currentTime) {
			console.warn('access token expired');
			return false;
		}
		return true;
	};
	getAccessToken = () => {
		return window.localStorage.getItem('jwt_access_token');
	};
}
const instance = new JwtService();
export default instance;
