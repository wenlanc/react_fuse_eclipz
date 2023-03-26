import FuseUtils from '@fuse/utils';
import { showMessage } from 'app/store/actions/fuse';
import axios from 'axios';
import { rootUrl } from 'app/fuse-configs/apiConfig';

export const GET_ADMIN = '[ACCESS CONTROL APP] GET ADMIN';
export const SAVE_ADMIN = '[ACCESS CONTROL APP] SAVE ADMIN';

export function getAdmin(params) {
	const request = axios.get(`${rootUrl}/api/admin`, { params });

	return dispatch =>
		request.then(response =>
			dispatch({
				type: GET_ADMIN,
				payload: response.data
			})
		);
}

export function saveAdmin(data) {

	//let data1 = Object.assign({}, data);
	//delete data1.domain_list;
	const request = axios.post(`${rootUrl}/api/admins/save`, data);

	return dispatch =>
		request.then(response => {

			if(response.data.error) {
				dispatch(showMessage({ message: response.data.error }));
			} else {
				dispatch(showMessage({ message: 'Admin Saved' }));
				return dispatch({
					type: SAVE_ADMIN,
					payload: response.data
				});
			}
		});
}

export function newAdmin() {
	return async dispatch => {
		const domains_response =await axios.get(`${rootUrl}/api/domains`);
		const data = {
			id: 'new'+FuseUtils.generateGUID(),
			name: '',
			email: '',
			status: 'A',
			password: '',
			domain_id: '',
			domain_list : domains_response.data.domains
		};

		dispatch({
			type: GET_ADMIN,
			payload: data
		});
	}
}
