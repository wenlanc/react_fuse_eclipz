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
import AppsTable from '../apps/AppsTable';
import { statuses } from 'app/fuse-configs/apiConfig';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { checkValidEmail } from 'app/services/helper';
import { showMessage } from 'app/store/actions/fuse';

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

function Service(props) {
	const dispatch = useDispatch();
	const service = useSelector(({ accesscontrolApp }) => accesscontrolApp.service);
	const theme = useTheme();

	const authUser = useSelector(({ auth }) => auth.user);

	const classes = useStyles(props);
	const [tabValue, setTabValue] = useState(0);
	const { form, handleChange, setForm } = useForm(null);
	const routeParams = useParams();

	const [showPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const [selectedGroups, setSelectedGroups] = useState([]);
	
	const settings = useSelector(({ accesscontrolApp }) => accesscontrolApp.settings);
	const [enableInputPassword, setEnableInputPassword] = useState(false);
	const [possibleSendingEmail, setPossibleSendingEmail] = useState(false);

	const [openmodal, setOpenmodal] = useState(false);
	const handleClose = () => {
		setOpenmodal(false);
	};
	const handleConfirmSend = () => {
		dispatch(Actions.emailJsonService(form.id))
		handleClose();
	}

	const [openmodalDelete, setOpenmodalDelete] = useState(false);
	const handleCloseDeleteModal = () => {
		setOpenmodalDelete(false);
	};
	const handleConfirmRemove = () => {
		Promise.all([
			dispatch(Actions.removeServices([form.id]))
		]).then(() => props.history.push(`/services`));
		handleCloseDeleteModal();
	}

	useDeepCompareEffect(() => {
		function updateUserState() {
			const { serviceId } = routeParams;

			if (serviceId === 'new') {
				dispatch(Actions.newService());
			} else {
				dispatch(Actions.getService(routeParams));
			}

			dispatch(Actions.getSettings(authUser.domain_id));
		}

		updateUserState();
	}, [dispatch, routeParams]);

	useEffect(() => {
		if ((service.data && !form) || (service.data && form && service.data.id != form.id) ) {
			setForm(service.data);
			if(service.data.group_ids)
				setSelectedGroups( service.data.group_ids.map( item => { 
					let group = service.data.group_list.filter( group => { return group.id == item});
					if( group && group.length)
					return {value: item , label :  group[0].name }; 
				}));
		}
	}, [form, service.data, setForm]);

	useEffect(() => { 
		if(settings && settings.data) {
			setEnableInputPassword(!settings.data.password_generate);
		} 
		if(settings && settings.data) {
			setPossibleSendingEmail( settings.data.email_option && settings.data.email_option != 'disable' );
		} 
	}, [settings]);
	
	function handleChangeTab(event, value) {
		setTabValue(value);
	}

	function setFeaturedImage(id) {
		setForm(_.set({ ...form }, 'featuredImageId', id));
	}

	function handleGroupChipChange(value) { 
		setSelectedGroups(value);
		setForm(
			_.set(
				{ ...form },
				'group_ids',
				value.map(item => item.value)
			)
		);
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

	function canBeSubmitted() {
		if(authUser.role=='superadmin'){
			return form.name && form.name.length > 0 && form.domain_id > 0 && !_.isEqual(service.data, form);
		} 
		return form.name && form.name.length > 0 && !_.isEqual(service.data, form);
	}

	function isNewItem() {
		return !(service.data.id === parseInt(service.data.id, 10));
	}

	const bytesToSize = (bytesStr, decimals = 2) => {
        let bytes = parseFloat(bytesStr);
		if (bytes == NaN || bytes === 0) return '0 Bytes';
		const k = 1024;
		const dm = decimals < 0 ? 0 : decimals;
		const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
		const i = Math.floor(Math.log(bytes) / Math.log(k));
		return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
	 }

	if (
		(!service.data || (service.data && routeParams.serviceId != service.data.id)) &&
		routeParams.serviceId !== 'new'
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
									to="/services"
									color="inherit"
								>
									<Icon className="text-20">
										{theme.direction === 'ltr' ? 'arrow_back' : 'arrow_forward'}
									</Icon>
									<span className="mx-4">Gateways</span>
								</Typography>
							</FuseAnimate>

							<div className="flex items-center max-w-full">
								<FuseAnimate animation="transition.expandIn" delay={300}>
									
									<img
										className="w-32 sm:w-48 rounded"
										src="assets/images/logos/gateways.png"
										alt={form.name}
									/>
									
								</FuseAnimate>
								<div className="flex flex-col min-w-0 mx-8 sm:mc-16">
									<FuseAnimate animation="transition.slideLeftIn" delay={300}>
										<Typography className="text-16 sm:text-20 truncate">
											{form.name ? form.name : 'New Gateway'}
										</Typography>
									</FuseAnimate>
									<FuseAnimate animation="transition.slideLeftIn" delay={300}>
										<Typography variant="caption">Gateway Detail</Typography>
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
										if( form.email && !checkValidEmail(form.email)) {
											dispatch(showMessage({ message: 'Email is invalid!' }));
											return;
										}
										Promise.all([
											dispatch(Actions.saveService(form))
										]).then(() => props.history.push(`/services`) )
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
										disabled={isNewItem()}
										onClick={() => dispatch(Actions.downloadJsonService(form.id, form.name))}
									>
										Download Json
									</Button>
							</FuseAnimate>
							{ possibleSendingEmail && (<FuseAnimate animation="transition.slideRightIn" delay={300}>
								<Button
										className="mx-8 whitespace-no-wrap normal-case"
										variant="contained"
										color="primary"
										disabled={isNewItem()}
										onClick={() => setOpenmodal(true)}
									>
										Email Json
									</Button>
							</FuseAnimate>)}
							<FuseAnimate animation="transition.slideRightIn" delay={300}>
								<Button
										className="mx-8 whitespace-no-wrap normal-case"
										variant="contained"
										color="primary"
										disabled={routeParams.serviceId === 'new'}
										onClick={() => setOpenmodalDelete(true)} 
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
					{/* <Tab className="h-64 normal-case" label="Images" /> */}
					<Tab className="h-64 normal-case" label="Mesh Networks" />
					{ (routeParams.serviceId != "new") && (<Tab className="h-64 normal-case" label="Parameters" />)}
					{ (routeParams.serviceId != "new") && (<Tab className="h-64 normal-case" label="Applications" />)}
					{ (routeParams.serviceId != "new") && (<Tab className="h-64 normal-case" label="Activity" />)}
					
				</Tabs>
			}
			content={
				form && (
					<div className="p-16 sm:p-24 max-w-2xl">
						{tabValue === 0 && (
							<div>
								<TextField
									className="mt-8 flex w-full mb-16 sm:w-320 mx-16"
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

								<TextField
									className="mt-8 flex w-full mb-16 sm:w-320 mx-16"
									label="Email"
									autoFocus
									id="email"
									name="email"
									value={form.email?form.email:""}
									onChange={handleChange}
									variant="outlined"
									fullWidth
									autoComplete='off'
								/>

								{ enableInputPassword && (
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
										autoComplete='off'
										// autocomplete="new-password"
									/>
								</FormControl> )}

								{ authUser.role=='superadmin' && (<FormControl className="mt-8 mb-16 flex w-full sm:w-320 mx-16" variant="outlined">
									<InputLabel htmlFor="category-label-placeholder" required> Domain </InputLabel>
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
								
								{ routeParams.serviceId != 'new' &&  (<FormControl className="mt-8 mb-16 flex w-full sm:w-320 mx-16" variant="outlined">
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
								<FuseChipSelect
									className="w-full my-16 sm:w-320 mx-16"
									value={selectedGroups}
									name="groups"
									onChange={handleGroupChipChange}
									placeholder="Select multiple mesh-networks"
									textFieldProps={{
										label: 'Mesh Networks',
										InputLabelProps: {
											shrink: true
										},
										variant: 'outlined'
									}}
									options={ form.group_list && form.group_list.map(item => ({
										value: item.id,
										label: item.name
									})) }
									isMulti
									isValidNewOption={() => false}
									promptTextCreator={() => false}
								/>
							</div>
						)}
						{tabValue === 2 && routeParams.serviceId != "new" && (
							<div>
								<TextField
									className="mt-8 mb-16 flex w-full sm:w-320 mx-16"
									label="WG Key"
									autoFocus
									id="wg_key"
									name="wg_key"
									value={form.wg_key}
									onChange={handleChange}
									variant="outlined"
									fullWidth
									disabled
								/>

								<TextField
									className="mt-8 mb-16 flex w-full sm:w-320 mx-16"
									label="Public IP"
									autoFocus
									id="public_ip"
									name="public_ip"
									value={form.public_ip}
									onChange={handleChange}
									variant="outlined"
									fullWidth
									disabled
								/>

								<TextField
									className="mt-8 mb-16 flex w-full sm:w-320 mx-16"
									label="Virtual IP"
									autoFocus
									id="virtual_ip"
									name="virtual_ip"
									value={form.virtual_ip}
									onChange={handleChange}
									variant="outlined"
									fullWidth
									disabled
								/>

								<TextField
									className="mt-8 mb-16 flex w-full sm:w-320 mx-16"
									label="Local IP"
									autoFocus
									id="local_ip"
									name="local_ip"
									value={form.local_ip}
									onChange={handleChange}
									variant="outlined"
									fullWidth
									disabled
								/>

							</div>
						)}
						{tabValue === 3 && (routeParams.serviceId != "new") && (
							<div>
								<Typography
									className="normal-case flex items-center alignRight sm:mb-12"
									component={Link}
									role="button"
									to="/applications"
									color="inherit"
									align="right"
								>
									<span className="flex" style={{textDecoration:'underline', marginLeft:'auto'}}>Manage Applications</span>
									<Icon className="text-20">
										{'arrow_forward'}
									</Icon>
								</Typography>

								<AppsTable serviceId={routeParams.serviceId} />
							</div>
						)}

						{tabValue === 4 && (routeParams.serviceId != "new") && (
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

								<FuseAnimateGroup
										className="flex flex-wrap"
										enter={{
											animation: 'transition.slideUpBigIn'
										}}
									>
									<div className="widget flex w-full sm:w-1/2 md:w-1/2 p-12" style={{
										display:'flex',
										alignSelf: 'center',
										justifyContent: 'center'
										}}>
										<Paper className="w-full sm:w-1/2 md:w-1/2 p-12 rounded-8 shadow-none border-1">
											<div className="flex items-center justify-between px-4 pt-4">
											</div>
											<div className="text-center pt-8 pb-12">
												<Typography className="text-36 leading-none text-red">{ form.bytes_total && bytesToSize(form.bytes_total.total_rx)  } </Typography>
												<Typography className="text-16" color="textSecondary">
													RX Bytes
												</Typography>
											</div>
										</Paper>
									</div>
									<div className="widget flex w-full sm:w-1/2 md:w-1/2 p-12" style={{
										display:'flex',
										alignSelf: 'center',
										justifyContent: 'center'
										}}>
										<Paper className="w-full sm:w-1/2 md:w-1/2 p-12 rounded-8 shadow-none border-1">
											<div className="flex items-center justify-between px-4 pt-4">
											</div>
											<div className="text-center pt-8 pb-12">
												<Typography className="text-36 leading-none text-blue">{ form.bytes_total && bytesToSize(form.bytes_total.total_tx)  } </Typography>
												<Typography className="text-16" color="textSecondary">
												TX Bytes
												</Typography>
											</div>
										</Paper>
									</div>
								</FuseAnimateGroup>	

								<Paper className="w-full rounded-8 shadow-none border-1">
									<div className="flex items-center justify-between px-16 h-64 border-b-1">
										<Typography className="text-16">Tunnels</Typography>
										<Typography className="text-11 font-500 rounded-4 text-white bg-blue px-8 py-4">
											Most recent 5 tunnels 
										</Typography>
									</div>
									<div className="table-responsive">
										<Table className="w-full min-w-full" size="small">
											<TableHead>
												<TableRow>
													
													<TableCell className="whitespace-no-wrap">
														Peer
													</TableCell>
													<TableCell className="whitespace-no-wrap">
														RX
													</TableCell>
													<TableCell className="whitespace-no-wrap">
														TX
													</TableCell>
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
												{ form.enclave_list && form.enclave_list.map(row => (
													<TableRow key={row.id}>
														
														<TableCell
															component="th"
															scope="row"
															className="truncate"
														>
															{row.clientuser.name}
														</TableCell>

														<TableCell
															component="th"
															scope="row"
															className="truncate"
														>
															{bytesToSize(row.responder_rxbytes)}
														</TableCell>
														<TableCell
															component="th"
															scope="row"
															className="truncate"
														>
															{bytesToSize(row.responder_txbytes)}
														</TableCell>
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
						{!isNewItem() && service && (
							<Dialog
								open={openmodal}
								onClose={handleClose}
								aria-labelledby="alert-dialog-title"
								aria-describedby="alert-dialog-description"
							>
								<DialogTitle id="alert-dialog-title">
									{"Confirm"}
								</DialogTitle>
								<DialogContent>
									<DialogContentText id="alert-dialog-description">
										Confirm to send config to {service.data.email ? service.data.email : service.data.name + "@" + service.data.domain.name} ...
									</DialogContentText>
								</DialogContent>
								<DialogActions>
									<Button onClick={handleClose}>Cancel</Button>
									<Button onClick={handleConfirmSend} autoFocus>
										Confirm
									</Button>
								</DialogActions>
							</Dialog>
						)}

						<Dialog
							open={openmodalDelete}
							onClose={handleCloseDeleteModal}
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
								<Button onClick={handleCloseDeleteModal}>Cancel</Button>
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

export default withReducer('accesscontrolApp', reducer)(Service);
