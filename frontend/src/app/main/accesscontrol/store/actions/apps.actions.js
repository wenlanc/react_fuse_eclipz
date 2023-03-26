import axios from 'axios';
import { rootUrl } from 'app/fuse-configs/apiConfig';
import { showMessage } from 'app/store/actions/fuse';

export const GET_APPS = '[ACCESS CONTROL APP] GET APPS';
export const SET_APPS_SEARCH_TEXT = '[ACCESS CONTROL APP] SET APPS SEARCH TEXT';
export const REMOVE_APP = '[ACCESS CONTROL APP] REMOVE APP';
export const REMOVE_APPS = '[ACCESS CONTROL APP] REMOVE APPS';

export function getApps(serviceId) {
	let requestUrl = `${rootUrl}/api/apps`;
	if(serviceId){
		requestUrl = `${rootUrl}/api/apps?service_id=`+serviceId;
	}
	const request = axios.get(requestUrl);

	return dispatch =>
		request.then(response =>
			dispatch({
				type: GET_APPS,
				payload: response.data.apps
			})
		);
}

export function setAppsSearchText(event) {
	return {
		type: SET_APPS_SEARCH_TEXT,
		searchText: event.target.value
	};
}

export function removeApp(selectedId, serviceId) {
	return (dispatch, getState) => {

		const request = axios.post('/api/contacts-app/remove-contact', {
			selectedId
		});

		return request.then(response =>
			Promise.all([
				dispatch({
					type: REMOVE_APP
				})
			]).then(() => dispatch(getApps(serviceId)))
		);
	};
}

export function removeApps(selectedIds, serviceId) { 
	return (dispatch, getState) => {

		const request = axios.post(`${rootUrl}/api/apps/delete`, {
			selectedIds
		});

		return request.then(response =>
			Promise.all([
				dispatch({
					type: REMOVE_APPS
				})
			]).then(() => {
				dispatch(showMessage({ message: response.data.message?response.data.message:"Deleted..." }));
				dispatch(getApps(serviceId));
			})
		);
	};
}
