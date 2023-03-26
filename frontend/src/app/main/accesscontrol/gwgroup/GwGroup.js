import FuseAnimate from '@fuse/core/FuseAnimate';
import FuseChipSelect from '@fuse/core/FuseChipSelect';
import FuseLoading from '@fuse/core/FuseLoading';
import FusePageCarded from '@fuse/core/FusePageCarded';
import { useForm, useDeepCompareEffect } from '@fuse/hooks';
import FuseUtils from '@fuse/utils';
import _ from '@lodash';
import Button from '@material-ui/core/Button';
import { orange } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import withReducer from 'app/store/withReducer';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import * as Actions from '../store/actions';
import reducer from '../store/reducers';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import { statuses } from 'app/fuse-configs/apiConfig';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles(theme => ({
	
}));

function GwGroup(props) {
	const dispatch = useDispatch();
	const group = useSelector(({ accesscontrolApp }) => accesscontrolApp.gwgroup);
	const theme = useTheme();
	const classes = useStyles(props);
	const { form, handleChange, setForm } = useForm(null);
	const routeParams = useParams();
	const authUser = useSelector(({ auth }) => auth.user);

	useDeepCompareEffect(() => {
		function updateGroupState() {
			const { gwgroupId } = routeParams;
			if (gwgroupId === 'new') {
				dispatch(Actions.newGwGroup());
			} else {
				dispatch(Actions.getGwGroup(routeParams));
			}
		}

		updateGroupState();
	}, [dispatch, routeParams]);

	
	useEffect(() => {
		if ((group.data && !form) || (group.data && form && group.data.id !== form.id)) {
			setForm(group.data);
		}
	}, [form, group.data, setForm]);

	const [openmodal, setOpenmodal] = useState(false);
	const handleClose = () => {
		setOpenmodal(false);
	};

	const handleConfirmRemove = () => {
		Promise.all([
			dispatch(Actions.removeGwGroups([form.id]))
		]).then(() => props.history.push(`/gwgroups`));
		handleClose();
	}

	function canBeSubmitted() {
		if(authUser.role=='superadmin'){
			return form && form.name && form.name.length > 0 && form.domain_id > 0 && !_.isEqual(group.data, form);
		} 
		return form && form.name && form.name.length > 0 && !_.isEqual(group.data, form);
	}
	if (
		(!group.data || (group.data && routeParams.gwgroupId != group.data.id)) &&
		routeParams.gwgroupId !== 'new'
	) {
		return <FuseLoading />;
	}

	return (
		<FusePageCarded
			classes={{
				toolbar: 'p-0',
				header: 'min-h-72 h-72 sm:h-136 sm:min-h-136'
			}}
			header={
				form && (
					<div className="flex flex-1 w-full items-center justify-between max-w-2xl">
						<div className="flex flex-col items-start max-w-full">
							<FuseAnimate animation="transition.slideRightIn" delay={300}>
								<Typography
									className="normal-case flex items-center sm:mb-12"
									component={Link}
									role="button"
									to="/gwgroups"
									color="inherit"
								>
									<Icon className="text-20">
										{theme.direction === 'ltr' ? 'arrow_back' : 'arrow_forward'}
									</Icon>
									<span className="mx-4">Mesh Networks</span>
								</Typography>
							</FuseAnimate>

							<div className="flex items-center max-w-full">
								<div className="flex flex-col min-w-0 mx-8 sm:mc-16">
									<FuseAnimate animation="transition.slideLeftIn" delay={300}>
										<Typography className="text-16 sm:text-20 truncate">
											{form.name ? form.name : 'New Mesh'}
										</Typography>
									</FuseAnimate>
									<FuseAnimate animation="transition.slideLeftIn" delay={300}>
										<Typography variant="caption">Mesh Detail</Typography>
									</FuseAnimate>
								</div>
							</div>
						</div>
						<div className="flex min-w-0 mx-8 sm:mc-16">
							<FuseAnimate animation="transition.slideRightIn" delay={300}>
								<Button
									className="whitespace-no-wrap normal-case"
									variant="contained"
									color="secondary"
									disabled={!canBeSubmitted()}
									onClick={() => {
										Promise.all([
											dispatch(Actions.saveGwGroup(form))
										]).then(() => props.history.push(`/gwgroups`))
									}}
								>
									Save
								</Button>
							</FuseAnimate>
							<FuseAnimate animation="transition.slideRightIn" delay={300}>
								<Button
									className="mx-8 whitespace-no-wrap normal-case"
									variant="contained"
									color="primary"
									disabled={routeParams.gwgroupId === 'new'}
									onClick={() => setOpenmodal(true)}
								>
									Remove
								</Button>
							</FuseAnimate>
						</div>
					</div>
				)
			}
			
			content={
				form && (
					<div className="p-16 sm:p-24 max-w-2xl">
						<div>
							<TextField
								className="mt-8 mb-16 sm:w-320 mx-16"
								error={form.name === ''}
								required
								label="Name"
								autoFocus
								id="name"
								name="name"
								value={form.name}
								onChange={handleChange}
								variant="outlined"
								fullWidth
								autoComplete='off'
							/>

							{ authUser.role=='superadmin' && (<FormControl className="mt-8 mb-16 flex w-full sm:w-320 mx-16" variant="outlined">
								<InputLabel htmlFor="category-label-placeholder" required > Domain </InputLabel>
								<Select
									value={form.domain_id?form.domain_id:0}
									name="domain_id"
									onChange={handleChange}
									input={
										<OutlinedInput
											labelWidth={'domain_id'.length * 9}
											name="domain_id"
											id="domain_id-label-placeholder"
										/>
									}
									required
								>
									{form.domain_list && form.domain_list.map(domain => (
										<MenuItem value={domain.id} key={domain.id}>
											{domain.name}
										</MenuItem>
									))}
								</Select>
							</FormControl> )}

							{ routeParams.gwgroupId != 'new' &&  (<FormControl className="flex w-full sm:w-320 mx-16" variant="outlined">
								<InputLabel htmlFor="category-label-placeholder"> Status </InputLabel>
								<Select
									value={form.status}
									onChange={handleChange}
									input={
										<OutlinedInput
											labelWidth={'status'.length * 9}
											name="status"
											id="status-label-placeholder"
										/>
									}
								>
									{statuses.map(status => (
										<MenuItem disabled={status.value=='D'} value={status.value} key={status.id}>
											{status.label}
										</MenuItem>
									))}
								</Select>
							</FormControl>)}

						</div>
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
					</div>
				)
			}
			innerScroll
		/>
	);
}

export default withReducer('accesscontrolApp', reducer)(GwGroup);
