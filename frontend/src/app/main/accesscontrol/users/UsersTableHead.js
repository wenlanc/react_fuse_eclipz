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
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../store/actions';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles(theme => ({
	actionsButtonWrapper: {
		background: theme.palette.background.paper
	}
}));

function UsersTableHead(props) {
	const classes = useStyles(props);
	const [selectedUsersMenu, setSelectedUsersMenu] = useState(null);

	const authUser = useSelector(({ auth }) => auth.user);

	const dispatch = useDispatch();
	const { selectedUserIds } = props;

	const createSortHandler = property => event => {
		props.onRequestSort(event, property);
	};

	function openSelectedUsersMenu(event) {
		setSelectedUsersMenu(event.currentTarget);
	}

	function closeSelectedUsersMenu() {
		setSelectedUsersMenu(null);
	}

	let rows = [
		{
			id: 'image',
			align: 'left',
			disablePadding: true,
			label: '',
			sort: false
		},
		{
			id: 'name',
			align: 'left',
			disablePadding: false,
			label: 'Name',
			sort: true
		},
		{
			id: 'groups',
			align: 'left',
			disablePadding: false,
			label: 'Group',
			sort: true
		},
		{
			id: 'status',
			align: 'right',
			disablePadding: false,
			label: 'Active',
			sort: true
		}
	];

	if(authUser.role == 'superadmin') {
		rows = [
			{
				id: 'image',
				align: 'left',
				disablePadding: true,
				label: '',
				sort: false
			},
			{
				id: 'name',
				align: 'left',
				disablePadding: false,
				label: 'Name',
				sort: true
			},
			{
				id: 'domains',
				align: 'left',
				disablePadding: false,
				label: 'Domain',
				sort: true
			},
			{
				id: 'groups',
				align: 'left',
				disablePadding: false,
				label: 'Group',
				sort: true
			},
			{
				id: 'status',
				align: 'right',
				disablePadding: false,
				label: 'Active',
				sort: true
			}
		];
	}

	const [openmodal, setOpenmodal] = React.useState(false);
	const handleClose = () => {
		setOpenmodal(false);
	};

	const handleConfirmRemove = () => {
		dispatch(Actions.removeUsers(selectedUserIds));
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
					/>
					{props.numSelected > 0 && (
						<div
							className={clsx(
								'flex items-center justify-center absolute w-64 top-0 ltr:left-0 rtl:right-0 mx-56 h-64 z-10',
								classes.actionsButtonWrapper
							)}
						>
							<IconButton
								aria-owns={selectedUsersMenu ? 'selectedUsersMenu' : null}
								aria-haspopup="true"
								onClick={openSelectedUsersMenu}
							>
								<Icon>more_horiz</Icon>
							</IconButton>
							<Menu
								id="selectedUsersMenu"
								anchorEl={selectedUsersMenu}
								open={Boolean(selectedUsersMenu)}
								onClose={closeSelectedUsersMenu}
							>
								<MenuList>
									<MenuItem
										onClick={() => {
											closeSelectedUsersMenu();
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
							key={row.id}
							align={row.align}
							padding={row.disablePadding ? 'none' : 'default'}
							sortDirection={props.order._id === row.id ? props.order._direction : false}
						>
							{row.sort && (
								<Tooltip
									title="Sort"
									placement={row.align === 'right' ? 'bottom-end' : 'bottom-start'}
									enterDelay={300}
								>
									<TableSortLabel
										active={props.order._id === row.id}
										direction={props.order._direction}
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

export default UsersTableHead;
