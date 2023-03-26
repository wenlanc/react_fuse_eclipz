import Checkbox from '@material-ui/core/Checkbox';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Tooltip from '@material-ui/core/Tooltip';
import clsx from 'clsx';
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useSelector, useDispatch } from 'react-redux';
import * as Actions from '../store/actions';

const rows = [
	{
		id: 'image',
		align: 'left',
		disablePadding: true,
		label: '',
		sort: false
	},
	{
		id: 'description',
		align: 'left',
		disablePadding: true,
		label: 'Description',
		sort: true
	},
	{
		id: 'filename',
		align: 'left',
		disablePadding: false,
		label: 'File',
		sort: true
	},
	{
		id: 'date',
		align: 'left',
		disablePadding: false,
		label: 'Date',
		sort: true
	}
];

const useStyles = makeStyles(theme => ({
	actionsButtonWrapper: {
		background: theme.palette.background.paper
	}
}));

function DownloadsTableHead(props) {
	const classes = useStyles(props);
	const dispatch = useDispatch();
	const [selectedDownloadsMenu, setSelectedDownloadsMenu] = useState(null);
	const { selectedDownloadIds } = props;
	const authUser = useSelector(({ auth }) => auth.user);

	const createSortHandler = property => event => {
		props.onRequestSort(event, property);
	};

	
	function openSelectedDownloadsMenu(event) {
		setSelectedDownloadsMenu(event.currentTarget);
	}

	function closeSelectedDownloadsMenu() {
		setSelectedDownloadsMenu(null);
	}

	const [openmodal, setOpenmodal] = React.useState(false);
	const handleClose = () => {
		setOpenmodal(false);
	};

	const handleConfirmRemove = () => {
		dispatch(Actions.removeDownloads(selectedDownloadIds));
		handleClose();
		props.setSelected([]);
	}


	return (
		<>
			<TableHead>
				<TableRow className="h-64">

					<TableCell padding="none" className="relative w-64 text-center">
						<Checkbox
							indeterminate={props.numSelected > 0 && props.numSelected < props.rowCount}
							checked={props.numSelected > 0 && props.numSelected === props.rowCount}
							onChange={props.onSelectAllClick}
							disabled = {authUser.role != 'superadmin'}
						/>
						{props.numSelected > 0 && (
							<div
								className={clsx(
									'flex items-center justify-center absolute w-64 top-0 ltr:left-0 rtl:right-0 mx-56 h-64 z-10',
									classes.actionsButtonWrapper
								)}
							>
								<IconButton
									aria-owns={selectedDownloadsMenu ? 'selectedDownloadsMenu' : null}
									aria-haspopup="true"
									onClick={openSelectedDownloadsMenu}
									disabled = {authUser.role != 'superadmin'}
								>
									<Icon>more_horiz</Icon>
								</IconButton>
								<Menu
									id="selectedDownloadsMenu"
									anchorEl={selectedDownloadsMenu}
									open={Boolean(selectedDownloadsMenu)}
									onClose={closeSelectedDownloadsMenu}
								>
									<MenuList>
										<MenuItem
											onClick={() => {
												closeSelectedDownloadsMenu();
												setOpenmodal(true);;
											}}
										>
											<ListItemIcon className="min-w-40">
												<Icon>delete</Icon>
											</ListItemIcon>
											<ListItemText primary="Remove" />
										</MenuItem>
									</MenuList>
								</Menu>
							</div>
						)}
					</TableCell>
					{rows.map(row => {
						return (
							<TableCell
								className="p-10"
								key={row.id}
								align={row.align}
								padding={row.disablePadding ? 'none' : 'default'}
								sortDirection={props.order.id === row.id ? props.order.direction : false}
							>
								{row.sort && (
									<Tooltip
										title="Sort"
										placement={row.align === 'right' ? 'bottom-end' : 'bottom-start'}
										enterDelay={300}
									>
										<TableSortLabel
											active={props.order.id === row.id}
											direction={props.order.direction}
											onClick={createSortHandler(row.id)}
										>
											{row.label}
										</TableSortLabel>
									</Tooltip>
								)}
							</TableCell>
						);
					}, this)}
				</TableRow>
			</TableHead>

			<Dialog
			open={openmodal}
			onClose={handleClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
			>
			<DialogTitle id="alert-dialog-title">
			{"Warning"}
			</DialogTitle>
			<DialogContent>
			<DialogContentText id="alert-dialog-description">
				Confirm to delete...
			</DialogContentText>
			</DialogContent>
			<DialogActions>
			<Button onClick={handleClose}>Cancel</Button>
			<Button onClick={handleConfirmRemove} autoFocus>
				Confirm
			</Button>
			</DialogActions>
			</Dialog>
		</>
	);
}

export default DownloadsTableHead;
