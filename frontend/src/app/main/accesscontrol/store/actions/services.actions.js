import axios from 'axios';
import { rootUrl } from 'app/fuse-configs/apiConfig';
import { showMessage } from 'app/store/actions/fuse';

export const GET_SERVICES = '[ACCESS CONTROL APP] GET SERVICES';
export const SET_SERVICES_SEARCH_TEXT = '[ACCESS CONTROL APP] SET SERVICES SEARCH TEXT';
export const REMOVE_SERVICE = '[ACCESS CONTROL APP] REMOVE SERVICE';
export const REMOVE_SERVICES = '[ACCESS CONTROL APP] REMOVE SERVICES';

export function getServices( domain_id = '' ) {
	const request = axios.get(`${rootUrl}/api/services`, { params: {domain_id : domain_id} });

	return dispatch =>
		request.then(response =>
			dispatch({
				type: GET_SERVICES,
				payload: response.data.services
			})
		);
}

export function setServiceSearchText(text) {
	return {
		type: SET_SERVICES_SEARCH_TEXT,
		searchText: text
	};
}

export function removeService(selectedId) {
	return (dispatch, getState) => {

		const request = axios.post('/api/contacts-app/remove-contact', {
			selectedId
		});

		return request.then(response =>
			Promise.all([
				dispatch({
					type: REMOVE_SERVICE
				})
			]).then(() => dispatch(getServices()))
		);
	};
}

export function removeServices(selectedIds) { 
	return (dispatch, getState) => {

		const request = axios.post(`${rootUrl}/api/services/delete`, {
			selectedIds
		});

		return request.then(response =>
			Promise.all([
				dispatch({
					type: REMOVE_SERVICES
				})
			]).then(() => {
				dispatch(showMessage({ message: response.data.message?response.data.message:"Deleted..." }));
				dispatch(getServices());
			})
		);
	};
}
