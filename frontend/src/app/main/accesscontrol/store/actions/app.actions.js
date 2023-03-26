import FuseUtils from '@fuse/utils';
import { showMessage } from 'app/store/actions/fuse';
import axios from 'axios';
import { rootUrl } from 'app/fuse-configs/apiConfig';

export const GET_APP = '[ACCESS CONTROL APP] GET APP';
export const SAVE_APP = '[ACCESS CONTROL APP] SAVE APP';

export function getApp(params) {
	const request = axios.get(`${rootUrl}/api/app`, { params });

	return dispatch =>
		request.then(response =>
			dispatch({
				type: GET_APP,
				payload: response.data
			})
		);
}

export function saveApp(data) {
	
	let data1 = Object.assign({}, data);
	delete data1.service_list;
	const request = axios.post(`${rootUrl}/api/apps/save`, data1);

	return dispatch =>
		request.then(response => {
			dispatch(showMessage({ message: response.data.error?response.data.error:'Application Saved' }));

			return dispatch({
				type: SAVE_APP,
				payload: response.data
			});
		});
}

export function newApp() {
	
	return async dispatch => {
		const services_response =await axios.get(`${rootUrl}/api/services`);
		const data = {
			id: 'new'+FuseUtils.generateGUID(),
			name: '',
			status: 'A',
			service_id:'',
			allowed_ips:'',
			service_list : services_response.data.services,
		};
		dispatch({
			type: GET_APP,
			payload: data
		});
	}
}
