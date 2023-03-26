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
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import FormHelperText from '@material-ui/core/FormHelperText';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import { statuses } from 'app/fuse-configs/apiConfig';
import { checkValidIP } from 'app/services/helper';
import { showMessage } from 'app/store/actions/fuse';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles(theme => ({
	userImageFeaturedStar: {
		position: 'absolute',
		top: 0,
		right: 0,
		color: orange[400],
		opacity: 0
	},
	userImageUpload: {
		transitionProperty: 'box-shadow',
		transitionDuration: theme.transitions.duration.short,
		transitionTimingFunction: theme.transitions.easing.easeInOut
	},
	userImageItem: {
		transitionProperty: 'box-shadow',
		transitionDuration: theme.transitions.duration.short,
		transitionTimingFunction: theme.transitions.easing.easeInOut,
		'&:hover': {
			'& $userImageFeaturedStar': {
				opacity: 0.8
			}
		},
		'&.featured': {
			pointerEvents: 'none',
			boxShadow: theme.shadows[3],
			'& $userImageFeaturedStar': {
				opacity: 1
			},
			'&:hover $userImageFeaturedStar': {
				opacity: 1
			}
		}
	}
}));

function App(props) {
	const dispatch = useDispatch();
	const app = useSelector(({ accesscontrolApp }) => accesscontrolApp.app);
	const theme = useTheme();

	const classes = useStyles(props);
	const [tabValue, setTabValue] = useState(0);
	const { form, handleChange, setForm } = useForm(null);
	const routeParams = useParams();

	useDeepCompareEffect(() => {
		function updateUserState() {
			const { appId } = routeParams;

			if (appId === 'new') {
				dispatch(Actions.newApp());
			} else {
				dispatch(Actions.getApp(routeParams));
			}
		}

		updateUserState();
	}, [dispatch, routeParams]);

	useEffect(() => {
		if ((app.data && !form) || (app.data && form && app.data.id != form.id)) {
			setForm(app.data);
		}
	}, [form, app.data, setForm]);

	function handleChangeTab(event, value) {
		setTabValue(value);
	}

	function setFeaturedImage(id) {
		setForm(_.set({ ...form }, 'featuredImageId', id));
	}

	function handleUploadChange(e) {
		const file = e.target.files[0];
		if (!file) {
			return;
		}
		const reader = new FileReader();
		reader.readAsBinaryString(file);

		reader.onload = () => {
			setForm(
				_.set({ ...form }, `images`, [
					{
						id: FuseUtils.generateGUID(),
						url: `data:${file.type};base64,${btoa(reader.result)}`,
						type: 'image'
					},
					...form.images
				])
			);
		};

		reader.onerror = () => {
			console.log('error on load image');
		};
	}

	const [openmodal, setOpenmodal] = useState(false);
	const handleClose = () => {
		setOpenmodal(false);
	};

	const handleConfirmRemove = () => {
		Promise.all([
			dispatch(Actions.removeApps([form.id]))
		]).then(() => props.history.push(`/applications`));
		handleClose();
	}

	function canBeSubmitted() {
		return (
			form &&
			form.name &&
			form.name.length > 0 &&
			form.allowed_ips &&
			form.service_id > 0 &&
			!_.isEqual(app.data, form)
		);
	}

	if (
		(!app.data || (app.data && routeParams.appId != app.data.id)) &&
		routeParams.appId !== 'new'
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
									to="/applications"
									color="inherit"
								>
									<Icon className="text-20">
										{theme.direction === 'ltr' ? 'arrow_back' : 'arrow_forward'}
									</Icon>
									<span className="mx-4">Applications</span>
								</Typography>
							</FuseAnimate>

							<div className="flex items-center max-w-full">
								<FuseAnimate animation="transition.expandIn" delay={300}>
									
									<img
										className="w-32 sm:w-48 rounded"
										src="assets/images/logos/applications.png"
										alt={'Applications'}
									/>
									
								</FuseAnimate>
								<div className="flex flex-col min-w-0 mx-8 sm:mc-16">
									<FuseAnimate animation="transition.slideLeftIn" delay={300}>
										<Typography className="text-16 sm:text-20 truncate">
											{form.name ? form.name : 'New Application'}
										</Typography>
									</FuseAnimate>
									<FuseAnimate animation="transition.slideLeftIn" delay={300}>
										<Typography variant="caption">Application Detail</Typography>
									</FuseAnimate>
								</div>
							</div>
						</div>

						<div className="flex min-w-0 mx-8 sm:mc-16">
							<FuseAnimate animation="transition.slideRightIn" delay={300}>
								<Button
									className="mx-8 whitespace-no-wrap normal-case"
									variant="contained"
									color="secondary"
									disabled={!canBeSubmitted()}
									onClick={() => {
										if(form.allowed_ips && !checkValidIP(form.allowed_ips)) {
											dispatch(showMessage({ message: 'IP Address is incorrect!' }));
											return;
										}
										Promise.all([
											dispatch(Actions.saveApp(form))
										]).then(() => props.history.push(`/applications`) )
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
										disabled={routeParams.appId === 'new'}
										onClick={() => setOpenmodal(true)} 
									>
										Remove
									</Button>
							</FuseAnimate>
						</div>
					</div>
				)
			}
			contentToolbar={
				<Tabs
					value={tabValue}
					onChange={handleChangeTab}
					indicatorColor="primary"
					textColor="primary"
					variant="scrollable"
					scrollButtons="auto"
					classes={{ root: 'w-full h-64' }}
				>
					<Tab className="h-64 normal-case" label="Basic Info" />
					{/* <Tab className="h-64 normal-case" label="Application Images" /> */}
					{/* <Tab className="h-64 normal-case" label="Gateway Info" /> */}
				</Tabs>
			}
			content={
				form && (
					<div className="p-16 sm:p-24 max-w-2xl">
						{tabValue === 0 && (
							<div>
								<TextField
									className="mt-8 mb-16 flex w-full sm:w-320 mx-16"
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
								/>

								<TextField
									className="mt-8 mb-16 flex w-full sm:w-320 mx-16"
									error={form.allowed_ips === ''}
									required
									label="Allowed IPs"
									autoFocus
									id="allowed_ips"
									name="allowed_ips"
									value={form.allowed_ips}
									onChange={handleChange}
									variant="outlined"
									fullWidth
								/>

								<FormControl className="mt-8 mb-16 flex w-full sm:w-320 mx-16" variant="outlined">
									<InputLabel htmlFor="category-label-placeholder" required > Gateway </InputLabel>
									<Select
										value={form.service_id}
										name="service_id"
										onChange={handleChange}
										input={
											<OutlinedInput
												labelWidth={'service_id'.length * 9}
												name="service_id"
												id="service_id-label-placeholder"
											/>
										}
										required
									>
										{form.service_list && form.service_list.map(service => (
											<MenuItem value={service.id} key={service.id}>
												{service.name}
											</MenuItem>
										))}
									</Select>
								</FormControl>
								
								{ routeParams.appId != 'new' &&  (<FormControl className="mt-8 mb-16 flex w-full sm:w-320 mx-16" variant="outlined">
									<InputLabel htmlFor="category-label-placeholder"> Status </InputLabel>
									<Select
										value={form.status}
										name="status"
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
								</FormControl> )}

							</div>
						)}
						{/* {tabValue === 1 && (
							<div>
								<div className="flex justify-center sm:justify-start flex-wrap -mx-8">
									<label
										htmlFor="button-file"
										className={clsx(
											classes.userImageUpload,
											'flex items-center justify-center relative w-128 h-128 rounded-4 mx-8 mb-16 overflow-hidden cursor-pointer shadow-1 hover:shadow-5'
										)}
									>
										<input
											accept="image/*"
											className="hidden"
											id="button-file"
											type="file"
											onChange={handleUploadChange}
										/>
										<Icon fontSize="large" color="action">
											cloud_upload
										</Icon>
									</label>
									{form.images.map(media => (
										<div
											onClick={() => setFeaturedImage(media.id)}
											onKeyDown={() => setFeaturedImage(media.id)}
											role="button"
											tabIndex={0}
											className={clsx(
												classes.userImageItem,
												'flex items-center justify-center relative w-128 h-128 rounded-4 mx-8 mb-16 overflow-hidden cursor-pointer shadow-1 hover:shadow-5',
												media.id === form.featuredImageId && 'featured'
											)}
											key={media.id}
										>
											<Icon className={classes.userImageFeaturedStar}>star</Icon>
											<img className="max-w-none w-auto h-full" src={media.url} alt="user" />
										</div>
									))} 
								</div>
							</div>
						)} */}
						{tabValue === 1 && (
							<div>
								
							</div>
						)}
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

export default withReducer('accesscontrolApp', reducer)(App);
