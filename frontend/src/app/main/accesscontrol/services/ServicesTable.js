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
import ServicesTableHead from './ServicesTableHead';
import Chip from '@material-ui/core/Chip';

function ServicesTable(props) {
	const dispatch = useDispatch();
	const services = useSelector(({ accesscontrolApp }) => accesscontrolApp.services.data);
	const searchText = useSelector(({ accesscontrolApp }) => accesscontrolApp.services.searchText);

	const authUser = useSelector(({ auth }) => auth.user);

	const [selected, setSelected] = useState([]);
	const [data, setData] = useState(services);
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);
	const [order, setOrder] = useState({
		direction: 'asc',
		id: null
	});

	useEffect(() => {
		dispatch(Actions.getServices());
	}, [dispatch]);

	useEffect(() => {
		if (searchText.length !== 0) {
			setData(_.filter(services, item => item.name.toLowerCase().includes(searchText.toLowerCase())));
			setPage(0);
		} else {
			setData(services);
		}
	}, [services, searchText]);

	function handleRequestSort(event, property) {
		const id = property;
		let direction = 'desc';

		if (order.id === property && order.direction === 'desc') {
			direction = 'asc';
		}

		setOrder({
			direction,
			id
		});
	}

	function handleSelectAllClick(event) {
		if (event.target.checked) {
			setSelected(data.map(n => n.id));
			return;
		}
		setSelected([]);
	}

	function handleClick(item) {
		props.history.push(`/services/${item.id}`);
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
		setPage(value);
	}

	function handleChangeRowsPerPage(event) {
		setRowsPerPage(event.target.value);
	}

	return (
		<div className="w-full flex flex-col">
			<FuseScrollbars className="flex-grow overflow-x-auto">
				<Table className="min-w-xl" aria-labelledby="tableTitle">
					<ServicesTableHead
						numSelected={selected.length}
						order={order}
						onSelectAllClick={handleSelectAllClick}
						onRequestSort={handleRequestSort}
						rowCount={data.length}
						selectedServiceIds = {selected}
						setSelected={setSelected}
					/>

					<TableBody>
						{_.orderBy(
							data,
							[
								o => {
									switch (order.id) {
										case 'domain.name': {
											return o.domain.name;
										}
										default: {
											return o[order.id];
										}
									}
								}
							],
							[order.direction]
						)
							.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							.map(n => {
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
										<TableCell className="w-64 text-center" padding="none">
											<Checkbox
												checked={isSelected}
												onClick={event => event.stopPropagation()}
												onChange={event => handleCheck(event, n.id)}
											/>
										</TableCell>

										<TableCell className="w-52" component="th" scope="row" padding="none">
											{/* <img
												className="w-32 sm:w-48 rounded"
												src="assets/images/logos/gateways.png"
												alt={'Gateways'}
											/> */}
										</TableCell>

										<TableCell component="th" scope="row">
											{n.name}
										</TableCell>

										{ authUser.role=='superadmin' && (<TableCell className="truncate" component="th" scope="row">
										    {n.domain.name}
										</TableCell> )}

										<TableCell className="truncate" component="th" scope="row" style={ {padding:"7px 15px"} }>
											{ n.group_names && n.group_names.length && 
													n.group_names.map((group_name) => (
													<Chip style={{margin:'3px'}} key={group_name} label={ group_name } />
													))
											}
										</TableCell>

										<TableCell component="th" scope="row" align="right">
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
				count={data.length}
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

export default withRouter(ServicesTable);
