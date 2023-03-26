import axios from 'axios';
import { rootUrl } from 'app/fuse-configs/apiConfig';
import fileDownload from 'js-file-download';
import { showMessage } from 'app/store/actions/fuse';

export const GET_DOWNLOADS = '[ACCESS CONTROL APP] GET DOWNLOADS';
export const SET_DOWNLOADS_SEARCH_TEXT = '[ACCESS CONTROL APP] SET DOWNLOADS SEARCH TEXT';
export const REMOVE_DOWNLOAD = '[ACCESS CONTROL APP] REMOVE DOWNLOAD';
export const REMOVE_DOWNLOADS = '[ACCESS CONTROL APP] REMOVE DOWNLOADS';

export function getDownloads() {
	const request = axios.get(`${rootUrl}/api/downloads`);

	return dispatch =>
		request.then(response =>
			dispatch({
				type: GET_DOWNLOADS,
				payload: response.data.downloads
			})
		);
}

export function getDownload(item) {
	const request = axios.get(`${rootUrl}/api/download/${item.filename}`, { responseType: "blob" });

	return dispatch =>
		request.then(response =>
			{
				fileDownload(response.data, item.filename);
			}
		);
}

export function setDownloadsSearchText(event) {
	return {
		type: SET_DOWNLOADS_SEARCH_TEXT,
		searchText: event.target.value
	};
}


export function removeDownload(selectedId) {
	return (dispatch, getState) => {

		const request = axios.post('/api/contacts-app/remove-contact', {
			selectedId
		});

		return request.then(response =>
			Promise.all([
				dispatch({
					type: REMOVE_DOWNLOAD
				})
			]).then(() => dispatch(getDownloads()))
		);
	};
}

export function removeDownloads(selectedIds) { 
	return (dispatch, getState) => {

		const request = axios.post(`${rootUrl}/api/downloads/delete`, {
			selectedIds
		});

		return request.then(response =>
			Promise.all([
				dispatch({
					type: REMOVE_DOWNLOADS
				})
			]).then(() => {
				dispatch(showMessage({ message: 'File Deleted...' }));
				dispatch(getDownloads());
			})
		);
	};
}
