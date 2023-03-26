import FuseUtils from '@fuse/utils';
import { showMessage } from 'app/store/actions/fuse';
import axios from 'axios';
import { rootUrl } from 'app/fuse-configs/apiConfig';

export const GET_GROUP = '[ACCESS CONTROL APP] GET GROUP';
export const SAVE_GROUP = '[ACCESS CONTROL APP] SAVE GROUP';

export function getGroup(params) {
	const request = axios.get(`${rootUrl}/api/group`, { params });

	return dispatch =>
		request.then(response =>
			dispatch({
				type: GET_GROUP,
				payload: response.data
			})
		);
}

export function saveGroup(data) {
	let data1 = Object.assign({}, data);
	delete data1.app_list;
	const request = axios.post(`${rootUrl}/api/groups/save`, data1);

	return dispatch =>
		request.then(response => {
			dispatch(showMessage({ message: response.data.error?response.data.error:"Group Saved." }));

			return dispatch({
				type: SAVE_GROUP,
				payload: response.data
			});
		});
}

export function newGroup() {
	return async dispatch => {
		const domains_response =await axios.get(`${rootUrl}/api/domains`);
		const apps_response =await axios.get(`${rootUrl}/api/apps`); 
		const data = {
			id: "new"+FuseUtils.generateGUID(),
			name: '',
			status: 'A',
			app_list : apps_response.data.apps,
			app_ids : [],
			domain_list : domains_response.data.domains,
		};
		dispatch({
			type: GET_GROUP,
			payload: data
		});
	}
}
