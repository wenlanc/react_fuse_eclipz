import FuseUtils from '@fuse/utils';
import { showMessage } from 'app/store/actions/fuse';
import axios from 'axios';
import { rootUrl } from 'app/fuse-configs/apiConfig';

export const GET_DOWNLOAD = '[ACCESS CONTROL APP] GET DOWNLOAD';
export const SAVE_DOWNLOAD = '[ACCESS CONTROL APP] SAVE DOWNLOAD';

export function saveDownload(data) {
console.log(data)
	let formData = new FormData();
	formData.append('description', data.description);
	formData.append('filename', data.filename);
	formData.append('file', data.file);
	
	const request = axios.post(`${rootUrl}/api/downloads/save`, formData, {
		onUploadProgress: ProgressEvent => { 
			//setUploadProgress(ProgressEvent.loaded / ProgressEvent.total*100);
		},
		
			headers: {
			  'Content-Type': 'multipart/form-data'
			}
		
	});
	return dispatch =>
		request.then(response => { 
			dispatch({
				type: SAVE_DOWNLOAD,
				payload: response.data
			});
			dispatch(showMessage({ message: 'File Saved' }));
		});
}

export function newDownload() {
	
	return async dispatch => {
		const data = {
			id: 'new'+FuseUtils.generateGUID(),
			filename: '',
			status: 'A',
			description : '',
			file : ''
		};
		dispatch({
			type: GET_DOWNLOAD,
			payload: data
		});
	}
}
