import FuseUtils from '@fuse/utils';
import { showMessage } from 'app/store/actions/fuse';
import axios from 'axios';
import { rootUrl } from 'app/fuse-configs/apiConfig';

export const GET_DOMAIN = '[ACCESS CONTROL APP] GET DOMAIN';
export const SAVE_DOMAIN = '[ACCESS CONTROL APP] SAVE DOMAIN';

export function getDomain(params) {
	const request = axios.get(`${rootUrl}/api/domain`, { params });

	return dispatch =>
		request.then(response => {
			if( response.data && response.data.error) {
				dispatch(showMessage({ message: response.data.error }));
			} else {
				dispatch({
					type: GET_DOMAIN,
					payload: response.data
				})
			}
		}
		);
}

export function saveDomain(data) {
	const request = axios.post(`${rootUrl}/api/domains/save`, data);

	return dispatch =>
		request.then(response => {

			if( response.data && response.data.error) {
				return dispatch(showMessage({ message: response.data.error }));
			} else {
				dispatch(showMessage({ message: 'Domain Saved' }));
				return dispatch({
					type: SAVE_DOMAIN,
					payload: response.data
				});
			}			
		});
}

export function newDomain() {
	const data = {
		id: "new"+FuseUtils.generateGUID(),
		name: 'Untitled',
		status: 'A',
		image: null
	};

	return {
		type: GET_DOMAIN,
		payload: data
	};
}
