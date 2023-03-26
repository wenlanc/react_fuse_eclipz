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
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import axios from 'axios';
import { rootUrl } from 'app/fuse-configs/apiConfig';
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { statuses } from 'app/fuse-configs/apiConfig';

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
function Domain(props) {
	const dispatch = useDispatch();
	const domain = useSelector(({ accesscontrolApp }) => accesscontrolApp.domain);
	const theme = useTheme();
	const classes = useStyles(props);
	const { form, handleChange, setForm } = useForm(null);
	const [tabValue, setTabValue] = useState(0);
	const [uploadLogoProgress, setUploadLogoProgress] = useState(0);
	const [uploadIconProgress, setUploadIconProgress] = useState(0);
	const routeParams = useParams();

	useDeepCompareEffect(() => {
		function updateDomainState() {
			const { domainId } = routeParams;
			if (domainId === 'new') {
				dispatch(Actions.newDomain());
			} else {
				dispatch(Actions.getDomain(routeParams));
			}
		}
		updateDomainState();
	}, [dispatch, routeParams]);

	useEffect(() => { 
		if ((domain.data && !form) || (domain.data && form && domain.data.id !== form.id)) {
			setForm(domain.data);
		}
	}, [form, domain.data, setForm]);

	function handleChipChange(value, name) {
		setForm(
			_.set(
				{ ...form },
				name,
				value.map(item => item.value)
			)
		);
	}

	const [imgLogoSrc, setImgLogoSrc]  = useState(null);
	const [cropData, setCropData] = useState("#");
  	const [cropperLogo, setCropperLogo] = useState(null);

	const [imgIconSrc, setImgIconSrc]  = useState(null);
  	const [cropperIcon, setCropperIcon] = useState(null);

	function handleUploadLogoChange(e) {
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
			reader.addEventListener('load', () => setImgLogoSrc(reader.result) );
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

	function handleUploadIconChange(e) {
		const file = e.target.files[0];
		if (!file) {
			return;
		}
		if (e.target.files && e.target.files.length > 0) {
			const reader = new FileReader();
			reader.addEventListener('load', () => setImgIconSrc(reader.result) );
			reader.readAsDataURL(e.target.files[0]);
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
	  
	const dataUrlToFileUsingFetch = async (url,	fileName, mimeType) => {
		const response = await fetch(url);
		const buffer = await response.arrayBuffer();
		return new File([buffer], fileName, { type: mimeType });
	};
	  
	const getCropLogoData = async () => {
		if (typeof cropperLogo !== "undefined") {
		//		  setCropData(cropper.getCroppedCanvas().toDataURL());
		//console.log(cropper.getCroppedCanvas().toDataURL())
		 // const file = dataUrlToFile(cropper.getCroppedCanvas().toDataURL(), "output.png");

		 let canv = cropperLogo.getCroppedCanvas();
		 if(!canv)
			return;

		 const file =  await dataUrlToFileUsingFetch(canv.toDataURL(), "output.png", "image/png");
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

			if(form.id === parseInt(form.id, 10)) {  // is Integer
				let data = new FormData();
				data.append('domain_id', form.id);
				data.append('image_type', 'logo');
				data.append('file', file);
				
				axios.post(`${rootUrl}/api/domains/uploadimage`, data, {
					onUploadProgress: ProgressEvent => { 
						setUploadLogoProgress(ProgressEvent.loaded / ProgressEvent.total*100);
					},
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				}).then(response => { 
					setForm(
						_.set({ ...form }, `image`, response.data.filename )
					);
				});
			} 
		
		}
	  };

	const getCropIconData = async () => {
		if (typeof cropperIcon !== "undefined") {
			//setCropData(cropper.getCroppedCanvas().toDataURL());
			//console.log(cropper.getCroppedCanvas().toDataURL())
			// const file = dataUrlToFile(cropper.getCroppedCanvas().toDataURL(), "output.png");

		 let canv = cropperIcon.getCroppedCanvas();
		 if(!canv)
			return;

		 const file =  await dataUrlToFileUsingFetch(canv.toDataURL(), "output.png", "image/png");
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

			if(form.id === parseInt(form.id, 10)) {  // is Integer
				let data = new FormData();
				data.append('domain_id', form.id);
				data.append('image_type', 'icon');
				data.append('file', file);
				
				axios.post(`${rootUrl}/api/domains/uploadimage`, data, {
					onUploadProgress: ProgressEvent => { 
						setUploadIconProgress(ProgressEvent.loaded / ProgressEvent.total*100);
					},
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				}).then(response => { 
					setForm(
						_.set({ ...form }, `icon`, response.data.filename )
					);
				});
			} 
		
		}
	  };

	function handleChangeTab(event, value) {
		setTabValue(value);
	}

	function setFeaturedImage(id) {
		setForm(_.set({ ...form }, 'featuredImageId', id));
	}

	const [openmodal, setOpenmodal] = useState(false);
	const handleClose = () => {
		setOpenmodal(false);
	};

	const handleConfirmRemove = () => {
		Promise.all([
			dispatch(Actions.removeDomains([form.id]))
		]).then(() => props.history.push(`/domains`));
		handleClose();
	}

	function canBeSubmitted() {
		return (form.name ? form.name.length > 0 : form.name) && !_.isEqual(domain.data, form);
	}
	if (
		(!domain.data || (domain.data && routeParams.domainId != domain.data.id)) &&
		routeParams.domainId !== 'new'
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
									to="/domains"
									color="inherit"
								>
									<Icon className="text-20">
										{theme.direction === 'ltr' ? 'arrow_back' : 'arrow_forward'}
									</Icon>
									<span className="mx-4">Domains</span>
								</Typography>
							</FuseAnimate>

							<div className="flex items-center max-w-full">
								<FuseAnimate animation="transition.expandIn" delay={300}>
									
									<img
										className="w-32 sm:w-48 rounded"
										src={ form.image ? `${rootUrl}/imgs/domains/${form.image}?random_number=${ new Date().getTime() }`: "assets/images/logos/domain.png" }
										alt={form.name}
										style = {{ width: "70px", height: "70px"}}
									/>
									
								</FuseAnimate>
								<div className="flex flex-col min-w-0 mx-8 sm:mc-16">
									<FuseAnimate animation="transition.slideLeftIn" delay={300}>
										<Typography className="text-16 sm:text-20 truncate">
											{form.name ? form.name : 'New Domain'}
										</Typography>
									</FuseAnimate>
									<FuseAnimate animation="transition.slideLeftIn" delay={300}>
										<Typography variant="caption">Domain Detail</Typography>
									</FuseAnimate>
								</div>
							</div>
						</div>

						<div className="flex min-w-0 mx-8 sm:mc-16">
							{tabValue === 0 && (<FuseAnimate animation="transition.slideRightIn" delay={300}>
								<Button
									className="whitespace-no-wrap normal-case"
									variant="contained"
									color="secondary"
									disabled={!canBeSubmitted()}
									onClick={() => {
										Promise.all([
											dispatch(Actions.saveDomain(form))
										]).then(() => props.history.push(`/domains`) )
									}}
								>
									Save
								</Button>
							</FuseAnimate> )}
							<FuseAnimate animation="transition.slideRightIn" delay={300}>
								<Button
										className="mx-8 whitespace-no-wrap normal-case"
										variant="contained"
										color="primary"
										disabled={routeParams.domainId === 'new'}
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
					{ routeParams.domainId !== 'new' && (<Tab className="h-64 normal-case" label="Domain Image" />)}
					{/* { routeParams.domainId !== 'new' && (<Tab className="h-64 normal-case" label="Options" />)}
					{ routeParams.domainId !== 'new' && (<Tab className="h-64 normal-case" label="Setting" />)} */}
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
								/>

								{ routeParams.domainId != 'new' &&  (<FormControl className="flex w-full sm:w-320 mx-16" variant="outlined">
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
								</FormControl> )} 

							</div>
						)}
						{tabValue === 1 && (
							<div>
								<Typography
										className="mt-8 mx-16 normal-case flex items-center"
										color="inherit"
									>
									<span className="mx-2">Logo Image</span>
								</Typography>

								<div className="widget flex flex-1 w-full items-center ">
									
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
											onChange={handleUploadLogoChange}
										/>
										<Icon fontSize="large" color="action">
											cloud_upload
										</Icon>
									</label>

									<Cropper
										style={{ height: 250, width:250 }}
									//	zoomTo={1}
										initialAspectRatio={1}
									//	aspectRatio = {1}
									//	cropBoxResizable = {false}
									//	preview=".img-preview"
										src={imgLogoSrc}
										viewMode={1}
										minCropBoxHeight={10}
										minCropBoxWidth={10}
										background={true}
										responsive={true}
										checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
										onInitialized={(instance) => {
											setCropperLogo(instance);
										}}
										guides={true}
										dragMode={"move"}
										autoCropArea = {0.65}
									//	cropBoxMovable = {false}
										toggleDragModeOnDblclick = {false}
										data = {{ width: 100,height:  100 }}
										cropBoxData={{ width: 100, height: 100 }}
										zoomable = {true}
										strict = {false}
									/>

									{ imgLogoSrc && cropperLogo && (<FuseAnimate animation="transition.slideRightIn" delay={300}>
										<Button
											component={Button}
											className="whitespace-no-wrap normal-case ml-20"
											variant="contained"
											color="secondary"
											onClick={getCropLogoData}
										>
											<span className="hidden sm:flex">Crop and Upload</span>
											<span className="flex sm:hidden">Upload</span>

											{ uploadLogoProgress > 0 && (<Box className="ml-20 items-center flex flex-1" sx={{ position: 'relative', display: 'flex' }}>
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
											</Box> )}
										</Button>
									</FuseAnimate>
									)}
								</div>

								<Typography
										className="mt-8 mx-16 normal-case flex items-center"
										color="inherit"
									>
									<span className="mx-2">Icon Image</span>
								</Typography>
								<div className="flex flex-1 w-full items-center ">
									<label
										htmlFor="icon-file"
										className={clsx(
											classes.userImageUpload,
											'flex items-center justify-center relative w-128 h-128 rounded-4 mx-8 mb-16 overflow-hidden cursor-pointer shadow-1 hover:shadow-5'
										)}
									>
										<input
											accept="image/*"
											className="hidden"
											id="icon-file"
											type="file"
											onChange={handleUploadIconChange}
										/>
										<Icon fontSize="large" color="action">
											cloud_upload
										</Icon>
									</label>

									<Cropper
										style={{ height: 250, width:250 }}
									//	zoomTo={1}
										initialAspectRatio={1}
									//	aspectRatio = {1}
									//	cropBoxResizable = {false}
									//	preview=".img-preview"
										src={imgIconSrc}
										viewMode={1}
										minCropBoxHeight={10}
										minCropBoxWidth={10}
										background={true}
										responsive={true}
										checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
										onInitialized={(instance) => {
											setCropperIcon(instance);
										}}
										guides={true}
										dragMode={"move"}
										autoCropArea = {0.65}
									//	cropBoxMovable = {false}
										toggleDragModeOnDblclick = {false}
										data = {{ width: 100,height:  100 }}
										cropBoxData={{ width: 100, height: 100 }}
										zoomable = {true}
										strict = {false}
									/>

									{ imgIconSrc && cropperIcon && (<FuseAnimate animation="transition.slideRightIn" delay={300}>
										<Button
											component={Button}
											className="whitespace-no-wrap normal-case ml-20"
											variant="contained"
											color="secondary"
											onClick={getCropIconData}
										>
											<span className="hidden sm:flex">Crop and Upload</span>
											<span className="flex sm:hidden">Upload</span>

											{ uploadIconProgress > 0 && (<Box className="ml-20 items-center flex flex-1" sx={{ position: 'relative', display: 'flex' }}>
												<CircularProgress variant="determinate" value={uploadIconProgress} />
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
													{`${Math.round(uploadIconProgress)}%`}
													</Typography>
												</Box>
											</Box> )}
										</Button>
									</FuseAnimate>
									)}

									{/* <div className=" flex w-full sm:w-320  mt-8 mb-16 sm:w-320 mx-16">
									{ cropData && (<img style={{ width: "250px", height:"250px" }} src={cropData} alt="cropped" />)}
									</div> */}
									
									{/* <div className="mt-8 mb-16 sm:w-320 mx-16">
										<div className="box" style={{ width: "50%", float: "right" }}>
										<h1>Preview</h1>
										<div
											className="img-preview"
											style={{ width: "200px", float: "left", height: "200px" }}
										/>
										</div>
										<div
										className="box"
										style={{ width: "50%", float: "right", height: "300px" }}
										>
										<h1>
											<span>Crop</span>
											<button style={{ float: "right" }} onClick={getCropData}>
												Crop Image
											</button>
										</h1>
										
										</div>
									</div> */}
      
									{/* {form.images.map(media => (
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
									))} */}

								</div>
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

export default withReducer('accesscontrolApp', reducer)(Domain);
