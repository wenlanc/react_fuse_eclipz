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
import DownloadsTableHead from './DownloadsTableHead';
import { rootUrl } from 'app/fuse-configs/apiConfig';
import Typography from '@material-ui/core/Typography';
import FuseAnimate from '@fuse/core/FuseAnimate';
import Tooltip from '@material-ui/core/Tooltip';
import Link from '@material-ui/core/Link';


function DownloadsTable(props) {
	const dispatch = useDispatch();
	const downloads = useSelector(({ accesscontrolApp }) => accesscontrolApp.downloads.data);
	const searchText = useSelector(({ accesscontrolApp }) => accesscontrolApp.downloads.searchText);

	const [data, setData] = useState(downloads);
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);
	const [order, setOrder] = useState({
		direction: 'asc',
		id: null
	});

	const [selected, setSelected] = useState([]);

	useEffect(() => {
		dispatch(Actions.getDownloads());
	}, [dispatch]);

	useEffect(() => {
		if (searchText.length !== 0) {
			setData(_.filter(downloads, item => item.description.toLowerCase().includes(searchText.toLowerCase())));
			setPage(0);
		} else {
			setData(downloads);
		}
	}, [downloads, searchText]);

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

	function handleClick(item) {
		//props.history.push(`/domains/${item.id}`);
		//props.history.push(`/downloads/${item.filename}`);
		dispatch(Actions.getDownload(item));
	}

	function handleChangePage(event, value) {
		setPage(value);
	}

	function handleChangeRowsPerPage(event) {
		setRowsPerPage(event.target.value);
	}

	function handleSelectAllClick(event) {
		if (event.target.checked) {
			setSelected(data.map(n => n.id));
			return;
		}
		setSelected([]);
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
	return (
		<div className="w-full flex flex-col">
			<FuseScrollbars className="flex-grow overflow-x-auto">
				<Table className="min-w-xl" aria-labelledby="tableTitle">
					<DownloadsTableHead
						order={order}
						onRequestSort={handleRequestSort}
						rowCount={data.length}
						numSelected={selected.length}
						onSelectAllClick={handleSelectAllClick}
						selectedDownloadIds = {selected}
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
										hover
										className="h-36 cursor-pointer"
										tabIndex={-1}
										key={n.id}
										role="checkbox"
										aria-checked={isSelected}
										selected={isSelected}
										onClick={event =>  {} }
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
										<TableCell >
											{n.description}
										</TableCell>
										<TableCell >
											<Tooltip
												title="Click to download"
												placement={ 'bottom-end' }
												enterDelay={300}
											>
												<Link onClick={event => handleClick(n)} role="button">
												{n.filename}														
												</Link>
											</Tooltip>
										</TableCell>
										<TableCell component="th" scope="row">
											{n.date}
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

export default withRouter(DownloadsTable);
