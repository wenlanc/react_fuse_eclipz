import FuseUtils from '@fuse/utils';
import { showMessage } from 'app/store/actions/fuse';
import axios from 'axios';
import { rootUrl } from 'app/fuse-configs/apiConfig';

export const GET_GWGROUP = '[ACCESS CONTROL APP] GET GWGROUP';
export const SAVE_GWGROUP = '[ACCESS CONTROL APP] SAVE GWGROUP';

export function getGwGroup(params) {
	const request = axios.get(`${rootUrl}/api/gwgroup`, { params });

	return dispatch =>
		request.then(response =>
			dispatch({
				type: GET_GWGROUP,
				payload: response.data
			})
		);
}

export function saveGwGroup(data) {
	const request = axios.post(`${rootUrl}/api/gwgroups/save`, data);

	return dispatch =>
		request.then(response => {
			dispatch(showMessage({ message: 'Mesh Saved' }));

			return dispatch({
				type: SAVE_GWGROUP,
				payload: response.data
			});
		});
}

export function newGwGroup() {
	return async dispatch => {
		const domains_response =await axios.get(`${rootUrl}/api/domains`);
		const data = {
			id: "new"+FuseUtils.generateGUID(),
			name: '',
			status: 'A',
			domain_list : domains_response.data.domains,
		};
		dispatch({
			type: GET_GWGROUP,
			payload: data
		});
	}
}
