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
	const [uploadProgress, setUploadProgress] = useState(0);
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

	const [imgSrc, setImgSrc]  = useState(null);
	const [cropData, setCropData] = useState("#");
  	const [cropper, setCropper] = useState(null);

	function handleUploadChange(e) {
		const file = e.target.files[0];
		if (!file) {
			return;
		}
		console.log(file)

		if(form.id === parseInt(form.id, 10)) {  // is Integer
			let data = new FormData();
			data.append('domain_id', form.id);
			data.append('file', file);
			
			axios.post(`${rootUrl}/api/domains/uploadimage`, data, {
				onUploadProgress: ProgressEvent => { 
					setUploadProgress(ProgressEvent.loaded / ProgressEvent.total*100);
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

	function handleChangeTab(event, value) {
		setTabValue(value);
	}

	function setFeaturedImage(id) {
		setForm(_.set({ ...form }, 'featuredImageId', id));
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
										src={ form.image ? `${rootUrl}/imgs/domains/${form.image}`: "assets/images/ecommerce/product-image-placeholder.png" }
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
									onClick={() => dispatch(Actions.saveDomain(form))}
								>
									Save
								</Button>
							</FuseAnimate> )}
							{/* <FuseAnimate animation="transition.slideRightIn" delay={300}>
								<Button
										className="mx-8 whitespace-no-wrap normal-case"
										variant="contained"
										color="primary"
										disabled={!canBeSubmitted()}
										onClick={() => dispatch(Actions.saveDomain(form))}
									>
										Remove
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
					{ routeParams.domainId !== 'new' && (<Tab className="h-64 normal-case" label="Domain Image" />)}
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
								<div className="flex flex-1 w-full">
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

									{ uploadProgress > 0 && (<Box sx={{ position: 'relative', display: 'inline-flex' }}>
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
												}}
											>
												<Typography variant="caption" component="div">
												{`${Math.round(uploadProgress)}%`}
												</Typography>
											</Box>
										</Box> )}

								</div>
							</div>
						)}
						
					</div>
				)
			}
			innerScroll
		/>
	);
}

export default withReducer('accesscontrolApp', reducer)(Domain);
