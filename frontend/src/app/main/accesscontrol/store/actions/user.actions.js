import FuseUtils from '@fuse/utils';
import { showMessage } from 'app/store/actions/fuse';
import axios from 'axios';
import { rootUrl } from 'app/fuse-configs/apiConfig';
import fileDownload from 'js-file-download';

export const GET_USER = '[ACCESS CONTROL APP] GET USER';
export const SAVE_USER = '[ACCESS CONTROL APP] SAVE USER';

export function getUser(params) {
	const request = axios.get(`${rootUrl}/api/user`, { params });

	return dispatch =>
		request.then(response =>
			dispatch({
				type: GET_USER,
				payload: response.data
			})
		);
}

export function saveUser(data, download=false) {
	let data1 = Object.assign({}, data);
	delete data1.domain_list;
	delete data1.group_list;
	delete data1.app_list;
	const request = axios.post(`${rootUrl}/api/users/save`, data1);

	return dispatch =>
		request.then(response => {

			if( response.data && response.data.error) {
				return dispatch(showMessage({ message: response.data.error }));
			} else {
				dispatch({
					type: SAVE_USER,
					payload: response.data
				});
				dispatch(showMessage({ message: 'Client Saved' }));
				if(download)
					dispatch(downloadJsonUser( response.data.id, response.data.name ));
			}
		});
}

export function newUser() {
	
	return async dispatch => {
		const domains_response =await axios.get(`${rootUrl}/api/domains`);
		const groups_response =await axios.get(`${rootUrl}/api/groups`); 
		const apps_response =await axios.get(`${rootUrl}/api/apps`); 
		const data = {
			id: 'new'+FuseUtils.generateGUID(),
			name: '',
			email: '',
			status: 'A',
			domain_id: '',
			password: '',
			wg_key: '',
			public_ip : '',
			local_ip : '',
			virtual_ip : '',
			domain_list : domains_response.data.domains,
			group_list : groups_response.data.groups,
			group_ids : [],
			app_list : apps_response.data.apps,
			app_ids : []
		};
		dispatch({
			type: GET_USER,
			payload: data
		});
	}
}
export function downloadJsonUser(id, name) {
	return async dispatch => {
		if(id === parseInt(id, 10)){  // new save
			const request1 = axios.post(`${rootUrl}/api/user/json`, { userId: id } );
			request1.then(response => {
				fileDownload(JSON.stringify(response.data), name + '.json');

			 });
		} else {
			//dispatch(showMessage({ message: 'Client Saved' }));
		} 
	}
}

export function emailJsonUser(id) {
	return async dispatch => {
		if(id === parseInt(id, 10)){  // new save
			const request1 = axios.post(`${rootUrl}/api/user/email`, { userId: id } );
			request1.then(response => {
				dispatch(showMessage({ message: response.data.message }));
			 });
		} else {
			//dispatch(showMessage({ message: 'Client Saved' }));
		} 
	}
}


// export function jsonDownload(id, data, pass) {
// 	return async dispatch => {
// 		if(!(id === parseInt(id, 10))){  // new save
// 			const request1 = axios.post(`${rootUrl}/api/user/json`, { userId: data.id, password: pass } );
// 			request1.then(response => {
// 				fileDownload(JSON.stringify(response.data), data.name + '.json');
// 				dispatch(showMessage({ message: 'Client Saved' }));
// 			 });
// 		} else {
// 			dispatch(showMessage({ message: 'Client Saved' }));
// 		} 
// 	}
// }