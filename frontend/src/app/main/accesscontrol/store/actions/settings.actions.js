import FuseUtils from '@fuse/utils';
import { showMessage } from 'app/store/actions/fuse';
import axios from 'axios';
import { rootUrl } from 'app/fuse-configs/apiConfig';

export const GET_SETTINGS = '[ACCESS CONTROL APP] GET SETTINGS';
export const SAVE_SETTINGS = '[ACCESS CONTROL APP] SAVE SETTINGS';

export function getSettings(domain_id) {
	const request = axios.get(`${rootUrl}/api/settings?domain_id=${domain_id}`);

	return dispatch =>
		request.then(response =>
			{
				dispatch({
					type: GET_SETTINGS,
					payload: response.data
				})
			}
			
		);
}

export function saveSettings(data) {
	const request = axios.post(`${rootUrl}/api/settings/save`, data);

	return dispatch =>
		request.then(response => {
			dispatch(showMessage({ message: 'Settings Saved' }));

			return dispatch({
				type: SAVE_SETTINGS,
				payload: response.data
			});
		});
}
