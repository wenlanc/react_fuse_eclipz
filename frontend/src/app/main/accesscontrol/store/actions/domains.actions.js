import axios from 'axios';
import { rootUrl } from 'app/fuse-configs/apiConfig';
import { showMessage } from 'app/store/actions/fuse';

export const GET_DOMAINS = '[ACCESS CONTROL APP] GET DOMAINS';
export const SET_DOMAINS_SEARCH_TEXT = '[ACCESS CONTROL APP] SET DOMAINS SEARCH TEXT';
export const REMOVE_DOMAIN = '[ACCESS CONTROL APP] REMOVE DOMAIN';
export const REMOVE_DOMAINS = '[ACCESS CONTROL APP] REMOVE DOMAINS';

export function getDomains() {
	const request = axios.get(`${rootUrl}/api/domains`);

	return dispatch =>
		request.then(response =>
			dispatch({
				type: GET_DOMAINS,
				payload: response.data.domains
			})
		);
}

export function setDomainsSearchText(event) {
	return {
		type: SET_DOMAINS_SEARCH_TEXT,
		searchText: event.target.value
	};
}

export function removeDomain(selectedId) {
	return (dispatch, getState) => {

		const request = axios.post('/api/contacts-app/remove-contact', {
			selectedId
		});

		return request.then(response =>
			Promise.all([
				dispatch({
					type: REMOVE_DOMAIN
				})
			]).then(() => dispatch(getDomains()))
		);
	};
}

export function removeDomains(selectedIds) { 
	return (dispatch, getState) => {

		const request = axios.post(`${rootUrl}/api/domains/delete`, {
			selectedIds
		});

		return request.then(response =>
			Promise.all([
				dispatch({
					type: REMOVE_DOMAINS
				})
			]).then(() => {
				dispatch(showMessage({ message: response.data.message?response.data.message:"Deleted..." }));
				dispatch(getDomains());
			})
		);
	};
}
