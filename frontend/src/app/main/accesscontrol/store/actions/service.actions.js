import FuseUtils from '@fuse/utils';
import { showMessage } from 'app/store/actions/fuse';
import axios from 'axios';
import { rootUrl } from 'app/fuse-configs/apiConfig';
import fileDownload from 'js-file-download';

export const GET_SERVICE = '[ACCESS CONTROL APP] GET SERVICE';
export const SAVE_SERVICE = '[ACCESS CONTROL APP] SAVE SERVICE';

export function getService(params) {
	const request = axios.get(`${rootUrl}/api/service`, { params });

	return dispatch =>
		request.then(response =>
			dispatch({
				type: GET_SERVICE,
				payload: response.data
			})
		);
}

export function saveService(data, download=false) {
	let data1 = Object.assign({}, data);
	delete data1.domain_list;
	delete data1.group_list;
	const request = axios.post(`${rootUrl}/api/services/save`, data1);

	return dispatch =>
		request.then(response => { 

			if( response.data && response.data.error) {
				return dispatch(showMessage({ message: response.data.error }));
			} else {
				dispatch({
					type: SAVE_SERVICE,
					payload: response.data
				});
				dispatch(showMessage({ message: 'Gateway Saved' }));
				if(download)
				   dispatch(downloadJsonService(response.data.id, response.data.name ));
			}
			
		});
}

export function newService() {
	
	return async dispatch => {
		const domains_response =await axios.get(`${rootUrl}/api/domains?status=active`);
		const groups_response =await axios.get(`${rootUrl}/api/gwgroups?status=active`); 
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
		};
		dispatch({
			type: GET_SERVICE,
			payload: data
		});
	}
}


export function downloadJsonService(id, name) {
	return async dispatch => {
		if(id === parseInt(id, 10)){  // new save
			const request1 = axios.post(`${rootUrl}/api/service/json`, { serviceId: id } );
			request1.then(response => {
				fileDownload(JSON.stringify(response.data), name + '.json');
			 });
		} else {
			//dispatch(showMessage({ message: 'Service Saved' }));
		} 
	}
}

export function emailJsonService(id) {
	return async dispatch => {
		if(id === parseInt(id, 10)){  // new save
			const request1 = axios.post(`${rootUrl}/api/service/email`, { serviceId: id } );
			request1.then(response => {
				dispatch(showMessage({ message: response.data.message }));
			 });
		} else {
			//dispatch(showMessage({ message: 'Service Saved' }));
		} 
	}
}

// export function jsonDownload(id, data, pass) {
// 	return async dispatch => {
// 		if(!(id === parseInt(id, 10))){  // new save
// 			const request1 = axios.post(`${rootUrl}/api/service/json`, { serviceId: data.id, password: pass } );
// 			request1.then(response => {
// 				fileDownload(JSON.stringify(response.data), data.name + '.json');
// 				dispatch(showMessage({ message: 'Service Saved' }));
// 			 });
// 		} else {
// 			dispatch(showMessage({ message: 'Service Saved' }));
// 		} 
// 	}
// }
