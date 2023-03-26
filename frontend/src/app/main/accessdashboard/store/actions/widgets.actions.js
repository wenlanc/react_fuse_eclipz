import axios from 'axios';
import { rootUrl } from 'app/fuse-configs/apiConfig';

export const GET_WIDGETS = '[DASHBOARD APP] GET WIDGETS';

export function getWidgets() {
	const request = axios.get(`${rootUrl}/api/dashboard`);

	return dispatch =>
		request.then(response =>
			dispatch({
				type: GET_WIDGETS,
				payload: response.data
			})
		);
}
