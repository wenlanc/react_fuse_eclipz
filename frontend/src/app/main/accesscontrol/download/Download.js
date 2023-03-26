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
import CircularProgress from '@material-ui/core/CircularProgress';
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
import { showMessage } from 'app/store/actions/fuse';
import axios from 'axios';
import { rootUrl } from 'app/fuse-configs/apiConfig';

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

function Download(props) {
	const dispatch = useDispatch();
	const download = useSelector(({ accesscontrolApp }) => accesscontrolApp.download);
	const theme = useTheme();

	const authUser = useSelector(({ auth }) => auth.user);

	const classes = useStyles(props);
	const [tabValue, setTabValue] = useState(0);
	const { form, handleChange, setForm } = useForm(null);
	const routeParams = useParams();

	const [ uploadProgress, setUploadProgress] = useState(0);

	useDeepCompareEffect(() => {
		function updateUserState() {
			const { downloadId } = routeParams;

			if (downloadId === 'new') {
				dispatch(Actions.newDownload());
			} else {
				// dispatch(Actions.getDownload(routeParams));
			}
		}
		updateUserState();
	}, [dispatch, routeParams]);

	useEffect(() => {
		if ((download.data && !form) || (download.data && form && download.data.id != form.id) ) {
			setForm(download.data);
		}
	}, [form, download.data, setForm]);
	
	function handleChangeTab(event, value) {
		setTabValue(value);
	}

	function setFeaturedImage(id) {
		setForm(_.set({ ...form }, 'featuredImageId', id));
	}

	function handleUploadChange(e) {
		if (e.target.files && e.target.files.length > 0) {
			//let filename = e.target.files[0].name;			
			//const reader = new FileReader();
			setForm(
				_.set({
					 ...form ,
					file:	e.target.files[0],
					filename:  e.target.files[0].name
				})
			);
			
			// reader.addEventListener('load', () => {
			// });
			// reader.readAsDataURL(e.target.files[0]);
		}
	}

	function canBeSubmitted() {
		return form && form.filename && form.filename.length > 0 && !_.isEqual(download.data, form);
	}

	function isNewItem() {
		return !(download.data.id === parseInt(download.data.id, 10));
	}

	const bytesToSize = (bytes, decimals = 2) => {
		if (bytes === 0) return '0 Bytes';

		const k = 1024;
		const dm = decimals < 0 ? 0 : decimals;
		const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

		const i = Math.floor(Math.log(bytes) / Math.log(k));

		return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
	 }

	if (
		(!download.data || (download.data && routeParams.downloadId != download.data.id)) &&
		routeParams.downloadId !== 'new'
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
									to="/downloads"
									color="inherit"
								>
									<Icon className="text-20">
										{theme.direction === 'ltr' ? 'arrow_back' : 'arrow_forward'}
									</Icon>
									<span className="mx-4">Downloads</span>
								</Typography>
							</FuseAnimate>

							<div className="flex items-center max-w-full">
								{/* <FuseAnimate animation="transition.expandIn" delay={300}>
									
									<img
										className="w-32 sm:w-48 rounded"
										src="assets/images/logos/gateways.png"
										alt={form.name}
									/>
									
								</FuseAnimate> */}
								<div className="flex flex-col min-w-0 mx-8 sm:mc-16">
									<FuseAnimate animation="transition.slideLeftIn" delay={300}>
										<Typography className="text-16 sm:text-20 truncate">
											{form.filename ? form.filename : 'New '}
										</Typography>
									</FuseAnimate>
									<FuseAnimate animation="transition.slideLeftIn" delay={300}>
										<Typography variant="caption">Detail</Typography>
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

										// Promise.all([
										// 	dispatch(Actions.saveDownload(form))
										// ]).then(() => props.history.push(`/downloads`) )

										let formData = new FormData();
										formData.append('description', form.description);
										formData.append('filename', form.filename);
										formData.append('file', form.file);
										
										const request = axios.post(`${rootUrl}/api/downloads/save`, formData, {
											onUploadProgress: ProgressEvent => { 
												setUploadProgress(ProgressEvent.loaded / ProgressEvent.total*100);
											},
											headers: {
											'Content-Type': 'multipart/form-data'
											}
										});
										request.then(response => { 
												dispatch({
													type: Actions.SAVE_DOWNLOAD,
													payload: response.data
												});
												dispatch(showMessage({ message: 'File Saved' }));
												props.history.push(`/downloads`);
											});
											
									}}
								>
									Save
								</Button>
							</FuseAnimate>
							{/* <FuseAnimate animation="transition.slideRightIn" delay={300}>
								<Button
										className="mx-8 whitespace-no-wrap normal-case"
										variant="contained"
										color="primary"
										disabled={isNewItem()}
										onClick={() => dispatch(Actions.downloadJsonService(form.id, form.name))}
									>
										Download Json
									</Button>
							</FuseAnimate> */}
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
					
				</Tabs>
			}
			content={
				form && (
					<div className="p-16 sm:p-24 max-w-2xl">
						{tabValue === 0 && (
							<div>
								<TextField
									className="mt-8 mb-16 sm:w-320 mx-16"
									//error={form.description === ''}
									//required
									label="Description"
									autoFocus
									id="description"
									name="description"
									value={form.description}
									onChange={handleChange}
									variant="outlined"
									fullWidth
									autoComplete='off'
									multiline
  									rows={3}
								/>
								
								<label
									htmlFor="button-file"
									className={clsx(
										classes.userImageUpload,
										'flex items-center justify-center relative w-128 h-128 rounded-4 mx-16 mb-16 overflow-hidden cursor-pointer shadow-1 hover:shadow-5'
									)}
								>
									<input
										//accept="image/*"
										className="hidden"
										id="button-file"
										type="file"
										onChange={handleUploadChange}
										required
									/>
									<Icon fontSize="large" color="action">
										cloud_upload
									</Icon>
									
								</label>
								<label
									className={
										'flex items-center h-64 relative px-16 mx-16 mb-16 overflow-hidden'
									}
								> 
								 	<span>{form.filename}</span>
								</label>

								{ uploadProgress > 0 && (<Box className="ml-20 items-center flex flex-1" sx={{ position: 'relative', display: 'flex' }}>
									<CircularProgress variant="determinate" value={uploadProgress} />
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
										{`${Math.round(uploadProgress)}%`}
										</Typography>
									</Box>
								</Box> )}
								
							</div>
						)}
						
					</div>
				)
			}
			innerScroll
		/>
	);
}

export default withReducer('accesscontrolApp', reducer)(Download);
