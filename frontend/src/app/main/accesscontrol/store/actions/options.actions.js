import FuseUtils from '@fuse/utils';
import { showMessage } from 'app/store/actions/fuse';
import axios from 'axios';
import { rootUrl } from 'app/fuse-configs/apiConfig';

export const GET_OPTIONS = '[ACCESS CONTROL APP] GET OPTIONS';
export const SAVE_OPTIONS = '[ACCESS CONTROL APP] SAVE OPTIONS';

export function getOptions() {
	const request = axios.get(`${rootUrl}/api/options`);
	return dispatch =>
		request.then(response =>
			{
				dispatch({
					type: GET_OPTIONS,
					payload: response.data.optionData
				})
			}
		);
}

export function saveOptions(data) {
	const request = axios.post(`${rootUrl}/api/options/save`, data);
	return dispatch =>
		request.then(response => {
			dispatch(showMessage({ message: 'Options Saved' }));
			return dispatch({
				type: SAVE_OPTIONS,
				payload: response.data.optionData
			});
		});
}
