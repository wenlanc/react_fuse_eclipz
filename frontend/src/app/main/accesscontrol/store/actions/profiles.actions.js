import FuseUtils from '@fuse/utils';
import { showMessage } from 'app/store/actions/fuse';
import axios from 'axios';
import { rootUrl } from 'app/fuse-configs/apiConfig';

export const GET_PROFILES = '[ACCESS CONTROL APP] GET PROFILES';
export const SAVE_PROFILES = '[ACCESS CONTROL APP] SAVE PROFILES';

export const GET_PROFILE2FA = '[ACCESS CONTROL APP] GET GET_PROFILE2FA';
export const SAVE_PROFILE2FA = '[ACCESS CONTROL APP] SAVE PROFILE2FA';

export function getProfiles() {
	const request = axios.get(`${rootUrl}/api/profiles`);

	return dispatch =>
		request.then(response =>
			{
				dispatch({
					type: GET_PROFILES,
					payload: response.data
				});
				dispatch({
					type: GET_PROFILE2FA,
					payload: { is2fa: response.data.is2fa}
				})
			}
			
		);
}

export function saveProfiles(data) {
	const request = axios.post(`${rootUrl}/api/profiles/save`, data);

	return dispatch =>
		request.then(response => {

			if( response.data.error) {
				dispatch(showMessage({ message: response.data.error }));
			} else {
				dispatch(showMessage({ message: 'Profile Saved' }));

				return dispatch({
					type: SAVE_PROFILES,
					payload: response.data
				});
			}
			
		});
}

export function saveProfile2FA(data) {
	const request = axios.post(`${rootUrl}/api/2fasave`, data);

	return dispatch =>
		request.then(response => {

			if( response.data.error) {
				dispatch(showMessage({ message: response.data.error }));
			} else {
				dispatch(showMessage({ message: response.data.message }));

				return dispatch({
					type: SAVE_PROFILE2FA,
					payload: response.data
				});
			}
			
		});
}
