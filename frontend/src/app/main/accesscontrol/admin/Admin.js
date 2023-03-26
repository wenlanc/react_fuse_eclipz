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
import { statuses } from 'app/fuse-configs/apiConfig';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles(theme => ({
	adminImageFeaturedStar: {
		position: 'absolute',
		top: 0,
		right: 0,
		color: orange[400],
		opacity: 0
	},
	adminImageUpload: {
		transitionProperty: 'box-shadow',
		transitionDuration: theme.transitions.duration.short,
		transitionTimingFunction: theme.transitions.easing.easeInOut
	},
	adminImageItem: {
		transitionProperty: 'box-shadow',
		transitionDuration: theme.transitions.duration.short,
		transitionTimingFunction: theme.transitions.easing.easeInOut,
		'&:hover': {
			'& $adminImageFeaturedStar': {
				opacity: 0.8
			}
		},
		'&.featured': {
			pointerEvents: 'none',
			boxShadow: theme.shadows[3],
			'& $adminImageFeaturedStar': {
				opacity: 1
			},
			'&:hover $adminImageFeaturedStar': {
				opacity: 1
			}
		}
	}
}));

function Admin(props) {
	const dispatch = useDispatch();
	const admin = useSelector(({ accesscontrolApp }) => accesscontrolApp.admin);
	const theme = useTheme();

	const classes = useStyles(props);
	const [tabValue, setTabValue] = useState(0);
	const { form, handleChange, setForm } = useForm(null);
	const routeParams = useParams();
	const authUser = useSelector(({ auth }) => auth.user);
	
	const [showPassword, setShowPassword] = useState(false);
	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};

	useDeepCompareEffect(() => {
		function updateAdminState() {
			const { adminId } = routeParams;

			if (adminId === 'new') {
				dispatch(Actions.newAdmin());
			} else {
				dispatch(Actions.getAdmin(routeParams));
			}
		}
		updateAdminState();
	}, [dispatch, routeParams]);

	useEffect(() => {
		if ((admin.data && !form) || (admin.data && form && admin.data.id !== form.id)) {
			setForm(admin.data);
		}
	}, [form, admin.data, setForm]);

	function handleChangeTab(event, value) {
		setTabValue(value);
	}

	function handleChipChange(value, name) {
		setForm(
			_.set(
				{ ...form },
				name,
				value.map(item => item.value)
			)
		);
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
			dispatch(Actions.removeAdmins([form.id]))
		]).then(() => props.history.push(`/admins`));
		handleClose();
	}

	function canBeSubmitted() {
		if(authUser.role == "superadmin") 
			return form.name && form.name.length > 0 && form.domain_id > 0 && !_.isEqual(admin.data, form);
		return form.name && form.name.length > 0 && routeParams.adminId == 'new';
	}

	if (
		(!admin.data || (admin.data && routeParams.adminId != admin.data.id)) &&
		routeParams.adminId !== 'new'
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
									to="/admins"
									color="inherit"
								>
									<Icon className="text-20">
										{theme.direction === 'ltr' ? 'arrow_back' : 'arrow_forward'}
									</Icon>
									<span className="mx-4">Admins</span>
								</Typography>
							</FuseAnimate>

							<div className="flex items-center max-w-full">
								<FuseAnimate animation="transition.expandIn" delay={300}>
					
										<img
											className="w-32 sm:w-48 rounded"
											src="assets/images/logos/admins.png"
											alt={form.name}
										/>
									
								</FuseAnimate>
								<div className="flex flex-col min-w-0 mx-8 sm:mc-16">
									<FuseAnimate animation="transition.slideLeftIn" delay={300}>
										<Typography className="text-16 sm:text-20 truncate">
											{form.name ? form.name : 'New Admin'}
										</Typography>
									</FuseAnimate>
									<FuseAnimate animation="transition.slideLeftIn" delay={300}>
										<Typography variant="caption">Admin Detail</Typography>
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
											dispatch(Actions.saveAdmin(form))
										]).then(() => props.history.push(`/admins`))
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
									disabled={routeParams.adminId === 'new'}
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
					{/* <Tab className="h-64 normal-case" label="Admin Images" /> */}
					{ routeParams.adminId !== 'new' && (<Tab className="h-64 normal-case" label="Activity" />) }
				</Tabs>
			}
			content={
				form && (
					<div className="p-16 sm:p-24 max-w-2xl">
						{tabValue === 0 && (
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
									//autoComplete='off'
									autoComplete="new-password"
								/>

								<TextField
									className="mt-8 mb-16 flex w-full sm:w-320 mx-16"
									label="Email"
									//autoFocus
									id="email"
									name="email"
									value={form.email?form.email:""}
									onChange={handleChange}
									variant="outlined"
									fullWidth
									//autoComplete='off'
									autoComplete="new-password"
								/>

								<FormControl sx={{ m: 1, width: '25ch' }} className="mt-8 mb-16 flex w-full sm:w-320 mx-16" variant="outlined">
									<InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
									<OutlinedInput
										id="outlined-adornment-password"
										type={showPassword ? 'text' : 'password'}
										value={form.password}
										name="password"
										onChange={handleChange}
										endAdornment={
										<InputAdornment position="end">
											<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											edge="end"
											>
											{showPassword ? <VisibilityOff /> : <Visibility />}
											</IconButton>
										</InputAdornment>
										}
										label="Password"
										//autoComplete='off'
										autoComplete="new-password"
									/>
								</FormControl>

								{ authUser.role == 'superadmin' && (<FormControl className="mt-8 mb-16 flex w-full sm:w-320 mx-16" variant="outlined">
									<InputLabel htmlFor="category-label-placeholder" required > Domain </InputLabel>
									<Select
										value={form.domain_id}
										onChange={handleChange}
										input={
											<OutlinedInput
												labelWidth={'domain_id'.length * 9}
												name="domain_id"
												id="domain_id-label-placeholder"
											/>
										}
									>
										{form.domain_list && form.domain_list.map(domain => (
											<MenuItem value={domain.id} key={domain.id}>
												{domain.name}
											</MenuItem>
										))}
									</Select>
								</FormControl> )}
								
								{ routeParams.adminId != 'new' &&  (<FormControl className="mt-8 mb-16 flex w-full sm:w-320 mx-16" variant="outlined">
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
						)}
						{/* {tabValue === 1 && (
							<div>
								<div className="flex justify-center sm:justify-start flex-wrap -mx-8">
									<label
										htmlFor="button-file"
										className={clsx(
											classes.adminImageUpload,
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

									{ form.images && form.images.map(media => (
										<div
											onClick={() => setFeaturedImage(media.id)}
											onKeyDown={() => setFeaturedImage(media.id)}
											role="button"
											tabIndex={0}
											className={clsx(
												classes.adminImageItem,
												'flex items-center justify-center relative w-128 h-128 rounded-4 mx-8 mb-16 overflow-hidden cursor-pointer shadow-1 hover:shadow-5',
												media.id === form.featuredImageId && 'featured'
											)}
											key={media.id}
										>
											<Icon className={classes.adminImageFeaturedStar}>star</Icon>
											<img className="max-w-none w-auto h-full" src={media.url} alt="admin" />
										</div>
									))}

								</div>
							</div>
						)} */}

						{tabValue === 1 && (
							<div>
								<Paper className="w-full rounded-8 shadow-none border-1">
									<div className="flex items-center justify-between px-16 h-64 border-b-1">
										<Typography className="text-16">Sessions</Typography>
										<Typography className="text-11 font-500 rounded-4 text-white bg-blue px-8 py-4">
											most recent 5 sessions 
										</Typography>
									</div>
									<div className="table-responsive">
										<Table className="w-full min-w-full" size="small">
											<TableHead>
												<TableRow>
													
													<TableCell className="whitespace-no-wrap">
														Start Time
													</TableCell>
													<TableCell className="whitespace-no-wrap">
														End Time
													</TableCell>
													<TableCell className="whitespace-no-wrap">
														Status
													</TableCell>
																
												</TableRow>
											</TableHead>
											<TableBody>
												{ form.sessions_recent && form.sessions_recent.map(row => (
													<TableRow key={row.id}>
														
														<TableCell
															component="th"
															scope="row"
															className="truncate"
														>
															{row.start_time}
														</TableCell>
														<TableCell
															component="th"
															scope="row"
															className="truncate"
														>
															{row.end_time}
														</TableCell>
														<TableCell
															component="th"
															scope="row"
															className="truncate"
														>
															{row.status=='A' ? (
																<Icon className="text-green text-20">check_circle</Icon>
																) : (
																	<Icon className="text-red text-20">remove_circle</Icon>
																)}
														</TableCell>
																	
													</TableRow>
												))}
											</TableBody>
										</Table>
									</div>
								</Paper>
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

export default withReducer('accesscontrolApp', reducer)(Admin);
