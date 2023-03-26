import axios from 'axios';
import { rootUrl } from 'app/fuse-configs/apiConfig';
import { showMessage } from 'app/store/actions/fuse';

export const GET_ADMINS = '[ACCESS CONTROL APP] GET ADMINS';
export const SET_ADMINS_SEARCH_TEXT = '[ACCESS CONTROL APP] SET ADMINS SEARCH TEXT';
export const REMOVE_ADMIN = '[ACCESS CONTROL APP] REMOVE ADMIN';
export const REMOVE_ADMINS = '[ACCESS CONTROL APP] REMOVE ADMINS';

export function getAdmins() {
	const request = axios.get(`${rootUrl}/api/admins`);
	return dispatch =>
		request.then(response =>
			dispatch({
				type: GET_ADMINS,
				payload: response.data.admins
			})
		);
}

export function setAdminsSearchText(event) {
	return {
		type: SET_ADMINS_SEARCH_TEXT,
		searchText: event.target.value
	};
}

export function removeAdmin(selectedId) {
	return (dispatch, getState) => {

		const request = axios.post('/api/contacts-app/remove-contact', {
			selectedId
		});
		return request.then(response =>
			Promise.all([
				dispatch({
					type: REMOVE_ADMIN
				})
			]).then(() => dispatch(getAdmins()))
		);
		
	};
}

export function removeAdmins(selectedIds) {
	return (dispatch, getState) => {

		const request = axios.post(`${rootUrl}/api/admins/delete`, {
			selectedIds
		});

		return request.then(response =>
			Promise.all([
				dispatch({
					type: REMOVE_ADMINS
				})
			]).then(() => {
				dispatch(showMessage({ message: response.data.message?response.data.message:"Deleted..." }));
				dispatch(getAdmins());
			})
		);
	};
}
