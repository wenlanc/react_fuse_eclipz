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
import OutlinedInput from '@material-ui/core/OutlinedInput';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import axios from 'axios';
import { rootUrl } from 'app/fuse-configs/apiConfig';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import FormGroup from '@material-ui/core/FormGroup';

const useStyles = makeStyles(theme => ({
	productImageFeaturedStar: {
		position: 'absolute',
		top: 0,
		right: 0,
		color: orange[400],
		opacity: 0
	},
	productImageUpload: {
		transitionProperty: 'box-shadow',
		transitionDuration: theme.transitions.duration.short,
		transitionTimingFunction: theme.transitions.easing.easeInOut
	},
	productImageItem: {
		transitionProperty: 'box-shadow',
		transitionDuration: theme.transitions.duration.short,
		transitionTimingFunction: theme.transitions.easing.easeInOut,
		'&:hover': {
			'& $productImageFeaturedStar': {
				opacity: 0.8
			}
		},
		'&.featured': {
			pointerEvents: 'none',
			boxShadow: theme.shadows[3],
			'& $productImageFeaturedStar': {
				opacity: 1
			},
			'&:hover $productImageFeaturedStar': {
				opacity: 1
			}
		}
	}
}));


function Profile(props) {
	const dispatch = useDispatch();

	const profiles = useSelector(({ accesscontrolApp }) => accesscontrolApp.profiles);
	const profile2fa = useSelector(({ accesscontrolApp }) => accesscontrolApp.profile2fa);
	
	const theme = useTheme();

	const classes = useStyles(props);
	const [tabValue, setTabValue] = useState(0);
	const { form, handleChange, setForm } = useForm(null);
	const routeParams = useParams();

	useDeepCompareEffect(() => {
		function updateProfileState() {
			dispatch(Actions.getProfiles());
		}
		updateProfileState();
	}, [dispatch, routeParams]);

	const [showPassword, setShowPassword] = useState(false);
	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};
	const [showOldPassword, setShowOldPassword] = useState(false);
	const handleClickShowOldPassword = () => {
		setShowOldPassword(!showOldPassword);
	};
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const handleClickShowConfirmPassword = () => {
		setShowConfirmPassword(!showConfirmPassword);
	};

	useEffect(() => {
		if (profiles.data) {
			setForm(profiles.data);
		}
	}, [ profiles.data, setForm]);

	function handleChangeTab(event, value) {
		setTabValue(value);
	}

	const [enabled2FA, setEnabled2FA] = useState(profile2fa.data && profile2fa.data.is2fa?profile2fa.data.is2fa:false);
	const [sendEmail2FA, setSendEmail2FA] = useState(false);
	const [data2fa, setData2fa] = useState(null);
	useEffect(() => {
		if (profile2fa.data) {
			console.log(profile2fa.data);
			setData2fa(profile2fa.data);
			setEnabled2FA(profile2fa.data.is2fa);
		}
	}, [ profile2fa.data ]);

	function handleChangeEnable2FAAuth(event, value) {
		//console.log(event, value);
		//setForm(_.set({ ...form }, 'is2fa', value));
		setEnabled2FA(value=='true'?true:false);
	}
	function handleChangeSendEmail2FA(event, value) {
		//console.log(event, value);
		//setForm(_.set({ ...form }, 'is2fa', value));
		setSendEmail2FA(value);
	}

	function canBeSubmitted() {
		return !_.isEqual(profiles.data, form);
	}

	function handleSubmit() {
		if( tabValue == 2){
			dispatch(Actions.saveProfile2FA({is2fa: enabled2FA, sendEmail2FA}));
		} else {
			dispatch(Actions.saveProfiles(form));
		}
	}

	if (!profiles.data) {
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
					<div className="flex flex-1 w-full items-center justify-between">
						<div className="flex flex-col items-start max-w-full">
							<FuseAnimate animation="transition.slideRightIn" delay={300}>
								<Typography
									className="normal-case flex items-center sm:mb-12"
									color="inherit"
								>
									<span className="mx-2">Profile</span>
								</Typography>
							</FuseAnimate>
						</div>

						{(tabValue != 2) ?
							<FuseAnimate animation="transition.slideRightIn" delay={300}>
								<Button
									className="whitespace-no-wrap normal-case"
									variant="contained"
									color="secondary"
									disabled={!canBeSubmitted()}
									onClick={() => handleSubmit()}
								>
									Save
								</Button>
							</FuseAnimate>
							:
							<FuseAnimate animation="transition.slideRightIn" delay={300}>
								<Button
									className="whitespace-no-wrap normal-case"
									variant="contained"
									color="secondary"
									disabled={ profile2fa.data && profile2fa.data.is2fa == enabled2FA }
									onClick={() => handleSubmit()}
								>
									Save
								</Button>
							</FuseAnimate>
						}

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
					<Tab className="h-64 normal-case" label="Profile" />
					<Tab className="h-64 normal-case" label="Authentication" />
					<Tab className="h-64 normal-case" label="2FA" />
				</Tabs>
			}
			content={
				<>
					{form && (
						<div className="p-16 sm:p-24 max-w-2xl">

							{tabValue === 0 && (
								<div className="p-12">
									<FuseAnimateGroup
											className="flex flex-wrap"
											enter={{
												animation: 'transition.slideUpBigIn'
											}}
										>
											<div className="widget flex w-full sm:w-1/2 md:w-1/2 p-12" style={{
												display:'flex',
												//alignSelf: 'center',
												justifyContent: 'center'
												}}>
												<Paper className="w-full p-12 rounded-8 shadow-none 1border-1">
																										
													<TextField
														className="mt-8 mb-16 sm:w-320 mx-16"
														error={form.name === ''}
														required
														label="Name"
														autoFocus
														id="name"
														name="name"
														value={form.name}
														readOnly
														//onChange={handleChange}
														variant="outlined"
														fullWidth
														autoComplete='off'
													/>

													<FormControl className="mt-8 mb-16 flex w-full sm:w-320 mx-16" variant="outlined">
														<InputLabel htmlFor="domain-label-placeholder"> Domain </InputLabel>
														<Select
															value={form.domain_id}
															name="domain_id"
															readOnly
															//onChange={handleChange}
															input={
																<OutlinedInput
																	labelWidth={'domain_id'.length * 9}
																	name="domain_id"
																	id="domain_id-label-placeholder"
																/>
															}
															required
														>
															{form.domain_list && form.domain_list.map( (item, index) => (
																<MenuItem value={item.id} key={index}>
																	{item.name}
																</MenuItem>
															))}
														</Select>
													</FormControl>

													<TextField
														className="mt-8 mb-16 sm:w-320 mx-16"
														error={form.email === ''}
														required
														label="Email"
														autoFocus
														id="email"
														name="email"
														value={form.email ? form.email : ""}
														readOnly
														onChange={handleChange}
														variant="outlined"
														fullWidth
														autoComplete='off'
													/>


												</Paper>
											</div>

									</FuseAnimateGroup>
								</div>
							)}

							{tabValue === 1 && (
								<div>
									<FormControl sx={{ m: 1, width: '25ch' }} className="mt-8 mb-16 flex w-full sm:w-320 mx-16" variant="outlined">
										<InputLabel htmlFor="outlined-adornment-old-password">Old Password</InputLabel>
										<OutlinedInput
											id="outlined-adornment-old-password"
											type={showOldPassword ? 'text' : 'password'}
											value={form.old_password?form.old_password:""}
											name="old_password"
											onChange={handleChange}
											endAdornment={
												<InputAdornment position="end">
													<IconButton
														aria-label="toggle old password visibility"
														onClick={handleClickShowOldPassword}
														edge="end"
													>
														{showOldPassword ? <VisibilityOff /> : <Visibility />}
													</IconButton>
												</InputAdornment>
											}
											label="Old Password"
											autoComplete='off'
										// autocomplete="new-password"
										/>
									</FormControl>

									<FormControl sx={{ m: 1, width: '25ch' }} className="mt-8 mb-16 flex w-full sm:w-320 mx-16" variant="outlined">
										<InputLabel htmlFor="outlined-adornment-password">New Password</InputLabel>
										<OutlinedInput
											id="outlined-adornment-password"
											type={showPassword ? 'text' : 'password'}
											value={form.password?form.password:""}
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
									</FormControl>

									<FormControl sx={{ m: 1, width: '25ch' }} className="mt-8 mb-16 flex w-full sm:w-320 mx-16" variant="outlined">
										<InputLabel htmlFor="outlined-adornment-confirm-password">Confirm Password</InputLabel>
										<OutlinedInput
											id="outlined-adornment-confirm-password"
											type={showConfirmPassword ? 'text' : 'password'}
											value={form.confirm_password?form.confirm_password:""}
											name="confirm_password"
											onChange={handleChange}
											endAdornment={
												<InputAdornment position="end">
													<IconButton
														aria-label="toggle confirm password visibility"
														onClick={handleClickShowConfirmPassword}
														edge="end"
													>
														{showConfirmPassword ? <VisibilityOff /> : <Visibility />}
													</IconButton>
												</InputAdornment>
											}
											label="Confirm Password"
											autoComplete='off'
										// autocomplete="new-password"
										/>
									</FormControl>
								</div>
							)}

							{tabValue === 2 && (
								<div>

									{/* <FormControlLabel
										className="mt-8 mb-16 flex w-full  sm:w-320 mx-16"
										control={
											<Checkbox
												checked={enabled2FA ? enabled2FA : false}
												onChange={handleChangeEnable2FAAuth}
											/>
										}
										label="Enabled 2 Factor Authentication"
									/> */}

									<FormControl>
										{/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
										<RadioGroup
											aria-labelledby="demo-radio-buttons-group-label"
											value={enabled2FA}
											name="is2fa"
											onChange={handleChangeEnable2FAAuth}
										>

											<FormControl variant="outlined">
												<FormLabel variant="outlined">
													<FormControlLabel
														value={false}
														control={<Radio />}
														label={
															<div className="flex items-center">
																<span className="mx-8">{"Disable 2FA"}</span>
															</div>
														}
													/>
												</FormLabel>
											</FormControl>

											<FormControl variant="outlined">
												<FormLabel variant="outlined" >
													<FormControlLabel
														value={true}
														control={<Radio />}
														label={
															<div className="flex items-center">
																<span className="mx-8">{"Enable 2FA"}</span>
															</div>
														}
													/>
												</FormLabel>
												<FormGroup row >

													{enabled2FA && (!profile2fa.data.is2fa || profile2fa.data.qrcode) && (
														<div>
															<FormControlLabel
																className="mt-8 mb-16 flex w-full  sm:w-320 mx-16"
																control={
																	<Checkbox
																		checked={sendEmail2FA ? sendEmail2FA : false}
																		onChange={handleChangeSendEmail2FA}
																	/>
																}
																label="Send email with QR code"
															/>

															
															{profile2fa.data && profile2fa.data.qrcode ? (
																<div>
																	<Typography className="mt-8 mb-16 flex w-full  mx-16" variant="h6">
																		Scan QR code shown here into your two-factor
																		authenticator app.
																	</Typography>
																	<img className="mt-8 mb-16 flex w-full  sm:w-320 mx-16" src={profile2fa.data.qrcode} />
																</div>
															) : (
																<Typography className="mt-8 mb-16 flex w-full  mx-16" variant="span">
																	Click on Save to Display the QR code
																</Typography>

															)}
														</div>
													)}

												</FormGroup>
											</FormControl>

										</RadioGroup>
									</FormControl>

								</div>
							)}
						</div>
					)}

				</>
			}
			innerScroll
		/>
	);
}

export default withReducer('accesscontrolApp', reducer)(Profile);
