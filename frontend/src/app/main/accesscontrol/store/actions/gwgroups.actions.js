import axios from 'axios';
import { rootUrl } from 'app/fuse-configs/apiConfig';
import { showMessage } from 'app/store/actions/fuse';

export const GET_GWGROUPS = '[ACCESS CONTROL APP] GET GWGROUPS';
export const SET_GWGROUPS_SEARCH_TEXT = '[ACCESS CONTROL APP] SET GWGROUPS SEARCH TEXT';
export const REMOVE_GWGROUP = '[ACCESS CONTROL APP] REMOVE GWGROUP';
export const REMOVE_GWGROUPS = '[ACCESS CONTROL APP] REMOVE GWGROUPS';

export function getGwGroups() {
	const request = axios.get(`${rootUrl}/api/gwgroups`);
	return dispatch =>
		request.then(response =>
			dispatch({
				type: GET_GWGROUPS,
				payload: response.data.groups
			})
		);
}

export function setGwGroupsSearchText(event) {
	return {
		type: SET_GWGROUPS_SEARCH_TEXT,
		searchText: event.target.value
	};
}

export function removeGwGroup(selectedId) {
	return (dispatch, getState) => {

		const request = axios.post('/api/contacts-app/remove-contact', {
			selectedId
		});

		return request.then(response =>
			Promise.all([
				dispatch({
					type: REMOVE_GWGROUP
				})
			]).then(() => dispatch(getGwGroups()))
		);
	};
}

export function removeGwGroups(selectedIds) { 
	return (dispatch, getState) => {

		const request = axios.post(`${rootUrl}/api/gwgroups/delete`, {
			selectedIds
		});

		return request.then(response =>
			Promise.all([
				dispatch({
					type: REMOVE_GWGROUPS
				})
			]).then(() => {
				dispatch(showMessage({ message: response.data.message?response.data.message:"Deleted..." }));
				dispatch(getGwGroups());
			})
		);
	};
}
