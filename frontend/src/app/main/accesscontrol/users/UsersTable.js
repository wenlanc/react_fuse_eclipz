import FuseScrollbars from '@fuse/core/FuseScrollbars';
import _ from '@lodash';
import Checkbox from '@material-ui/core/Checkbox';
import Icon from '@material-ui/core/Icon';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as Actions from '../store/actions';
import UsersTableHead from './UsersTableHead';
import Chip from '@material-ui/core/Chip';

function UsersTable(props) {
	const dispatch = useDispatch();

	const users = useSelector(({ accesscontrolApp }) => accesscontrolApp.users.data);
	const searchText = useSelector(({ accesscontrolApp }) => accesscontrolApp.users.searchText);
	const rowsPerPage = useSelector(({ accesscontrolApp }) => accesscontrolApp.users.rowsPerPage);
	const page = useSelector(({ accesscontrolApp }) => accesscontrolApp.users.page);
	const order = useSelector(({ accesscontrolApp }) => accesscontrolApp.users.order);
	const totalItems = useSelector(({ accesscontrolApp }) => accesscontrolApp.users.totalItems);
	const totalPages = useSelector(({ accesscontrolApp }) => accesscontrolApp.users.totalPages);

	const authUser = useSelector(({ auth }) => auth.user);
	const [selected, setSelected] = useState([]);

	//const [data, setData] = useState(users);
	//const [page, setPage] = useState(0);
	//const [rowsPerPage, setRowsPerPage] = useState(10);
	// const [order, setOrder] = useState({
	// 	direction: 'asc',
	// 	id: null
	// });

	// useEffect(() => {
	// 	if (searchText.length !== 0) {
	// 		setData(_.filter(users, item => item.name.toLowerCase().includes(searchText.toLowerCase())));
	// 		setPage(0);
	// 	} else {
	// 		setData(users);
	// 		dispatch(Actions.getUsers(searchDetail, searchText));
	// 	}
	// }, [users, searchText]);

	useEffect(() => {
		dispatch(Actions.getUsers(page, rowsPerPage, order, searchText));
	}, [dispatch, searchText, rowsPerPage, page, order]);

	function handleRequestSort(event, property) {
		const id = property;
		let direction = 'desc';

		if (order._id === property && order._direction === 'desc') {
		 	direction = 'asc';
		 }

		dispatch(Actions.setUsersPaginationOrder( { _id: id, _direction: direction } ));

		// setOrder({
		// 	direction,
		// 	id
		// });

	}

	function handleSelectAllClick(event) {
		if (event.target.checked) {
			setSelected(users.map(n => n.id));
			return;
		}
		setSelected([]);
	}

	function handleClick(item) {
		props.history.push(`/users/${item.id}`);
	}

	function handleCheck(event, id) {
		const selectedIndex = selected.indexOf(id);
		let newSelected = [];

		if (selectedIndex === -1) {
			newSelected = newSelected.concat(selected, id);
		} else if (selectedIndex === 0) {
			newSelected = newSelected.concat(selected.slice(1));
		} else if (selectedIndex === selected.length - 1) {
			newSelected = newSelected.concat(selected.slice(0, -1));
		} else if (selectedIndex > 0) {
			newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
		}

		setSelected(newSelected);
	}

	function handleChangePage(event, value) {
		//setPage(value);
		dispatch(Actions.setUsersPaginationCurrentPage( value ));

		// Promise.all([
		// 	dispatch(Actions.setUsersSearchDetail( { currentPage : value} ))
		// ]).then(() => dispatch(Actions.getUsers(searchDetail, searchText)) );
	}

	function handleChangeRowsPerPage(event) {
		//setRowsPerPage(event.target.value);
		dispatch(Actions.setUsersPaginationRowsPerPage( event.target.value ));

		// Promise.all([
		// 	dispatch(Actions.setUsersSearchDetail( { rowsPerPage : event.target.value} ))
		// ]).then(() => dispatch(Actions.getUsers(searchDetail, searchText)) );
	}

	return (
		<div className="w-full flex flex-col">
			<FuseScrollbars className="flex-grow overflow-x-auto">
				<Table className="min-w-xl" aria-labelledby="tableTitle">
					<UsersTableHead
						numSelected={selected.length}
						order={order}
						onSelectAllClick={handleSelectAllClick}
						onRequestSort={handleRequestSort}
						rowCount={users.length}
						selectedUserIds = {selected}
						setSelected={setSelected}
					/>

					<TableBody>
						{ users.map(n => {
								const isSelected = selected.indexOf(n.id) !== -1;
								return (
									<TableRow
										className="h-36 cursor-pointer"
										hover
										role="checkbox"
										aria-checked={isSelected}
										tabIndex={-1}
										key={n.id}
										selected={isSelected}
										onClick={event => handleClick(n)}
									>
										<TableCell className="w-64 text-center" padding="none" style={ {padding:"7px 15px"} }>
											<Checkbox
												checked={isSelected}
												onClick={event => event.stopPropagation()}
												onChange={event => handleCheck(event, n.id)}
											/>
										</TableCell>

										<TableCell className="w-52" component="th" scope="row" padding="none">
											
												{/*  <img
												 	className="w-full block rounded"
												 	src="assets/images/ecommerce/product-image-placeholder.png"
												 	alt={n.name}
												 /> */}
											
										</TableCell> 

										<TableCell component="th" scope="row">
											{n.name}
										</TableCell>

										{ authUser.role == 'superadmin' && (<TableCell className="truncate" component="th" scope="row" style={ {padding:"7px 15px"} }>
										    {n.domain && n.domain.name}
										</TableCell>)}

										<TableCell className="truncate" component="th" scope="row" style={ {padding:"7px 15px"} }>
											{ n.group_names && n.group_names.length && 
													n.group_names.map((group_name) => (
													<Chip style={{margin:'3px'}} key={group_name} label={ group_name } />
													))
											}
										</TableCell>

										<TableCell component="th" scope="row" align="right" style={ {padding:"7px 15px"} } >
											{n.status == 'A' ? (
												<Icon className="text-green text-20">check_circle</Icon>
											) : (
												<Icon className="text-red text-20">remove_circle</Icon>
											)}
										</TableCell>
									</TableRow>
								);
							})}
					</TableBody>
				</Table>
			</FuseScrollbars>

			<TablePagination
				className="overflow-hidden"
				component="div"
				rowsPerPageOptions={[10, 25]}
				count={totalItems}
				rowsPerPage={rowsPerPage}
				page={page}
				backIconButtonProps={{
					'aria-label': 'Previous Page'
				}}
				nextIconButtonProps={{
					'aria-label': 'Next Page'
				}}
				onChangePage={handleChangePage}
				onChangeRowsPerPage={handleChangeRowsPerPage}
			/>
		</div>
	);
}

export default withRouter(UsersTable);
