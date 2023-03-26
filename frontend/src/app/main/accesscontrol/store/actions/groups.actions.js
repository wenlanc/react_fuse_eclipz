import axios from 'axios';
import { rootUrl } from 'app/fuse-configs/apiConfig';
import { showMessage } from 'app/store/actions/fuse';

export const GET_GROUPS = '[ACCESS CONTROL APP] GET GROUPS';
export const SET_GROUPS_SEARCH_TEXT = '[ACCESS CONTROL APP] SET GROUPS SEARCH TEXT';
export const REMOVE_GROUP = '[ACCESS CONTROL APP] REMOVE GROUP';
export const REMOVE_GROUPS = '[ACCESS CONTROL APP] REMOVE GROUPS';

export function getGroups() {
	const request = axios.get(`${rootUrl}/api/groups`);
	return dispatch =>
		request.then(response =>
			dispatch({
				type: GET_GROUPS,
				payload: response.data.groups
			})
		);
}

export function setGroupsSearchText(event) {
	return {
		type: SET_GROUPS_SEARCH_TEXT,
		searchText: event.target.value
	};
}

export function removeGroup(selectedId) {
	return (dispatch, getState) => {

		const request = axios.post('/api/contacts-app/remove-contact', {
			selectedId
		});

		return request.then(response =>
			Promise.all([
				dispatch({
					type: REMOVE_GROUP
				})
			]).then(() => dispatch(getGroups()))
		);
	};
}

export function removeGroups(selectedIds) { 
	return (dispatch, getState) => {

		const request = axios.post(`${rootUrl}/api/groups/delete`, {
			selectedIds
		});

		return request.then(response =>
			Promise.all([
				dispatch({
					type: REMOVE_GROUPS
				})
			]).then(() => {
				dispatch(showMessage({ message: response.data.message?response.data.message:"Deleted..." }));
				dispatch(getGroups());
			})
		);
	};
}
