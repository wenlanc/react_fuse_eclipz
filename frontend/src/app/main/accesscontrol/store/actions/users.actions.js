import axios from 'axios';
import { rootUrl } from 'app/fuse-configs/apiConfig';
import { showMessage } from 'app/store/actions/fuse';

export const GET_USERS 						  = '[ACCESS CONTROL APP] GET USERS';
export const SET_USERS_SEARCH_TEXT 			  = '[ACCESS CONTROL APP] SET USERS SEARCH TEXT';
export const REMOVE_USER					  = '[ACCESS CONTROL APP] REMOVE USER';
export const REMOVE_USERS 					  = '[ACCESS CONTROL APP] REMOVE USERS';

export const SET_USERS_PAGINATION_ROWSPERPAGE = '[ACCESS CONTROL APP] SET USERS PAGINATION ROWSPERPAGE';
export const SET_USERS_PAGINATION_CURRENTPAGE = '[ACCESS CONTROL APP] SET USERS PAGINATION CURRENTPAGE';
export const SET_USERS_PAGINATION_TOTALITEMS  = '[ACCESS CONTROL APP] SET USERS PAGINATION TOTALITEMS';
export const SET_USERS_PAGINATION_TOTALPAGES  = '[ACCESS CONTROL APP] SET USERS PAGINATION TOTALPAGES';
export const SET_USERS_PAGINATION_ORDER       = '[ACCESS CONTROL APP] SET USERS PAGINATION ORDER';

export function getUsers( currentPage, rowsPerPage, sort, searchText, domain_id="") {

	let request = axios.get(`${rootUrl}/api/users?page=${currentPage}&size=${rowsPerPage}&search_text=${searchText}&sort_column=${sort._id}&sort_direction=${sort._direction}&domain_id=${domain_id}`);
	return dispatch =>
		request.then(response =>{
				dispatch({
					type: GET_USERS,
					payload: response.data.users
				});

				dispatch( setUsersPaginationTotalItems( response.data.totalItems ));
				dispatch( setUsersPaginationTotalPages( response.data.totalPages ));
			}
		);
}

export function setUsersSearchText(text) {
	return {
		type: SET_USERS_SEARCH_TEXT,
		searchText: text
	};
}

export function setUsersPaginationRowsPerPage( rowsPerPage ) {
	return {
		type: SET_USERS_PAGINATION_ROWSPERPAGE,
		payload: rowsPerPage
	};
}

export function setUsersPaginationCurrentPage( currentPage ) {
	return {
		type: SET_USERS_PAGINATION_CURRENTPAGE,
		payload: currentPage
	};
}

export function setUsersPaginationTotalItems( totalItems ) {
	return {
		type: SET_USERS_PAGINATION_TOTALITEMS,
		payload: totalItems
	};
}

export function setUsersPaginationTotalPages( totalPages ) {
	return {
		type: SET_USERS_PAGINATION_TOTALPAGES,
		payload: totalPages
	};
}

export function setUsersPaginationOrder( order ) {
	return {
		type: SET_USERS_PAGINATION_ORDER,
		payload: order
	};
}

export function removeUser(selectedId) {
	return (dispatch, getState) => {

		const request = axios.post('/api/contacts-app/remove-contact', {
			selectedId
		});

		return request.then(response =>
			Promise.all([
				dispatch({
					type: REMOVE_USER
				})
			]).then(() => dispatch(getUsers()))
		);
	};
}

export function removeUsers(selectedIds) { 
	return (dispatch, getState) => {

		const request = axios.post(`${rootUrl}/api/users/delete`, {
			selectedIds
		});

		return request.then(response =>
			Promise.all([
				dispatch({
					type: REMOVE_USERS
				})
			]).then(() => {
				dispatch(showMessage({ message: response.data.message?response.data.message:"Deleted..." }));
				dispatch(getUsers(0, 10, { _id:"name" , _direction:"ASC"}, ''));
			})
		);
	};
}
