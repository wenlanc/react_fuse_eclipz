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
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { HexColorPicker } from "react-colorful";
import FuseThemesConfig from 'app/fuse-configs/themesConfig';
import * as FuseActions from 'app/store/actions';
import CustomFuseSettings from './CustomFuseSettings';
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


function Settings(props) {
	const dispatch = useDispatch();
	const settings = useSelector(({ accesscontrolApp }) => accesscontrolApp.settings);
	const options = useSelector(({ accesscontrolApp }) => accesscontrolApp.options);
	const theme = useTheme();
	const colorThemes = Object.keys(FuseThemesConfig);
	const classes = useStyles(props);
	const [tabValue, setTabValue] = useState(0);
	const { form, handleChange, setForm } = useForm(null);
	const { emailForm, handleChange: handleEmailFormChange, setForm: setEmailForm } = useForm(null);
	const { form: uiForm, handleChange: handleUiFormChange, setForm: setUiForm } = useForm(null);
	const routeParams = useParams();
	const authUser = useSelector(({ auth }) => auth.user);
	const fuseSetting = useSelector(({ fuse }) => fuse.settings);

	const defaultFormData = {
		emailHost:"",
		emailUsername:"",
		emailPassword:"",
		isEmailNotification:false,
		possibleSendingEmail:false,
		password_generate:true,
		email_option: 'disable',
		sendgridKey: '',
		emailSender: '',
	};

	useDeepCompareEffect(() => {
		function updateSettingsState() {
			//const { productId } = routeParams;
			dispatch(Actions.getSettings(authUser.domain_id));
			if (authUser.role=='superadmin'){
				dispatch(Actions.getOptions());
				dispatch(Actions.getDomains());
			}
		}
		updateSettingsState();
	}, [dispatch, routeParams]);

	const [showPassword, setShowPassword] = useState(false);
	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};

	useEffect(() => {
		//setForm(settings.data);
	}, [form, setForm]);

	useEffect(() => {
		if(settings.data && Object.keys(settings.data).length > 0 ){ 
			setForm(settings.data);
		}
		else {
			setForm(defaultFormData);
		}
	}, [settings.data]);

	// useEffect(() => {
	// 	if ((settings.data && !form)) {
	// 		setForm(settings.data);
	// 	}
	// }, [form, settings.data, setForm]);

	const [ color, setColor] = useState("#FFFFFF");

	useEffect(() => {
		if ((options.data && !uiForm)) {
			setUiForm(options.data);
		}
	}, [uiForm, options.data, setUiForm]);

	useEffect(() => {
		if (options.data){
			setColor(options.data.welcomeBackgroundColor);
		}
	}, [options.data]);

	useEffect(() => {
		if(uiForm)
		setUiForm(
			_.set({ ...uiForm }, `welcomeBackgroundColor`, color)
		);
	}, [color]);

	function handleChangeTab(event, value) {
		setTabValue(value);
	}

	function canBeSubmitted() {
		if (tabValue == 2 && authUser.role=='superadmin') {
			return !_.isEqual(options.data, uiForm);
		} else {
			return !_.isEqual(settings.data, form);
		}
	}

	function handleChangePasswordAutoGenerate(event, value) {
		setForm(_.set({ ...form }, 'password_generate', value));
	}

	function handleChangeEmailNotification(event, value) {
		setForm(_.set({ ...form }, 'isEmailNotification', value));
	}

	function handleUseBackgroundImage(event, value) {
		setUiForm(_.set({ ...uiForm }, 'use_backgroundimage', ""+value));
	}
 
	function handleChangePossibleSendingEmail(event, value) {
		setForm(_.set({ ...form }, 'possibleSendingEmail', value));
	}

	const handleChangeTheme = (value, name) => {
		console.log(value,name)
		setUiForm(_.set({ ...uiForm }, name.split(".")[1]+'_color', value));
	}

	function handleSubmit() {
		if (tabValue == 2 && authUser.role=='superadmin') {
			Promise.all([
				dispatch(Actions.saveOptions(uiForm))
			]).then(() => props.history.push(`/settings`))
		} else {
			Promise.all([
				dispatch(Actions.saveSettings({...form, domain_id: selectedDomain}))
			]).then(() => props.history.push(`/settings`))
		}
	}

	const dataUrlToFile = (url, fileName) => {
		const [mediaType, data] = url.split(",");
		const mime = mediaType.match(/:(.*?);/)?.[0];
		var n = data.length;
		const arr = new Uint8Array(n);
		while (n--) {
			arr[n] = data.charCodeAt(n);
		}
		return new File([arr], fileName, { type: mime.replace(":", "").replace(";", "") });
	};

	const dataUrlToFileUsingFetch = async (url, fileName, mimeType) => {
		const response = await fetch(url);
		const buffer = await response.arrayBuffer();
		return new File([buffer], fileName, { type: mimeType });
	};

	const [uploadBackgroundProgress, setUploadBackgroundProgress] = useState(0);

	const [imgBackgroundSrc, setImgBackgroundSrc] = useState(null);
	const [cropBackgroundData, setCropBackgroundData] = useState("#");
	const [cropperBackground, setCropperBackground] = useState(null);

	function handleBackgroundUploadChange(e) {
		const file = e.target.files[0];
		if (!file) {
			return;
		}
		console.log(file)
		// if(form.id === parseInt(form.id, 10)) {  // is Integer
		// 	let data = new FormData();
		// 	data.append('domain_id', form.id);
		// 	data.append('file', file);

		// 	axios.post(`${rootUrl}/api/domains/uploadimage`, data, {
		// 		onUploadProgress: ProgressEvent => { 
		// 			setUploadProgress(ProgressEvent.loaded / ProgressEvent.total*100);
		// 		},
		// 	}).then(response => { 
		// 		setForm(
		// 			_.set({ ...form }, `image`, response.data.filename )
		// 		);
		// 	});
		// } 

		if (e.target.files && e.target.files.length > 0) {
			const reader = new FileReader();
			reader.addEventListener('load', () => setImgBackgroundSrc(reader.result));
			reader.readAsDataURL(e.target.files[0]);
		}

		// const reader = new FileReader();
		// reader.readAsBinaryString(file);

		// reader.onload = () => {
		// 	setForm(
		// 		_.set({ ...form }, `image`, `data:${file.type};base64,${btoa(reader.result)}` )
		// 	);
		// };

		// reader.onerror = () => {
		// 	console.log('error on load image');
		// };

	}

	const getCropBackgroundData = async () => {
		if (typeof cropperBackground !== "undefined") {
			//		  setCropData(cropper.getCroppedCanvas().toDataURL());
			//console.log(cropper.getCroppedCanvas().toDataURL())
			// const file = dataUrlToFile(cropper.getCroppedCanvas().toDataURL(), "output.png");

			let canv = cropperBackground.getCroppedCanvas();
			if (!canv)
				return;

			const file = await dataUrlToFileUsingFetch(canv.toDataURL('image/jpeg', 0.9), "output.png", "image/png");
			console.log(
				`We have File "${file.name}", now we can upload it wherever we want!`
			);
			console.log(file)
			/**
			 * Now that we have a File object, we can upload it to S3 (or anywhere else you want)
			 *
			 * const params = {
			 *   Bucket: "BUCKET_NAME"
			 *   Key: "randomId" + .png // You can use nanoid here if you want. This becomes the filename (or key) in S3.
			 *   Body: file
			 * }
			 *
			 * // Handle errors with try-catch block...
			 * const data = await s3.upload(params)
			 * console.log(`File uploaded successfully. ${data.Location}`);
			 */

			let data = new FormData();
			data.append('key_name', 'backgroundimage');
			data.append('file', file);

			axios.post(`${rootUrl}/api/options/uploadimage`, data, {
				onUploadProgress: ProgressEvent => {
					setUploadBackgroundProgress(ProgressEvent.loaded / ProgressEvent.total * 100);
				},

				headers: {
					'Content-Type': 'multipart/form-data'
				}

			}).then(response => {
				setUiForm(
					_.set({ ...uiForm }, `backgroundImage`, response.data.filename)
				);
			});
		}
	};
	const resetBackgroundData = async () => {
		//setVisibleBackgroundImage(false);
		//setCropperBackground(null);
	}

	const [uploadLogoProgress, setUploadLogoProgress] = useState(0);
	const [imgLogoSrc, setImgLogoSrc] = useState(null);
	const [cropLogoData, setCropLogoData] = useState("#");
	const [cropperLogo, setCropperLogo] = useState(null);

	function handleLogoUploadChange(e) {
		const file = e.target.files[0];
		if (!file) {
			return;
		}
		console.log(file)
		// if(form.id === parseInt(form.id, 10)) {  // is Integer
		// 	let data = new FormData();
		// 	data.append('domain_id', form.id);
		// 	data.append('file', file);

		// 	axios.post(`${rootUrl}/api/domains/uploadimage`, data, {
		// 		onUploadProgress: ProgressEvent => { 
		// 			setUploadProgress(ProgressEvent.loaded / ProgressEvent.total*100);
		// 		},
		// 	}).then(response => { 
		// 		setForm(
		// 			_.set({ ...form }, `image`, response.data.filename )
		// 		);
		// 	});
		// } 

		if (e.target.files && e.target.files.length > 0) {
			const reader = new FileReader();
			reader.addEventListener('load', () => setImgLogoSrc(reader.result));
			reader.readAsDataURL(e.target.files[0]);
		}

		// const reader = new FileReader();
		// reader.readAsBinaryString(file);

		// reader.onload = () => {
		// 	setForm(
		// 		_.set({ ...form }, `image`, `data:${file.type};base64,${btoa(reader.result)}` )
		// 	);
		// };

		// reader.onerror = () => {
		// 	console.log('error on load image');
		// };

	}

	const resetLogoData = async () => {
		//setImgLogoSrc(null);
		//setCropperLogo(null);
	}

	const getCropLogoData = async () => {
		if (typeof cropperLogo !== "undefined") {
			//		  setCropData(cropper.getCroppedCanvas().toDataURL());
			//console.log(cropper.getCroppedCanvas().toDataURL())
			// const file = dataUrlToFile(cropper.getCroppedCanvas().toDataURL(), "output.png");

			let canv = cropperLogo.getCroppedCanvas();
			if (!canv)
				return;

			const file = await dataUrlToFileUsingFetch(canv.toDataURL('image/jpeg', 0.9), "output.jpg", "image/png");
			console.log(
				`We have File "${file.name}", now we can upload it wherever we want!`
			);
			console.log(file)
			/**
			 * Now that we have a File object, we can upload it to S3 (or anywhere else you want)
			 *
			 * const params = {
			 *   Bucket: "BUCKET_NAME"
			 *   Key: "randomId" + .png // You can use nanoid here if you want. This becomes the filename (or key) in S3.
			 *   Body: file
			 * }
			 *
			 * // Handle errors with try-catch block...
			 * const data = await s3.upload(params)
			 * console.log(`File uploaded successfully. ${data.Location}`);
			 */

			let data = new FormData();
			data.append('key_name', 'logoimage');
			data.append('file', file);

			axios.post(`${rootUrl}/api/options/uploadimage`, data, {
				onUploadProgress: ProgressEvent => {
					setUploadLogoProgress(ProgressEvent.loaded / ProgressEvent.total * 100);
				},

				headers: {
					'Content-Type': 'multipart/form-data'
				}

			}).then(response => {
				setUiForm(
					_.set({ ...uiForm }, `logoimage`, response.data.filename)
				);
			});
		}
	};

	// Select Domain
	
	const domains = useSelector(({ accesscontrolApp }) => accesscontrolApp.domains.data);
	const [selectedDomain , setSelectedDomain] = useState(authUser.domain_id);

	useEffect(() => {
		if(selectedDomain) {
            dispatch(Actions.getSettings(selectedDomain));
        }
	}, [selectedDomain]);

	if (!settings.data) {
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
									<span className="mx-2">Settings</span>
								</Typography>
							</FuseAnimate>
						</div>
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
					<Tab className="h-64 normal-case" label="Email Settings" />
					<Tab className="h-64 normal-case" label="Options" />
					{ authUser.role == 'superadmin' && (
						<Tab className="h-64 normal-case" label="Customize" />
					)}
				</Tabs>
			}
			content={
				<>
					{form && (
						<div className="p-16 sm:p-24 max-w-2xl">
							{tabValue === 0 && (
								<div>
									{(authUser.role == 'superadmin') && (
										<>
										<FormControl className="mt-8 mb-16 sm:w-320 mx-16" variant="outlined">
											<InputLabel htmlFor="domain_id-label-placeholder"> Select Domain </InputLabel>
											<Select
												value={selectedDomain}
												onChange={( event ) => { 
													setSelectedDomain(event.target.value); 
												}}
												name="domain_id"
												input={
													<OutlinedInput
														labelWidth={'domain_id'.length * 9}
														name="domain_id"
														id="domain_id-label-placeholder"
													/>
												}
											>
												{ domains && domains.map(domain => (
													<MenuItem value={domain.id} key={domain.id}>
														{domain.name}
													</MenuItem>
												))}
											</Select>
										</FormControl>
										<hr className="mt-8 mb-16 sm:w-320 mx-16" />
										</>
									)}

										
									<FormControl>
										{/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
										<RadioGroup
											aria-labelledby="demo-radio-buttons-group-label"
											value={form.email_option?form.email_option:"disable"}
											name="email_option"
											onChange={handleChange}
										>

											<FormControl variant="outlined">
												<FormLabel variant="outlined">
													<FormControlLabel
														value={"disable"}
														control={<Radio />}
														label={
															<div className="flex items-center">
																<span className="mx-8">{"Disable Emails"}</span>
															</div>
														}
													/>
												</FormLabel>
											</FormControl>

											<FormControl variant="outlined">
												<FormLabel variant="outlined" >
													<FormControlLabel
														value={"smtp"}
														control={<Radio />}
														label={
															<div className="flex items-center">
																<span className="mx-8">{"Use SMTP"}</span>
															</div>
														}
													/>
												</FormLabel>
												<FormGroup row >
													<TextField
														className="mt-8 mb-16 flex w-full sm:w-320 mx-16"
														error={form.emailHost === ''}
														required
														label="Email Host"
														autoFocus
														id="emailHost"
														name="emailHost"
														value={form.emailHost?form.emailHost:""}
														onChange={handleChange}
														variant="outlined"
														fullWidth
														autoComplete='off'
														disabled={form.email_option != 'smtp'}
													/>
													<TextField
														className="mt-8 mb-16 flex w-full  sm:w-320 mx-16"
														error={form.emailUsername === ''}
														required
														label="Email Username"
														id="emailUsername"
														name="emailUsername"
														value={form.emailUsername?form.emailUsername:""}
														onChange={handleChange}
														variant="outlined"
														fullWidth
														autoComplete='off'
														disabled={form.email_option != 'smtp'}
													/>

													<FormControl sx={{ m: 1, width: '25ch' }} className="mt-8 mb-16 flex w-full sm:w-320 mx-16" variant="outlined">
														<InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
														<OutlinedInput
															id="outlined-adornment-password"
															type={showPassword ? 'text' : 'password'}
															value={form.emailPassword?form.emailPassword:""}
															name="emailPassword"
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
															label="Email Password"
															autoComplete='off'
															disabled={form.email_option != 'smtp'}
														// autocomplete="new-password"
														/>
													</FormControl>
												</FormGroup>
											</FormControl>

											<FormControl variant="outlined">
												<FormLabel variant="outlined">
													<FormControlLabel
														value={"sendgrid"}
														control={<Radio />}
														label={
															<div className="flex items-center">
																<span className="mx-8">{"Use Sendgrid"}</span>
															</div>
														}
													/>
												</FormLabel>
												<FormGroup row >
													<TextField
														className="mt-8 mb-16 flex w-full sm:w-320 mx-16"
														error={form.emailSender === ''}
														required
														label="Sender Email Id"
														autoFocus
														id="emailSender"
														name="emailSender"
														value={form.emailSender?form.emailSender:""}
														onChange={handleChange}
														variant="outlined"
														fullWidth
														autoComplete='off'
														disabled={form.email_option != 'sendgrid'}
													/>

													<TextField
														className="mt-8 mb-16 flex w-full  sm:w-320 mx-16"
														error={form.sendgridKey === ''}
														required
														label="Sendgrid Api Key"
														id="sendgridKey"
														name="sendgridKey"
														value={form.sendgridKey?form.sendgridKey:""}
														onChange={handleChange}
														variant="outlined"
														fullWidth
														autoComplete='off'
														disabled={form.email_option != 'sendgrid'}
													/>
												</FormGroup>
											</FormControl>

										</RadioGroup>
									</FormControl>

										{/* <FormControlLabel
											className="mt-8 mb-16 flex w-full  sm:w-320 mx-16"
											control={
												<Checkbox
													checked={form.isEmailNotification}
													onChange={handleChangeEmailNotification}
												/>
											}
											label="Send Email config files when client/gateway creates"
										/> */}

										{/* <FormControlLabel
											className="mt-8 mb-16 flex w-full  sm:w-320 mx-16"
											control={
												<Checkbox
													checked={form.possibleSendingEmail}
													onChange={handleChangePossibleSendingEmail}
												/>
											}
											label="Show Json Email Button"
										/> */}

								</div>
							)}
						</div>
					)}

					{form && (
						<div className="p-16 sm:p-24 max-w-2xl">
							{tabValue === 1 && (
								<div>
									{(authUser.role == 'superadmin') && (
										<>
										<FormControl className="mt-8 mb-16 sm:w-320 mx-16" variant="outlined">
											<InputLabel htmlFor="domain_id-label-placeholder"> Select Domain </InputLabel>
											<Select
												value={selectedDomain}
												onChange={( event ) => { 
													setSelectedDomain(event.target.value); 
												}}
												name="domain_id"
												input={
													<OutlinedInput
														labelWidth={'domain_id'.length * 9}
														name="domain_id"
														id="domain_id-label-placeholder"
													/>
												}
											>
												{ domains && domains.map(domain => (
													<MenuItem value={domain.id} key={domain.id}>
														{domain.name}
													</MenuItem>
												))}
											</Select>
										</FormControl>
										<hr className="mt-8 mb-16 sm:w-320 mx-16" />	
										</>
									)}
									
										<FormControlLabel
											className="mt-8 mb-16 flex w-full  sm:w-320 mx-16"
											control={
												<Checkbox
													checked={form.password_generate}
													onChange={handleChangePasswordAutoGenerate}
												/>
											}
											label="Password Auto-generate"
										/>

								</div>
							)}
						</div>
					)}

					{uiForm && (
						<div className="p-8 sm:p-8" style={{ marginTop: '-3.2rem' }}>
							{tabValue === 2 && (

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
														error={uiForm.welcomeText === ''}
														required
														label="Welcome Text"
														autoFocus
														id="welcomeText"
														name="welcomeText"
														value={uiForm.welcomeText?uiForm.welcomeText:""}
														onChange={handleUiFormChange}
														variant="outlined"
														fullWidth
														autoComplete='off'
													/>

													<TextField
														className="mt-8 mb-16 flex w-full  sm:w-320 mx-16"
														//error={uiForm.welcomeBackgroundColor === ''}
														required
														label="Welcome background color"
														id="welcomeBackgroundColor"
														name="welcomeBackgroundColor"
														value={color?color:""}
														//onChange={handleUiFormChange}
														variant="outlined"
														fullWidth
														autoComplete='off'
														disabled
													/>  

													{/* <Typography
														className="mt-32 mx-16 normal-case flex items-center"
														color="inherit"
													>
														<span className="mx-2">Background Color</span>
													</Typography> */}
													<div className="mt-32 mb-32 mx-16 normal-case flex items-center">
														<HexColorPicker color={color} onChange={setColor} />
													</div>

													{/*
													<Typography
														className="mt-32 mx-16 normal-case flex items-center"
														color="inherit"
													>
														<span className="mx-2">Color Template</span>
													</Typography> 
													<FormControl className="mt-8 mb-16 flex w-full sm:w-320 mx-16" variant="outlined">
														<InputLabel htmlFor="main_color-label-placeholder"> Main </InputLabel>
														<Select
															value={uiForm.main_color?uiForm.main_color:'default'}
															name="main_color"
															onChange={ (e) => {
																handleUiFormChange(e);
																console.log(fuseSetting);
																console.log(e.target.value)
																console.log(FuseThemesConfig[e.target.value])
																console.log(FuseThemesConfig)

																// dispatch(FuseActions.setSettings(
																// 	{
																// 		...fuseSetting.current,
																// 		theme: {
																// 			...fuseSetting.current.theme,
																// 			main: FuseThemesConfig[e.target.value],
																// 		}
																// 	}
																
																// ));
															}}
															input={
																<OutlinedInput
																	labelWidth={'main_color'.length * 9}
																	name="main_color"
																	id="main_color-label-placeholder"
																/>
															}
															required
														>
															{colorThemes && colorThemes.map( (item, index) => (
																<MenuItem value={item} key={index}>
																	{item}
																</MenuItem>
															))}
														</Select>
													</FormControl> 

													<FormControl className="mt-8 mb-16 flex w-full sm:w-320 mx-16" variant="outlined">
														<InputLabel htmlFor="navbar_color-label-placeholder"> Navbar </InputLabel>
														<Select
															value={uiForm.navbar_color?uiForm.navbar_color:'default'}
															name="navbar_color"
															onChange={handleUiFormChange}
															input={
																<OutlinedInput
																	labelWidth={'navbar_color'.length * 9}
																	name="navbar_color"
																	id="navbar_color-label-placeholder"
																/>
															}
															required
														>
															{colorThemes && colorThemes.map( (item, index) => (
																<MenuItem value={item} key={index}>
																	{item}
																</MenuItem>
															))}
														</Select>
													</FormControl> 

													<FormControl className="mt-8 mb-16 flex w-full sm:w-320 mx-16" variant="outlined">
														<InputLabel htmlFor="toolbar_color-label-placeholder"> Toolbar </InputLabel>
														<Select
															value={uiForm.toolbar_color?uiForm.toolbar_color:'default'}
															name="toolbar_color"
															onChange={handleUiFormChange}
															input={
																<OutlinedInput
																	labelWidth={'toolbar_color'.length * 9}
																	name="toolbar_color"
																	id="toolbar_color-label-placeholder"
																/>
															}
															required
														>
															{colorThemes && colorThemes.map( (item, index) => (
																<MenuItem value={item} key={index}>
																	{item}
																</MenuItem>
															))}
														</Select>
													</FormControl> 

													<FormControl className="mt-8 mb-16 flex w-full sm:w-320 mx-16" variant="outlined">
														<InputLabel htmlFor="footer_color-label-placeholder"> Footer </InputLabel>
														<Select
															value={uiForm.footer_color?uiForm.footer_color:'default'}
															name="footer_color"
															onChange={handleUiFormChange}
															input={
																<OutlinedInput
																	labelWidth={'footer_color'.length * 9}
																	name="footer_color"
																	id="footer_color-label-placeholder"
																/>
															}
															required
														>
															{colorThemes && colorThemes.map( (item, index) => (
																<MenuItem value={item} key={index}>
																	{item}
																</MenuItem>
															))}
														</Select>
													</FormControl> */}

													<CustomFuseSettings changeTheme={handleChangeTheme}/>

												</Paper>
											</div>

											<div className="widget flex w-full sm:w-1/2 md:w-1/2 p-12" style={{
												display:'flex',
												//alignSelf: 'center',
												justifyContent: 'center'
												}}>
												<Paper className="w-full p-12 rounded-8 shadow-none 1border-1">
													
													<Typography
														className="mt-8 mx-16 normal-case flex items-center"
														color="inherit"
													>
														<span className="mx-2">Background Image</span>
													</Typography>

													<FormControlLabel
														className="mt-8 mb-16 flex w-full  sm:w-320 mx-16"
														control={
															<Checkbox
																checked={ (uiForm.use_backgroundimage === 'true') }
																onChange={handleUseBackgroundImage}
															/>
														}
														label="Use background image"
													/>

													<div className="mt-8 flex flex-1 w-full items-center ">

														{ uiForm.backgroundimage && (
															<img style={{ border: "1px solid grey",marginLeft: '20px', height: 200, width: 200 }} src={ `${rootUrl}/imgs/options/${uiForm.backgroundimage}?random_number=${ new Date().getTime() }` } />
														)}	

														<label
															htmlFor="background-file"
															className={clsx(
																classes.userImageUpload,
																'flex items-center justify-center relative w-128 h-128 rounded-4 mx-8 mb-16 overflow-hidden cursor-pointer shadow-1 hover:shadow-5'
															)}
														>
															<input
																accept="image/*"
																className="hidden"
																id="background-file"
																type="file"
																onChange={handleBackgroundUploadChange}
															/>
															<Icon fontSize="large" color="action">
																cloud_upload
															</Icon>

														</label>
														
														<Cropper
															style={{ height: 200, width: 200 }}
															//	zoomTo={1}
															initialAspectRatio={1}
															//	aspectRatio = {1}
															//	cropBoxResizable = {false}
															//	preview=".img-preview"
															src={imgBackgroundSrc}
															viewMode={1}
															minCropBoxHeight={50}
															minCropBoxWidth={50}
															background={true}
															responsive={true}
															checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
															onInitialized={(instance) => {
																setCropperBackground(instance);
															}}
															guides={true}
															dragMode={"move"}
															autoCropArea={0.65}
															//	cropBoxMovable = {false}
															toggleDragModeOnDblclick={false}
															data={{ width: 100, height: 100 }}
															cropBoxData={{ width: 100, height: 100 }}
															zoomable={true}
															strict={false}
														/>
														
														{imgBackgroundSrc && cropperBackground && (
														<FuseAnimate animation="transition.slideRightIn" delay={300}>
															<>
															<Button
																component={Button}
																className="whitespace-no-wrap normal-case ml-20"
																variant="contained"
																color="secondary"
																onClick={getCropBackgroundData}
															>
																<span className="hidden sm:flex">Crop and Upload</span>
																<span className="flex sm:hidden">Upload</span>

																{uploadBackgroundProgress > 0 && (<Box className="ml-20 items-center flex flex-1" sx={{ position: 'relative', display: 'flex' }}>
																	<CircularProgress variant="determinate" value={uploadBackgroundProgress} />
																	<Box
																		sx={{
																			top: 0,
																			left: 0,
																			bottom: 0,
																			right: 0,
																			position: 'absolute',
																			display: 'flex',
																			alignItems: 'center',
																			justifyContent: 'center',
																			alignSelf: 'center'
																		}}
																	>
																		<Typography variant="caption" component="div" style={{ alignSelf: 'center', marginLeft: "10px" }}>
																			{`${Math.round(uploadBackgroundProgress)}%`}
																		</Typography>
																	</Box>
																</Box>)}
															</Button>
															{ false && (
																<Button
																	component={Button}
																	className="whitespace-no-wrap normal-case ml-20"
																	variant="contained"
																	color="secondary"
																	onClick={resetBackgroundData}
																>
																	<span className="hidden sm:flex">Cancel</span>
																	<span className="flex sm:hidden">Cancel</span>

																</Button>
															)}			
															</>			
														</FuseAnimate>
														)}

													</div>

													<Typography
														className="mt-32 mx-16 normal-case flex items-center"
														color="inherit"
													>
														<span className="mx-2">Logo Image</span>
													</Typography>

													<div className="mt-8 flex flex-1 w-full items-center ">

														{ uiForm.logoimage && (
															<img style={{border: "1px solid grey", marginLeft: '20px', height: 200, width: 200 }} src={ `${rootUrl}/imgs/options/${uiForm.logoimage}?random_number=${ new Date().getTime() }` } />
														)}	
														<label
															htmlFor="logo-file"
															className={clsx(
																classes.userImageUpload,
																'flex items-center justify-center relative w-128 h-128 rounded-4 mx-8 mb-16 overflow-hidden cursor-pointer shadow-1 hover:shadow-5'
															)}
														>
															<input
																accept="image/*"
																className="hidden"
																id="logo-file"
																type="file"
																onChange={handleLogoUploadChange}
															/>
															<Icon fontSize="large" color="action">
																cloud_upload
															</Icon>
														</label>
														
														<Cropper
															style={{ height: 200, width: 200 }}
															//	zoomTo={1}
															initialAspectRatio={1}
															//	aspectRatio = {1}
															//	cropBoxResizable = {false}
															//	preview=".img-preview"
															src={imgLogoSrc}
															viewMode={1}
															minCropBoxHeight={50}
															minCropBoxWidth={50}
															background={true}
															responsive={true}
															checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
															onInitialized={(instance) => {
																setCropperLogo(instance);
															}}
															guides={true}
															dragMode={"move"}
															autoCropArea={0.65}
															//	cropBoxMovable = {false}
															toggleDragModeOnDblclick={false}
															data={{ width: 100, height: 100 }}
															cropBoxData={{ width: 100, height: 100 }}
															zoomable={true}
															strict={false}
														/>
														

														{imgLogoSrc && cropperLogo && (<FuseAnimate animation="transition.slideRightIn" delay={300}>
															<>
																<Button
																	component={Button}
																	className="whitespace-no-wrap normal-case ml-20"
																	variant="contained"
																	color="secondary"
																	onClick={getCropLogoData}
																>
																	<span className="hidden sm:flex">Crop and Upload</span>
																	<span className="flex sm:hidden">Upload</span>

																	{uploadLogoProgress > 0 && (<Box className="ml-20 items-center flex flex-1" sx={{ position: 'relative', display: 'flex' }}>
																		<CircularProgress variant="determinate" value={uploadLogoProgress} />
																		<Box
																			sx={{
																				top: 0,
																				left: 0,
																				bottom: 0,
																				right: 0,
																				position: 'absolute',
																				display: 'flex',
																				alignItems: 'center',
																				justifyContent: 'center',
																				alignSelf: 'center'
																			}}
																		>
																			<Typography variant="caption" component="div" style={{ alignSelf: 'center', marginLeft: "10px" }}>
																				{`${Math.round(uploadLogoProgress)}%`}
																			</Typography>
																		</Box>
																	</Box>)}
																</Button>
																{ false && (
																	<Button
																		component={Button}
																		className="whitespace-no-wrap normal-case ml-20"
																		variant="contained"
																		color="secondary"
																		onClick={resetLogoData}
																	>
																		<span className="hidden sm:flex">Cancel</span>
																		<span className="flex sm:hidden">Cancel</span>

																	</Button>
																)}
																
															</>
														</FuseAnimate>
														)}
													</div>
												
												</Paper>
											</div>
									</FuseAnimateGroup>
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

export default withReducer('accesscontrolApp', reducer)(Settings);
