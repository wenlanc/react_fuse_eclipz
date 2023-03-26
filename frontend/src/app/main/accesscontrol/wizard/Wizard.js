import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import FusePageSimple from '@fuse/core/FusePageSimple';
import FusePageCarded from '@fuse/core/FusePageCarded';
import FuseScrollbars from '@fuse/core/FuseScrollbars';
import FuseAnimate from '@fuse/core/FuseAnimate';
import Hidden from '@material-ui/core/Hidden';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withReducer from 'app/store/withReducer';
import clsx from 'clsx';
import _ from '@lodash';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../store/actions';
import reducer from '../store/reducers';
import { useTheme } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import SwipeableViews from 'react-swipeable-views';
import { green } from '@material-ui/core/colors';
import Fab from '@material-ui/core/Fab';
import { Link, useParams } from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { useForm, useDeepCompareEffect } from '@fuse/hooks';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';
import Checkbox from '@material-ui/core/Checkbox';
import Autocomplete from '@material-ui/lab/Autocomplete';


const useStyles = makeStyles(theme => ({
	content: {
		'& canvas': {
			maxHeight: '100%'
		}
	},
	selectedProject: {
		background: theme.palette.primary.main,
		color: theme.palette.primary.contrastText,
		borderRadius: '8px 0 0 0'
	},
	projectMenuButton: {
		background: theme.palette.primary.main,
		color: theme.palette.primary.contrastText,
		borderRadius: '0 8px 0 0',
		marginLeft: 1
	}
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
    anchorOrigin: {
        vertical: "bottom",
        horizontal: "left"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "left"
      },
      getContentAnchorEl: null
  };
  

function Wizard(props) {
	const dispatch = useDispatch();
	const classes = useStyles(props);
	const pageLayout = useRef(null);
	const theme = useTheme();

	const authUser = useSelector(({ auth }) => auth.user);

    let steps = ['Select Domain', 'Add New Admin', 'Add New Gateway and/or Application', 'Add new Client or update Client Access Control'];
    if( authUser && authUser.role!='superadmin') {
        //steps = ['Add New Admin', 'Add New Gateway and/or Application', 'Add new Client or update Client Access Control'];
    }

	useEffect(() => {

	}, [dispatch]);

    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const isStepOptional = (step) => {
        return false; //step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
        // You probably want to guard against something like this,
        // it should never occur unless someone's actively trying to break something.
        throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
        const newSkipped = new Set(prevSkipped.values());
        newSkipped.add(activeStep);
        return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const handleChangeActiveStep = (index) => {
        setActiveStep(index);
    }

    const handleFinish = () => {

    }

    const { form, handleChange, setForm } = useForm(null);

    const [showPassword, setShowPassword] = useState(false);
	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};

    const domains = useSelector(({ accesscontrolApp }) => accesscontrolApp.domains.data);
    const domain = useSelector(({ accesscontrolApp }) => accesscontrolApp.domain.data);

    useEffect(() => {
		dispatch(Actions.getDomains());
        dispatch(Actions.getServices(selectedDomain));
        dispatch(Actions.getUsers( 0, 10, { _id:"name" , _direction:"ASC"}, '', selectedDomain ));
        dispatch(Actions.getApps(selectedService));
	}, [dispatch]);

    const [selectedDomain , setSelectedDomain] = useState(authUser.domain_id);
    const [newDomainName, setNewDomainName] = useState("");

    useEffect(() => {
		if(domain) {
            setSelectedDomain(domain.id)
        }
	}, [domain]);

    useEffect(() => {
		if(selectedDomain) {
            dispatch(Actions.getServices(selectedDomain));
            dispatch(Actions.getUsers( 0, 10, { _id:"name" , _direction:"ASC"}, '', selectedDomain ));
        }
	}, [selectedDomain]);


    // Step 2 Adding new admin 
    const [ newAdminName, setNewAdminName ] = useState('');
    const [ newAdminPassword, setNewAdminPassword ] = useState('');
    const [selectedAdminId , setSelectedAdminId] = useState(null);
    const admin = useSelector(({ accesscontrolApp }) => accesscontrolApp.admin.data);
    useEffect(() => {
		if(admin) {
            setSelectedAdminId(admin.id)
        }
	}, [admin]);

    // Step 3 , gateway 
    const [ newServiceName, setNewServiceName ] = useState('');

    const service = useSelector(({ accesscontrolApp }) => accesscontrolApp.service.data);
    const services = useSelector(({ accesscontrolApp }) => accesscontrolApp.services.data);
    const [ selectedService , setSelectedService ] = useState(null);

    const [ newAppName , setNewAppName ] = useState('');
    const [ newAllowedIps , setNewAllowedIps ] = useState('');

    useEffect(() => {
		if(service) {
            setSelectedService(service.id)
        }
	}, [service]);

    useEffect(() => {
		if(selectedService) {
            dispatch(Actions.getApps(selectedService));
        }
	}, [selectedService]);

    // step 4 add new client 

    const [ newUserName, setNewUserName ] = useState('');

    const user = useSelector(({accesscontrolApp}) => accesscontrolApp.user.data);
    const users = useSelector(({accesscontrolApp}) => accesscontrolApp.users.data);
    const [selectedUser ,setSelectedUser] = useState(null);

    useEffect(() => {
		if(user) {
            setSelectedUser(user.id)
            setSelectedApps( user.app_ids.map( item => { 
				let app = user.app_list.filter( app => { return app.id == item});
				if( app && app.length){
					return app[0];
					//return {value: item , label :  app[0].name }; 
				}
			}));
        }
	}, [user]);

    const [selectedApps , setSelectedApps] = useState([]);
    const app = useSelector(({ accesscontrolApp }) => accesscontrolApp.app.data);
    const apps = useSelector(({ accesscontrolApp }) => accesscontrolApp.apps.data);

	return (
        <FusePageCarded
            classes={{
                content: 'rounded-8 h-full',
                header: 'min-h-72 h-72 sm:h-136 sm:min-h-136'
            }}
            header={
                <div className="flex flex-1 w-full items-center justify-between 1max-w-2xl">
                    {/* <Hidden lgUp>
                        <IconButton
                            onClick={ev => pageLayout.current.toggleLeftSidebar()}
                            aria-label="open left sidebar"
                        >
                            <Icon>menu</Icon>
                        </IconButton>
                    </Hidden> */}
                    
                    <Typography className="flex-1 text-20 mx-16">Wizard</Typography>

                    {/* <FuseAnimate animation="transition.slideRightIn" delay={300}>
                        <Button
                            component={Link}
                            to="/users/new"
                            className="whitespace-no-wrap normal-case"
                            variant="contained"
                            color="secondary"
                        >
                            <span className="hidden sm:flex">Reset</span>
                            <span className="flex sm:hidden">Reset</span>
                        </Button>
                    </FuseAnimate> */}

                    <FuseAnimate animation="transition.slideRightIn" delay={300}>
                        <Button
                            className="mx-8 whitespace-no-wrap normal-case"
                            variant="contained"
                            color="secondary"
                            disabled={false}
                            onClick={() => {  handleReset() } }
                        >
                            Reset
                        </Button>
                    </FuseAnimate>
                </div>
            }
            content = {
                
                <div className="p-0 round-8 1max-w-2xl  h-full">
                    <FuseScrollbars className="w-full overflow-auto h-full">
                        <FusePageSimple
                            content = {
                                <div className="pt-16 pb-16" >

                                    <SwipeableViews
                                        className="w-full h-full flex flex-1 relative  overflow-hidden"
                                        index={activeStep}
                                    // enableMouseEvents
                                    // onChangeIndex={handleChangeActiveStep}
                                    >
                                        {  (authUser && (authUser.role=='superadmin')) ? ( 
                                            <div
                                                className="flex justify-center pt-16 pb-16"
                                            >
                                                <Paper className="w-full max-w-lg rounded-8 p-16 md:p-24" elevation={1}>
                                                    <div
                                                        dir={theme.direction}
                                                    >
                                                        
                                                        <TextField
                                                            className="mt-8 mb-16 sm:w-320"
                                                            //error={form.name === ''}
                                                            required
                                                            label="New Domain"
                                                            autoFocus
                                                            value={newDomainName}
                                                            onChange={ (event) => { setNewDomainName(event.target.value) }}
                                                            variant="outlined"
                                                            fullWidth
                                                        />
                                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                                        <FuseAnimate animation="transition.slideRightIn" delay={300}>
                                                            <Button
                                                                className="mt-16 whitespace-no-wrap normal-case"
                                                                variant="contained"
                                                                color="secondary"
                                                                disabled={false}
                                                                onClick={ () => {
                                                                    if( !newDomainName )
                                                                        return ;

                                                                    dispatch( Actions.saveDomain( { name: newDomainName } ))
                                                                    dispatch( Actions.getDomains() )
                                                                    
                                                                } }
                                                            >
                                                                Add New Domain
                                                            </Button>
                                                        </FuseAnimate>

                                                        <div className="flex flex-1 w-full items-center ">
                                                            <label
                                                                className= 'flex items-center justify-center relative px-32 pt-8 pb-16 rounded-4 overflow-hidden cursor-pointer'
                                                            >
                                                                Or 
                                                            </label>
                                                        </div>

                                                        <FormControl className="flex w-full sm:w-320" variant="outlined">
                                                            <InputLabel htmlFor="domain_id-label-placeholder"> Select Domain </InputLabel>
                                                            <Select
                                                                value={selectedDomain}
                                                                onChange={ ( event ) => { 
                                                                    setSelectedDomain(event.target.value); 
                                                                    setNewDomainName(""); 
                                                                }}
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
                                                        <hr className="mt-16" />               
                                                        <div className="mt-16 flex flex-1 w-full items-center ">
                                                            <label
                                                                className= 'flex items-center justify-center relative px-32 pt-16 pb-16 rounded-4 mb-16 overflow-hidden cursor-pointer shadow-1 hover:shadow-5'
                                                            >
                                                                Selected Domain : { domains.filter( k => (k.id == selectedDomain)).length > 0 ? domains.filter( k => (k.id == selectedDomain))[0].name : ( domain?domain.name:"Not Selected")  }
                                                            </label>
                                                        </div>
                                                    </div>
                                                </Paper>
                                            </div>
                                        ):
                                        ( 
                                            <div
                                                className="flex justify-center pt-16 pb-16"
                                            >
                                                <Paper className="w-full max-w-lg rounded-8 p-16 md:p-24" elevation={1}>
                                                    <div
                                                        dir={theme.direction}
                                                    >
                                                              
                                                        <div className="mt-16 flex flex-1 w-full items-center ">
                                                            <label
                                                                className= 'flex items-center justify-center relative px-32 pt-16 pb-16 rounded-4 mb-16 overflow-hidden cursor-pointer shadow-1 hover:shadow-5'
                                                            >
                                                                Selected Domain : { domains.filter( k => (k.id == selectedDomain)).length > 0 ? domains.filter( k => (k.id == selectedDomain))[0].name : ( domain?domain.name:"Not Selected")  }
                                                            </label>
                                                        </div>
                                                    </div>
                                                </Paper>
                                            </div>
                                        )
                                        }

                                            <div
                                                className="flex justify-center pt-16 pb-16"
                                            >
                                                <Paper className="w-full max-w-lg rounded-8 p-16 md:p-24" elevation={1}>
                                                    <div
                                                        dir={theme.direction}
                                                    >
                                                    <TextField
                                                        className="mt-8 mb-16 sm:w-320"
                                                        //error={form.name === ''}
                                                        required
                                                        label="Admin Name"
                                                        autoFocus
                                                        value={newAdminName}
                                                        onChange={ (event) => { setNewAdminName(event.target.value)}}
                                                        variant="outlined"
                                                        fullWidth
                                                        autoComplete='off'
                                                    />

                                                    <FormControl sx={{ m: 1, width: '25ch' }} className="mt-8 mb-16 flex w-full sm:w-320" variant="outlined">
                                                        <InputLabel htmlFor="outlined-adornment-password">Admin Password</InputLabel>
                                                        <OutlinedInput
                                                            id="outlined-adornment-password"
                                                            type={showPassword ? 'text' : 'password'}
                                                            value={newAdminPassword}
                                                            name="password"
                                                            onChange={ (event) => { setNewAdminPassword(event.target.value)}}
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
                                                        />
                                                    </FormControl>

                                                    <FuseAnimate animation="transition.slideRightIn" delay={300}>
                                                        <Button
                                                            className="mt-16 whitespace-no-wrap normal-case"
                                                            variant="contained"
                                                            color="secondary"
                                                            disabled={false}
                                                            onClick={() => { 
                                                                if( !newAdminName || !newAdminPassword )
                                                                    return;
                                                                if( (authUser && (authUser.role=='superadmin')) ) {
                                                                    if(selectedDomain) {
                                                                        dispatch(Actions.saveAdmin( { name: newAdminName, password: newAdminPassword, domain_id:selectedDomain } )) 
                                                                    }
                                                                } else {
                                                                    dispatch(Actions.saveAdmin( { name: newAdminName, password: newAdminPassword } )) 
                                                                }   
                                                            }}
                                                        >
                                                            Add New Admin
                                                        </Button>
                                                    </FuseAnimate>
                                                    
                                                    <hr className="mt-16" />               
                                                    <div className="mt-16 flex flex-1 w-full items-center ">
                                                        <label
                                                            className= 'flex items-center justify-center relative px-32 pt-16 pb-16 rounded-4 mb-16 overflow-hidden cursor-pointer shadow-1 hover:shadow-5'
                                                        >
                                                            Selected Admin : { admin ? admin.name : "Not selected"}
                                                        </label>
                                                    </div>
                                                    
                                                    </div>
                                                </Paper> 
                                            </div>
                                        
                                            <div
                                                className="flex justify-center pt-16 pb-16"
                                            >
                                                <Paper className="w-full max-w-lg rounded-8 p-16 md:p-24" elevation={1}>
                                                    <div
                                                        dir={theme.direction}
                                                    >
                                                    
                                                        <TextField
                                                            className="mt-8 mb-16 sm:w-320"
                                                            //error={form.name === ''}
                                                            required
                                                            label="New Gateway"
                                                            autoFocus
                                                            value={newServiceName}
                                                            onChange={(event) => { setNewServiceName(event.target.value) }}
                                                            variant="outlined"
                                                            fullWidth
                                                        />
                                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                                        <FuseAnimate animation="transition.slideRightIn" delay={300}>
                                                            <Button
                                                                className="mt-16 whitespace-no-wrap normal-case"
                                                                variant="contained"
                                                                color="secondary"
                                                                disabled={false}
                                                                onClick={() => {  
                                                                    if(!newServiceName)
                                                                        return;

                                                                    if( (authUser && (authUser.role=='superadmin')) ) {
                                                                        if(selectedDomain) {
                                                                            Promise.all([
                                                                                dispatch(Actions.saveService( { name: newServiceName, domain_id: selectedDomain }, true )) 
                                                                            ]).then(() => dispatch(Actions.getServices(selectedDomain)))
                                                                        }
                                                                    } else {
                                                                        Promise.all([
                                                                            dispatch(Actions.saveService( { name: newServiceName}, true )) 
                                                                        ]).then(() => dispatch(Actions.getServices(selectedDomain)))
                                                                    }     
                                                                 } }
                                                            >
                                                                Add New Gateway
                                                            </Button>
                                                        </FuseAnimate>

                                                        <div className="flex flex-1 w-full items-center ">
                                                            <label
                                                                className= 'flex items-center justify-center relative px-32 pt-8 pb-16 rounded-4 overflow-hidden cursor-pointer'
                                                            >
                                                                Or 
                                                            </label>
                                                        </div> 

                                                        <FormControl className="flex w-full sm:w-320" variant="outlined">
                                                            <InputLabel htmlFor="service_id-label-placeholder"> Select Gateway </InputLabel>
                                                            <Select
                                                                value={selectedService}
                                                                onChange={ ( event ) => { 
                                                                    setSelectedService(event.target.value); 
                                                                    setNewServiceName(""); 
                                                                    // if(services.filter( k => (k.id == event.target.value)).length > 0) {
                                                                    //     dispatch(Actions.downloadJsonService(event.target.value, services.filter( k => (k.id == event.target.value))[0].name))
                                                                    // }

                                                                }}
                                                                input={
                                                                    <OutlinedInput
                                                                        labelWidth={'service_id'.length * 9}
                                                                        id="service_id-label-placeholder"
                                                                        name="service_id"
                                                                    />
                                                                }
                                                            >
                                                                { services && services.map(service => (
                                                                    <MenuItem value={service.id} key={service.id}>
                                                                        {service.name}
                                                                    </MenuItem>
                                                                ))}
                                                            </Select>
                                                        </FormControl>    
                                                           
                                                        <hr className="mt-16" />               
                                                        <div className="mt-16 flex flex-1 w-full items-center ">
                                                            <label
                                                                className= 'flex items-center justify-center relative px-32 pt-16 pb-16 rounded-4 mb-16 overflow-hidden cursor-pointer shadow-1 hover:shadow-5'
                                                            >
                                                                Selected Gateway : { services.filter( k => (k.id == selectedService)).length > 0 ? services.filter( k => (k.id == selectedService))[0].name : ( service?service.name:"Not Selected")  }

                                                            </label>
                                                        </div>  

                                                        <hr className="mt-16" />           
                                                        <TextField
                                                            className="flex w-full mt-16 mb-16 sm:w-320"
                                                            //error={form.name === ''}
                                                            required
                                                            label="New Application"
                                                            autoFocus
                                                            value={ newAppName }
                                                            onChange={ (event) => { setNewAppName(event.target.value)} }
                                                            variant="outlined"
                                                            fullWidth
                                                        />

                                                        <TextField
                                                            className="flex w-full mt-8 mb-8 sm:w-320"
                                                            //error={form.name === ''}
                                                            required
                                                            label="Allowed IPs"
                                                            autoFocus
                                                            value={newAllowedIps}
                                                            onChange={(event) => { setNewAllowedIps(event.target.value)}}
                                                            variant="outlined"
                                                            fullWidth
                                                        /> 

                                                        <FuseAnimate animation="transition.slideRightIn" delay={300}>
                                                            <Button
                                                                className="mt-16 whitespace-no-wrap normal-case"
                                                                variant="contained"
                                                                color="secondary"
                                                                disabled={false}
                                                                onClick={() => {  
                                                                    if( !selectedService || !newAppName || !newAllowedIps )
                                                                        return;

                                                                        dispatch(Actions.saveApp({
                                                                            name: newAppName,
                                                                            allowed_ips : newAllowedIps,
                                                                            service_id : selectedService
                                                                        }))    
                                                                 } }
                                                            >
                                                                Add New Application
                                                            </Button>
                                                        </FuseAnimate> 

                                                    </div> 
                                                </Paper> 
                                            </div>
                                    
                                            <div
                                                className="flex justify-center pt-16 pb-16"
                                            >
                                                <Paper className="w-full max-w-lg rounded-8 p-16 md:p-24" elevation={1}>
                                                
                                                    <div
                                                        dir={theme.direction}
                                                    >
                                                        <TextField
                                                            className="mt-8 mb-8 sm:w-320"
                                                            //error={form.name === ''}
                                                            required
                                                            label="New Client"
                                                            autoFocus
                                                            value={ newUserName }
                                                            onChange={ (event) => { setNewUserName(event.target.value) } }
                                                            variant="outlined"
                                                            fullWidth
                                                        />   
                                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                                        <FuseAnimate animation="transition.slideRightIn" delay={300}>
                                                            <Button
                                                                className="mt-16 whitespace-no-wrap normal-case"
                                                                variant="contained"
                                                                color="secondary"
                                                                disabled={false}
                                                                onClick={() => {  

                                                                    if(!newUserName)
                                                                        return;
                                                                    
                                                                    if( (authUser && (authUser.role=='superadmin')) ) {
                                                                        if(selectedDomain) {
                                                                            Promise.all([
                                                                                dispatch(Actions.saveUser( { name: newUserName, domain_id: selectedDomain }, true )) 
                                                                            ]).then(() => dispatch( Actions.getUsers( 0, 10, { _id:"name" , _direction:"ASC"}, '', selectedDomain  ) ))
                                                                        }
                                                                    } else {
                                                                        Promise.all([
                                                                            dispatch(Actions.saveUser( { name: newUserName}, true )) 
                                                                        ]).then(() => dispatch( Actions.getUsers( 0, 10, { _id:"name" , _direction:"ASC"}, '', selectedDomain ) ))
                                                                    } 

                                                                }}
                                                            >
                                                                Add New Client
                                                            </Button>
                                                        </FuseAnimate> 

                                                        <div className="flex flex-1 w-full items-center ">
                                                            <label
                                                                className= 'flex items-center justify-center relative px-32 pt-8 pb-16 rounded-4 overflow-hidden cursor-pointer'
                                                            >
                                                                Or 
                                                            </label>
                                                        </div>  

                                                        <FormControl className="flex w-full sm:w-320" variant="outlined">
                                                            {/* <InputLabel htmlFor="category-label-placeholder"> Select Client </InputLabel> */}
                                                            {/* <Select
                                                                value={selectedUser}
                                                                onChange={ (event) => { setSelectedUser(event.target.value) }}
                                                                input={
                                                                    <OutlinedInput
                                                                        labelWidth={'domain_id'.length * 9}
                                                                        name="user_id"
                                                                        id="category-label-placeholder"
                                                                    />
                                                                }
                                                            >
                                                                { users && users.map(user => (
                                                                    <MenuItem value={user.id} key={user.id}>
                                                                        {user.name}
                                                                    </MenuItem>
                                                                ))}
                                                            </Select> */}

                                                            <Autocomplete
                                                                id="free-solo-2-demo"
                                                                disableClearable
                                                                getOptionLabel={(option) => option.name}
                                                                options={users}
                                                                onChange={(event, newValue) => {
                                                                    console.log(JSON.stringify(newValue, null, ' '));
                                                                    setSelectedUser(newValue.id);
                                                                    if(newValue.app_ids) {
                                                                        setSelectedApps( newValue.app_ids.map( item => { 
                                                                            let app = newValue.app_list.filter( app => { return app.id == item});
                                                                            if( app && app.length){
                                                                                return app[0];
                                                                                //return {value: item , label :  app[0].name }; 
                                                                            }
                                                                        }));
                                                                    } else {
                                                                        setSelectedApps([]);
                                                                    }
                                                                    //dispatch(Actions.downloadJsonUser(newValue.id, newValue.name))
                                                                  }}
                                                                onInputChange={(event, newValue) => {
                                                                    console.log(JSON.stringify(newValue, null, ' '));
                                                                    if (newValue !== "" || newValue !== null) {
                                                                        dispatch( Actions.getUsers( 0, 10, { _id:"name" , _direction:"ASC"}, newValue , selectedDomain ) )
                                                                    }
                                                                  }}  
                                                                renderInput={(params) => (
                                                                <TextField
                                                                    className="mt-8 mb-8 sm:w-320"
                                                                    {...params}
                                                                    label="Search Client"
                                                                    InputProps={{
                                                                    ...params.InputProps,
                                                                    type: 'search',
                                                                    }}
                                                                    //value={ selectedUser }
                                                                    onChange={ (event) => { 
                                                                        console.log(event.target.value)
                                                                        if (event.target.value !== "" || event.target.value !== null) {

                                                                        }
                                                                    } }
                                                                    variant="outlined"
                                                                    fullWidth
                                                                />
                                                                )}
                                                            />

                                                        </FormControl> 

                                                        <hr className="mt-16" />  

                                                        <div className="mt-16 flex flex-1 w-full items-center ">
                                                            <label
                                                                className= 'flex items-center justify-center relative px-32 pt-16 pb-16 rounded-4 mb-16 overflow-hidden cursor-pointer shadow-1 hover:shadow-5'
                                                            >
                                                                Selected Client : { users.filter( k => (k.id == selectedUser)).length > 0 ? users.filter( k => (k.id == selectedUser))[0].name : ( user?user.name:"Not Selected")  }
                                                            </label>
                                                        </div> 

                                                        <hr className="mt-16 mb-16" />  

                                                        <FormControl  
                                                            className={clsx(
                                                                classes.formControl,
                                                                'sm:w-320'
                                                            )}
                                                            ariant="outlined">
                                                            <InputLabel style={{ marginLeft:'15px', marginTop:"-7px"}} htmlFor="category-label-placeholder">Allowed Applications</InputLabel>
                                                            <Select
                                                                labelId="demo-multiple-checkbox-label"
                                                                id="demo-multiple-checkbox"
                                                                multiple
                                                                value={selectedApps}
                                                                name="apps"
                                                                onChange={ (event) => { console.log(event.target.value);  setSelectedApps(event.target.value);} }
                                                                placeholder="Select multiple applications"
                                                                input={<OutlinedInput labelWidth={'Applications'.length * 9} name="app_id" id="category-label-placeholder" />  } 
                                                                renderValue={(selected) => { 
                                                                        return (
                                                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }} style={{ padding:'2px', margin: '3px', display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                                                            {selected.map((app) => (
                                                                            <Chip style={{margin:'3px'}} key={app.id} label={ app.service.name + ' - ' + app.name + ' ( ' + app.allowed_ips + ' )' } />
                                                                            ))}
                                                                        </Box> )
                                                                        
                                                                    //   selected.join(', ')
                                                                    }}
                                                                MenuProps={MenuProps}
                                                                >
                                                                { apps && apps.length && apps.map((item) => ( 
                                                                    <MenuItem key={item.id} value={item}>
                                                                        <Checkbox checked={ selectedApps.indexOf(item) > -1 } />
                                                                        <ListItemText primary={ item.service.name + ' - ' +item.name + ' ( ' + item.allowed_ips + ' )' } />
                                                                    </MenuItem>
                                                                ))}
                                                            </Select>
                                                        </FormControl> 

                                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                                        <FuseAnimate animation="transition.slideRightIn" delay={300}>
                                                            <Button
                                                                className="mt-8 whitespace-no-wrap normal-case"
                                                                variant="contained"
                                                                color="secondary"
                                                                disabled={false}
                                                                onClick={() => {  
                                                                    if(!selectedUser) {
                                                                        return;
                                                                    }
                                                                    dispatch(Actions.saveUser({
                                                                        id : selectedUser,
                                                                        app_ids : selectedApps.map(item => item.id),
                                                                        name:users.filter( k => (k.id == selectedUser)).length > 0 ? users.filter( k => (k.id == selectedUser))[0].name : ""
                                                                    }))
                                                                 } }
                                                            >
                                                                Save
                                                            </Button>
                                                        </FuseAnimate> 

                                                    </div> 
                                                </Paper> 
                                            </div>
                                        
                                            {/* <div
                                                className="flex justify-center p-16 pb-64 sm:p-24 sm:pb-64 md:p-48 md:pb-64"
                                            >
                                                <Paper className="w-full max-w-lg rounded-8 p-16 md:p-24" elevation={1}>
                                                    <div
                                                        dir={theme.direction}
                                                    >
                                                        All Finished!

                                                    </div>
                                                </Paper>
                                            </div> */}
                                    </SwipeableViews>

                                    <div className="flex justify-center w-full absolute left-0 right-0 bottom-0 pb-16 md:pb-32" >
                                        <div className="flex justify-between w-full max-w-xl px-8">
                                            <div>
                                                {activeStep > 0 && (
                                                    <Fab className="" color="secondary" onClick={handleBack}>
                                                        <Icon>{theme.direction === 'ltr' ? 'chevron_left' : 'chevron_right'}</Icon>
                                                    </Fab>
                                                )}
                                            </div>
                                            <div>
                                                {activeStep < steps.length-1 ? (
                                                    <Fab className="" color="secondary" onClick={handleNext}>
                                                        <Icon>{theme.direction === 'ltr' ? 'chevron_right' : 'chevron_left'}</Icon>
                                                    </Fab>
                                                ) : (
                                                    <Fab className={classes.successFab}  to="/applications" component={Link} >
                                                        <Icon>check</Icon>
                                                    </Fab>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            }
                        
                            leftSidebarContent={
                                <Stepper classes={{ root: 'bg-transparent' }} activeStep={activeStep} orientation="vertical">
                                    {steps.map((label, index) => {
                                        const stepProps = {};
                                        const labelProps = {};
                                        if (isStepOptional(index)) {
                                            labelProps.optional = (
                                            <Typography variant="caption">Optional</Typography>
                                            );
                                        }
                                        if (isStepSkipped(index)) {
                                            stepProps.completed = false;
                                        }
                                        return (
                                            <Step key={label} {...stepProps} onClick={() => handleChangeActiveStep(index)}>
                                            <StepLabel {...labelProps}>{label}</StepLabel>
                                            </Step>
                                        );
                                    })}
                                </Stepper>
                            }

                            innerScroll
                        /> 
                    </FuseScrollbars>
                </div>
                
            }
            innerScroll
        />
		
	);
}

export default withReducer('accesscontrolApp', reducer)(Wizard);
