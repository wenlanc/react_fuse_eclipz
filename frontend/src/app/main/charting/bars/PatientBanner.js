import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import moment from "moment";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import ButtonGroups from './ButtonGroups';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import withReducer from 'app/store/withReducer';
import * as Actions from '../store/actions';
import reducer from '../store/reducers';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InsuranceMenu from './InsuranceMenu';
import LocationMenu from './LocationMenu';
import PhoneTypeMenu from './PhoneTypeMenu';
import TextAndInput from './TextAndInput';
import TextPhoneAndInput from './TextPhoneAndInput';
import BmiCalculator from './BmiCalculator';
import TextAndMultiselect from './TextAndMultiselect';
import NumberAndInput from './NumberAndInput';
import CrciMenu from './CrciMenu';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';

import jwtService from 'app/services/jwtService';
import { first } from 'lodash';
import {crciOptions, getCrciIndex} from '../../../services/helper';
import {bmiOptions, getBmiIndex} from '../../../services/helper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tooltip: {
    maxWidth: 500,
    fontSize: "20px"
  }
}));

function PatientBanner(props) {

  const classes = useStyles();
  const dispatch = useDispatch();
  const [more, setMore] = useState(false);
  const [patients, setPatients] = useState([]);

  const [allergyList, setAllergyList] = useState([]);
  const [allergyListTags, setAllergyListTags] = useState([]);
  const [allergyListSuggestions, setAllergyListSuggestions] = useState([]);

  const [pharmacyList, setPharmacyList] = useState([]);
  const [pharmacyListTags, setPharmacyListTags] = useState(null);
  const [pharmacyListSuggestions, setPharmacyListSuggestions] = useState([]);

  const [providerList, setProviderList] = useState([]);
  const [providerListTags, setProviderListTags] = useState([]);
  const [providerListSuggestions, setProviderListSuggestions] = useState([]);

  const [reminderList, setReminderList] = useState([]);

  const [detailInfo, setDetailInfo] = useState([]);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [weightOpen, setWeightOpen] = React.useState(false);
  //const [creatin, setCreatin] = React.useState(localStorage.creatin);
  
  const [result, setResult] = React.useState();
  const { isFixed, weight, height, creatin } = useSelector(({ patientToolbar }) => patientToolbar.selectedPerson);
  var bmi = (703 * (weight / (height * height))).toFixed(2);
  
  const { patient } = props;
  const currentYear = (new Date()).getFullYear();
  const Age = currentYear - patient.DateOfBirth.split("-")[0];
  const [age, setAge] = React.useState(Age);
  const handlePopupClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClickWeight = () => {
    setWeightOpen(true);
  }

  useEffect(() => {
    getAllergiesList();
    getPharmacyList();
    getProviderList();
  }, [])

  useEffect(() => { 
    if(allergyList.length > 0){
      var suggestions =  allergyList.map((item) => ({
        value: item.name,
        label: item.name,
      }));
      setAllergyListSuggestions ( suggestions );
      var temp_obj = [];   
      if( suggestions.length > 3) {
        temp_obj.push(suggestions[0]);
        temp_obj.push(suggestions[1]);
        temp_obj.push(suggestions[2]);
        setAllergyListTags(temp_obj);
      } else {
        setAllergyListTags(suggestions);
      }
    }
  }, [allergyList]);

  useEffect(() => { 
    if(pharmacyList.length){
      var suggestions =  pharmacyList.map((item) => ({
        ...item,
        value: item.Name,
        label: item.Name,
      })); 
      setPharmacyListSuggestions (suggestions);
    }
  }, [pharmacyList]);

  useEffect(() => { 
    if(providerList.length){
      var suggestions =  providerList.map((item) => ({
        value: "(" + item.fName + ", " + item.phone + ", " + item.speciality_name + ")",
        label: "(" + item.fName + ", " + item.phone + ", " + item.speciality_name + ")",
      })); 
      setProviderListSuggestions (suggestions);
      var temp_obj = [];   
      if( suggestions.length > 3) {
        temp_obj.push(suggestions[0]);
        temp_obj.push(suggestions[1]);
        temp_obj.push(suggestions[2]);
        setProviderListTags(temp_obj);
      } else {
        setProviderListTags(suggestions);
      }
      console.log(suggestions);
    }
  }, [providerList]);

  useEffect(() => { 
    if(patient.Id){
      getPatientInfo(patient.Id);
    }
  }, [patient]);
  // Weight Field
  const [inputOpen, setInputOpen] = React.useState(false);

  const handleClickText = () => {
    setInputOpen(true);
  }

  function handleClickAway(ev) {
    setInputOpen(false)
  }
  function handleInputChange(e) {

  }

  function handleCreatin(e) {
    //setCreatin(e.target.value);
    //localStorage.setItem('creatin', e.target.value)
    dispatch(Actions.changeCreatin(e.target.value));
  }
  // 

  var creatinResult = 0
  if (age && weight && creatin) {
    creatinResult = ((140 - age) * (weight * 0.45359237) * 0.85 / 72 / creatin).toFixed(0)
  }

  // Detail Modal 
  const [openModal, setOpenModal] = React.useState(false);

  const handleClickOpen = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => { 
    if (openModal) { 
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [openModal]);

  const contactNumberType = ["M","H","W"];
  const contactNumberValues = [patient.MobileNumber, patient.HomeNumber, patient.WorkNumber];

  const onChangeContactNumber = (values) => {
    console.log(values);
    patient.MobileNumber = values[0];
    patient.HomeNumber = values[1];
    patient.WorkNumber = values[2];
  }
  
  // Father , Mother, Brother, Sister, ...
  //var emergencyNumberValues = {"F":"","M":"","B":"","S":""};
  const [emergencyNumberValues, setEmergencyNumberValues] = React.useState({"F":"","M":"","B":"","S":""});

  const onChangeEmergencyNumber = (values) => { 
    var keys = Object.keys(emergencyNumberValues);
    
    for(var i=0;i<values.length;i++){
      if(emergencyNumberValues[keys[i]] !== ""){
        emergencyNumberValues[keys[i]].MobileNumber = values[i];
      } else {
        emergencyNumberValues[keys[i]] = {"relation":keys[i],"MobileNumber":values[i]}
      }      
    }
    detailInfo.emergency = Object.values(emergencyNumberValues).filter((item)=> item.MobileNumber !== "");
    setDetailInfo(detailInfo);
  }

  const onChangePharmacy = (values) => {
    setPharmacyListTags(values);
  }
  const onChangeAllergy = (values) => {
    setAllergyListTags(values);
  }
  const onChangeProvider = (values) => {
    setProviderListTags(values);
  }
  const onChangeWeight = (value) => {
    dispatch(Actions.changeWeight(value));
  }
  const onChangeHeight = (value) => {
    dispatch(Actions.changeHeight(value));
  }

  const getAllergiesList = () => {
    /**
     * Getting all allergy data from Api
     */
    jwtService
      .getAllergies()
      .then(response => { 
        if(response.alergylist.length > 0){
          setAllergyList(response.alergylist);
        }
      })
      .catch(error => {
      });
  }

  const getPharmacyList = () => {
    /**
     * Getting all phamarcy data from Api
     */
    jwtService
      .getPharmacys()
      .then(response => { 
        if(response.length > 0){
          setPharmacyList(response);
        }
      })
      .catch(error => {
      });
  }

  const getProviderList = () => {
    /**
     * Getting all patients data from Api
     */
    jwtService
      .getProviders()
      .then(response => { 
        if(response.length > 0){
          setProviderList(response);
        }
      })
      .catch(error => {
      });
  }

  const getPatientInfo = (patient_id) => {
    /**
     * Getting all remiders data from Api
     */
    jwtService
    .getPatientInfo( patient_id )
    .then(response => {  
      console.log(response)
      if(response.reminder.length > 0){
        setReminderList(response.reminder);
      }
      // Getting pharmacy list from detail info
      var pharmacyListTags1 = response.demos.pharmecy.map((item) => ({
        ...item,
        label: item.Name,
        value: item.Name
      }));
      setPharmacyListTags(pharmacyListTags1);
      // Getting emergency contact numbers from detail info
      // With "relation", M - mother, F - father, B - brother
      response.emergency.map((item) => {
        if( item.relation !== ""){
          var firstChar = item.relation.toUpperCase().charAt(0);
          emergencyNumberValues[firstChar] = item;
         }
      });
      setEmergencyNumberValues(emergencyNumberValues);
      response.emergency = emergencyNumberValues;
      setDetailInfo(response);
    })
    .catch(error => {
    });
  }

  const problemSelection = useSelector(({patientToolbar}) => patientToolbar.problems.problems);
  const [problems, setProblems] = React.useState([]);
  React.useEffect(() => { 
    setProblems(problemSelection);
  }, [problemSelection]);

  return (
    <>
      <div className="flex">
        <Link className="w-1/6" to='/charting/demographic'>
          <img className="w-full" src={patient.profile} alt="Woman paying for a purchase" />
        </Link>
        <div className="flex w-5/6">
          <div className="flex flex-col pl-8 w-1/4">
            <Typography variant="subtitle1" noWrap={true}><b>Name:</b> {patient.FirstName} {patient.LastName}</Typography>
            <Typography variant="subtitle1" noWrap={true}><b>DOB:</b> {moment(patient.DateOfBirth).format("MM-DD-YYYY")}</Typography>
            <Typography variant="subtitle1" noWrap={true}><b>Demo:</b> {Age} y/o {patient.Sex},{patient.racename}</Typography>
            <Typography variant="subtitle1" noWrap={true}><b>Location:</b> {patient.locationname}</Typography> 
            {/* <LocationMenu /> */}
            <Typography variant="subtitle1" noWrap={true}><b>DOLE:</b> {patient.DOLE}</Typography>
          </div>
          <div className="flex flex-col pl-8 w-1/4">
            <TextPhoneAndInput title="Cont#" menuValues={contactNumberType} onChange={onChangeContactNumber} initialMenuValue={0} values={contactNumberValues} />
            { emergencyNumberValues ? 
              <TextPhoneAndInput title="Emer#" 
                menuValues={Object.keys(emergencyNumberValues)} 
                onChange={onChangeEmergencyNumber} 
                initialMenuValue={0} 
                values={Object.values(emergencyNumberValues).map((item) => item?item.MobileNumber:"")}  />: ""
            }
            <InsuranceMenu title="1° ins" />
            <InsuranceMenu title="2° ins" />
            <InsuranceMenu title="3° ins" />
          </div>
          <div className="flex flex-col pl-8 w-1/4">
            <NumberAndInput title={"Weight"} initialValue={weight} onChangeValue={onChangeWeight} />
            <Typography noWrap={true} variant="subtitle1"><b>Weight Δ:</b> +25 lbs/24m</Typography>
            <TextAndInput title="Height" initialValue={height} onChangeValue={onChangeHeight} unit="inches" />
            <Typography className="cursor-pointer" variant="subtitle1">
              <span onClick={handlePopupClick} ><b>CrCl:</b>
              {creatinResult ? `${creatinResult} mL/min` : " "} {"("}<CrciMenu age={Age} />{")   "} </span>
              <IconButton aria-label="Increase" style={{padding:0}} color="secondary" onClick={(e)=>{ 
                
                var temp_problems  = [...problems,{
                  key : problems.length+1, 
                  item : patient.FirstName + " " + patient.LastName + " - CrCl:" + (creatinResult ? `${creatinResult} mL/min - ${crciOptions[getCrciIndex(creatinResult)]}` : " "), 
                  cc: "",
                  hpi: false,
                  pmh: true,
                  ass: ""
                }];
                setProblems(temp_problems);
                dispatch(Actions.setProblems( temp_problems ));

                //e.stopPropagation();

                }}>
                <Icon color="action">note_add</Icon>
              </IconButton>
            </Typography>
            <Popover id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              style={{ padding: "16px" }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}>
              <Paper>
                <Typography className="text-center p-4 bg-orange-300"><b>Creatinine Clearance</b></Typography>
                <div className="w-full py-4 px-8">
                  <Typography className="my-8">Sex: Female</Typography>
                  <TextField
                    id="outlined-adornment-weight"
                    label="Age"
                    value={age}
                    disabled
                    onChange={(e) => setAge(e.target.value)}
                    InputProps={{
                      endAdornment: <InputAdornment position="end">Years</InputAdornment>,
                    }}
                    variant="outlined"
                    size="small"
                  />
                </div>
                <div className="w-full py-4 px-8">
                  <TextField
                    id="outlined-adornment-weight"
                    label="Weight"
                    value={weight}
                    onChange={(e) => dispatch(Actions.changeWeight(e.target.value))}
                    disabled
                    InputProps={{
                      endAdornment: <InputAdornment position="end">lbs</InputAdornment>,
                    }}
                    variant="outlined"
                    size="small"
                  />
                </div>
                <div className="w-full py-4 px-8">
                  <TextField
                    id="outlined-adornment-weight"
                    label="Creatinline"
                    value={creatin}
                    onChange={handleCreatin}
                    InputProps={{
                      endAdornment: <InputAdornment position="end">mg/dL</InputAdornment>,
                    }}
                    inputProps={{ min: 1, step:0.1 }}
                    variant="outlined"
                    size="small"
                    type="number"
                    onKeyDown={ (e) => { 
                      if(e.key == "Tab") {
                        handleClose();
                      }
                    }}
                  />
                  <IconButton aria-label="Increase" color="secondary" style={{marginTop:5,padding:0}} onClick={()=>{ 
                    //localStorage.setItem('creatin', (creatin*1 + 0.1).toFixed(1));
                    //setCreatin((creatin*1 + 0.1).toFixed(1));
                    dispatch(Actions.changeCreatin((creatin*1 + 0.1).toFixed(1)));
                    }}>
                    <AddIcon />
                  </IconButton>
                  <IconButton color="secondary" aria-label="Decrease" style={{marginTop:5,padding:0}} onClick={()=>{ 
                    if(creatin > 0.1){
                      //localStorage.setItem('creatin', (creatin*1 - 0.1).toFixed(1))
                      //setCreatin((creatin*1 - 0.1).toFixed(1));
                      dispatch(Actions.changeCreatin((creatin*1 - 0.1).toFixed(1)));
                    }
                    }}>
                    <RemoveIcon />
                  </IconButton>
                </div>
                <div>
                  <Typography>Result: {creatinResult && creatinResult} mL/min</Typography>
                </div>
              </Paper>
            </Popover>
            {/* <Typography variant="subtitle1"><b>BMI:</b> {(703 * (190 / (64 * 64))).toFixed(2)}</Typography> */}
            <div style={{display:"flex"}}>
              <BmiCalculator /> 
              <IconButton aria-label="Increase" style={{padding:0}} color="secondary" onClick={(e)=>{ 
                  
                  var temp_problems  = [...problems,{
                    key : problems.length+1, 
                    item : patient.FirstName + " " + patient.LastName + " - BMI:" + (bmi ? `${bmi} Kg/m2 - ${bmiOptions[getBmiIndex(bmi)]}` : " "), 
                    cc: "",
                    hpi: false,
                    pmh: true,
                    ass: ""
                  }];
                  setProblems(temp_problems);
                  dispatch(Actions.setProblems( temp_problems ));

                  //e.stopPropagation();

                  }}>
                <Icon color="action">note_add</Icon>
              </IconButton>
              </div>
          </div>
          <div className="flex flex-col pl-8 pr-16 w-1/4">
            { allergyListSuggestions.length>0 && <TextAndMultiselect title="Allergies" tagvalues={allergyListTags} suggestionValues={allergyListSuggestions} onChangeTags={onChangeAllergy} /> }
            { pharmacyListSuggestions.length>0 && pharmacyListTags && <TextAndMultiselect title="Pharmacy" tagvalues={pharmacyListTags} suggestionValues={pharmacyListSuggestions} onChangeTags={onChangePharmacy} />}
            { providerListSuggestions.length>0 && <TextAndMultiselect title="Providers" tagvalues={providerListTags} suggestionValues={providerListSuggestions} onChangeTags={onChangeProvider} /> }
            {/* <Tooltip classes={{ tooltip: classes.tooltip }} title="PMC, Pharmacy1, Pharmacy2, Pharmacy3, Pharmacy4, Pharmacy5">
              <Typography variant="subtitle1" noWrap={true}><b>Pharmacy:</b> PMC, Pharmacy1, Pharmacy2, Pharmacy3, Pharmacy4, Pharmacy5</Typography>
            </Tooltip> */}
            {/* <Typography variant="subtitle1" noWrap={true}><b>Pharmacy:</b> PMC</Typography> */}
            {/* <Typography variant="subtitle1"></Typography> */}
            <br />
            <Typography variant="subtitle1" className="text-right"><IconButton onClick={() => { setMore(!more); handleClickOpen();  }}><Icon>add</Icon></IconButton></Typography>
            {/* <Typography variant="h6" className="text-right"><IconButton onClick={() => dispatch(Actions.setFixed(!isFixed))}><Icon>{isFixed ? "arrow_forward" : "arrow_upward"}</Icon></IconButton></Typography> */}
            {/* <div></div> */}
          </div>
        </div>
      </div>
      {more && (
        <>
        {/* <Typography variant="h6">More info goes here</Typography> */}
        <Dialog
          open={openModal}
          onClose={handleModalClose}
          scroll={'paper'}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
          fullWidth={true}
          maxWidth={'lg'}
        >
          <DialogTitle id="scroll-dialog-title">Details</DialogTitle>
          <DialogContent dividers={true}>
            {/* <DialogContentText
              id="scroll-dialog-description"
              ref={descriptionElementRef}
              tabIndex={-1}
            > */}
             <div className="flex flex-col" >
               <div className="flex ">
                  <div className = "pl-4 w-1/6">
                    <Typography style={{textDecoration:"underline"}} variant="h6">DEMOS</Typography>
                    <Typography variant="subtitle2">{patient.MobileNumber}(M)</Typography>
                    <Typography variant="subtitle2">{patient.WorkNumber}(W)</Typography>
                    <Typography variant="subtitle2">{patient.HomeNumber}(H)</Typography>
                    <Typography variant="subtitle2">{patient.email}</Typography>
                    <Typography variant="subtitle2"> {moment(patient.DateOfBirth).format("MM-DD-YYYY")}</Typography>
                    <Typography variant="subtitle2">Sex: {patient.Sex}</Typography>
                    <Typography variant="subtitle2">SS #</Typography>
                    <Typography variant="subtitle2">{patient.locationname}</Typography>
                  </div>
                  <div  className = "pl-4 w-1/6">
                    <Typography style={{textDecoration:"underline"}} variant="h6">Allergies</Typography>
                    { allergyListTags.length && allergyListTags.map((item) => (<Typography key={item.value} variant="subtitle2">{item.value}</Typography>)) }
                  </div>
                  <div  className = "pl-4 pr-4 w-1/6">
                    <Typography style={{textDecoration:"underline"}} variant="h6">Reminders</Typography>
                    { reminderList.length ? reminderList.map((item) => (<Typography key={item.id} noWrap={true} variant="subtitle2">{item.text}</Typography>)): "" }
                  </div>
                  <div  className = "pl-4 w-1/6">
                    <Typography style={{textDecoration:"underline"}} variant="h6">Physicians</Typography>
                    <Typography variant="subtitle2">Primary</Typography>
                    <Typography variant="subtitle2">Specialist#1</Typography>
                    <Typography variant="subtitle2">Specialist#2</Typography>
                    <Typography variant="subtitle2">Specialist#3</Typography>
                    <Typography variant="subtitle2">Specialist#4</Typography>
                  </div>
                  <div  className = "pl-4 w-1/6">
                    <Typography style={{textDecoration:"underline"}} variant="h6">Encounters</Typography>
                    { detailInfo.counter.length ? detailInfo.counter.map((item) => (
                      <div key={item.id}>
                      <Typography  noWrap={true} variant="subtitle2">FED:{item.FED}</Typography>
                      <Typography  noWrap={true} variant="subtitle2">LED:{item.LED}</Typography>
                      <Typography  noWrap={true} variant="subtitle2">TEN:{item.TEN}</Typography>
                      </div>
                      )): "" }
                  </div>
                  <div  className = "pl-4 w-1/6">
                    <Typography style={{textDecoration:"underline"}} variant="h6">Address1</Typography>
                    { detailInfo.address.length ? 
                      (<> 
                      <Typography variant="subtitle2">Street: { detailInfo.address[0].Street }</Typography>
                      <Typography variant="subtitle2">City: { detailInfo.address[0].City }</Typography>
                      <Typography variant="subtitle2">State: { detailInfo.address[0].State }</Typography>
                    </>) : ""
                    }
                  </div>
                  <div  className = "pl-4 w-1/6">
                    <Typography style={{textDecoration:"underline"}} variant="h6">Address2</Typography>
                    { detailInfo.address.length > 1 ?
                      (<> 
                        <Typography variant="subtitle2">Street: { detailInfo.address[1].Street }</Typography>
                        <Typography variant="subtitle2">City: { detailInfo.address[1].City }</Typography>
                        <Typography variant="subtitle2">State: { detailInfo.address[1].State }</Typography>
                    </>) : ""
                    }
                  </div>
               </div>
               <hr style={{marginTop:"10px", marginBottom:"10px"}} />
               <div className="flex ">
                 <div  className = "pl-4 w-1/3">
                     <Typography style={{textDecoration:"underline"}} variant="h6">Emergency Contact1</Typography>
                     { detailInfo.emergency.length ? 
                      (<> <Typography variant="subtitle2">First name: {detailInfo.emergency[0].FirstName}</Typography>
                      <Typography variant="subtitle2">Last name: {detailInfo.emergency[0].LastName}</Typography>
                      <Typography variant="subtitle2">Relation: {detailInfo.emergency[0].relation}</Typography>
                      <Typography variant="subtitle2">Phone(mobile): {detailInfo.emergency[0].MobileNumber}</Typography>
                      <Typography variant="subtitle2">Phone(home): {detailInfo.emergency[0].HomeNumber}</Typography>
                      <Typography variant="subtitle2">Phone(work): {detailInfo.emergency[0].WorkNumber}</Typography>
                      <Typography variant="subtitle2">email address: {detailInfo.emergency[0].emailaddress}</Typography>
                      <Typography variant="subtitle2">Street: {detailInfo.emergency[0].AddressLine1}</Typography>
                      <Typography variant="subtitle2">City: {detailInfo.emergency[0].City}</Typography>
                      <Typography variant="subtitle2">State: {detailInfo.emergency[0].State}</Typography>
                      <Typography variant="subtitle2">Zip: {detailInfo.emergency[0].PostCode}</Typography>
                      </>) : ""
                    }
                 </div>
                 <div  className = "pl-4 w-1/3">
                 <Typography style={{textDecoration:"underline"}} variant="h6">Emergency Contact2</Typography>
                 { detailInfo.emergency.length > 1 ? 
                      (<> <Typography variant="subtitle2">First name: {detailInfo.emergency[1].FirstName}</Typography>
                      <Typography variant="subtitle2">Last name: {detailInfo.emergency[1].LastName}</Typography>
                      <Typography variant="subtitle2">Relation: {detailInfo.emergency[1].relation}</Typography>
                      <Typography variant="subtitle2">Phone(mobile): {detailInfo.emergency[1].MobileNumber}</Typography>
                      <Typography variant="subtitle2">Phone(home): {detailInfo.emergency[1].HomeNumber}</Typography>
                      <Typography variant="subtitle2">Phone(work): {detailInfo.emergency[1].WorkNumber}</Typography>
                      <Typography variant="subtitle2">email address: {detailInfo.emergency[1].emailaddress}</Typography>
                      <Typography variant="subtitle2">Street: {detailInfo.emergency[1].AddressLine1}</Typography>
                      <Typography variant="subtitle2">City: {detailInfo.emergency[1].City}</Typography>
                      <Typography variant="subtitle2">State: {detailInfo.emergency[1].State}</Typography>
                      <Typography variant="subtitle2">Zip: {detailInfo.emergency[1].PostCode}</Typography>
                      </>) : ""
                    }
                 </div>
                 <div  className = "pl-4 w-1/3">
                   <Typography style={{textDecoration:"underline"}} variant="h6">Emergency Contact3</Typography>
                   { detailInfo.emergency.length > 2 ? 
                      (<> <Typography variant="subtitle2">First name: {detailInfo.emergency[2].FirstName}</Typography>
                      <Typography variant="subtitle2">Last name: {detailInfo.emergency[2].LastName}</Typography>
                      <Typography variant="subtitle2">Relation: {detailInfo.emergency[2].relation}</Typography>
                      <Typography variant="subtitle2">Phone(mobile): {detailInfo.emergency[2].MobileNumber}</Typography>
                      <Typography variant="subtitle2">Phone(home): {detailInfo.emergency[2].HomeNumber}</Typography>
                      <Typography variant="subtitle2">Phone(work): {detailInfo.emergency[2].WorkNumber}</Typography>
                      <Typography variant="subtitle2">email address: {detailInfo.emergency[2].emailaddress}</Typography>
                      <Typography variant="subtitle2">Street: {detailInfo.emergency[2].AddressLine1}</Typography>
                      <Typography variant="subtitle2">City: {detailInfo.emergency[2].City}</Typography>
                      <Typography variant="subtitle2">State: {detailInfo.emergency[2].State}</Typography>
                      <Typography variant="subtitle2">Zip: {detailInfo.emergency[2].PostCode}</Typography>
                      </>) : ""
                    }
                 </div>
               </div>
               <hr style={{marginTop:"10px", marginBottom:"10px"}} />
               <div className="flex ">
                 <div  className = "pl-4 w-1/3">
                     <Typography style={{textDecoration:"underline"}} variant="h6">Employer1</Typography>
                     { detailInfo.demos.employeer.length > 0 ?  
                      (<> <Typography variant="subtitle2">Name: {detailInfo.demos.employeer[0].name}</Typography>
                      <Typography variant="subtitle2">Street: {detailInfo.demos.employeer[0].city}</Typography>
                      <Typography variant="subtitle2">State: {detailInfo.demos.employeer[0].state}</Typography>
                      <Typography variant="subtitle2">Zip: {detailInfo.demos.employeer[0].zip}</Typography>
                      { detailInfo.demos.employeer[0].department.length > 0 ?  
                        detailInfo.demos.employeer[0].department.map( (item, index) => 
                          (<>
                          <Typography variant="h6">Department{index}</Typography>
                          <Typography variant="subtitle2">{item.contact}</Typography>
                          <Typography variant="subtitle2">{item.phone}</Typography>
                          <Typography variant="subtitle2">{item.email}</Typography>
                          <Typography variant="subtitle2">{item.fax}</Typography>
                          </>)
                          )  
                         : "" 
                      }
                     </>) : ""
                    }
                 </div>
                 <div  className = "pl-4 w-1/3">
                     <Typography style={{textDecoration:"underline"}} variant="h6">Employer2</Typography>
                     { detailInfo.demos.employeer.length > 1 ?  
                      (<> <Typography variant="subtitle2">Name: {detailInfo.demos.employeer[1].name}</Typography>
                      <Typography variant="subtitle2">Street: {detailInfo.demos.employeer[1].city}</Typography>
                      <Typography variant="subtitle2">State: {detailInfo.demos.employeer[1].state}</Typography>
                      <Typography variant="subtitle2">Zip: {detailInfo.demos.employeer[1].zip}</Typography>
                      { detailInfo.demos.employeer[1].department.length > 0 ?  
                        detailInfo.demos.employeer[1].department.map( (item, index) => 
                          (<>
                          <Typography variant="h6">Department{index}</Typography>
                          <Typography variant="subtitle2">{item.contact}</Typography>
                          <Typography variant="subtitle2">{item.phone}</Typography>
                          <Typography variant="subtitle2">{item.email}</Typography>
                          <Typography variant="subtitle2">{item.fax}</Typography>
                          </>)
                          )  
                         : "" 
                      }
                     </>) : ""
                    }
                 </div>
                 <div  className = "pl-4 w-1/3">
                     <Typography style={{textDecoration:"underline"}} variant="h6">Employer3</Typography>
                     { detailInfo.demos.employeer.length > 2 ?  
                      (<> <Typography variant="subtitle2">Name: {detailInfo.demos.employeer[2].name}</Typography>
                      <Typography variant="subtitle2">Street: {detailInfo.demos.employeer[2].city}</Typography>
                      <Typography variant="subtitle2">State: {detailInfo.demos.employeer[2].state}</Typography>
                      <Typography variant="subtitle2">Zip: {detailInfo.demos.employeer[2].zip}</Typography>
                      { detailInfo.demos.employeer[2].department.length > 0 ?  
                        detailInfo.demos.employeer[2].department.map( (item, index) => 
                          (<>
                          <Typography variant="h6">Department{index}</Typography>
                          <Typography variant="subtitle2">{item.contact}</Typography>
                          <Typography variant="subtitle2">{item.phone}</Typography>
                          <Typography variant="subtitle2">{item.email}</Typography>
                          <Typography variant="subtitle2">{item.fax}</Typography>
                          </>)
                          )  
                         : "" 
                      }
                     </>) : ""
                    }
                 </div>
                </div>
                <hr style={{marginTop:"10px", marginBottom:"10px"}} />
                <div className="flex ">
                  <div  className = "pl-4 w-1/3">
                      <Typography style={{textDecoration:"underline"}} variant="h6">Pharmacy1</Typography>
                      { pharmacyListTags.length > 0 ? 
                        (<> 
                        <Typography variant="subtitle2">Name: {pharmacyListTags[0].Name}</Typography>
                        <Typography variant="subtitle2">Address: {pharmacyListTags[0].address}</Typography>
                        <Typography variant="subtitle2">City: {pharmacyListTags[0].City}</Typography>
                        <Typography variant="subtitle2">State: {pharmacyListTags[0].State}</Typography>
                        <Typography variant="subtitle2">Zip: {pharmacyListTags[0].PostCode}</Typography>
                        <Typography variant="subtitle2">Phone: {pharmacyListTags[0].Telephone}</Typography>
                        <Typography variant="subtitle2">Fax: {pharmacyListTags[0].Fax}</Typography>
                        <Typography variant="subtitle2">email address: {pharmacyListTags[0].email}</Typography>
                        <Typography variant="subtitle2">NCPDP</Typography>
                        </>) : ""
                      }
                  </div>
                  <div  className = "pl-4 w-1/3">
                      <Typography style={{textDecoration:"underline"}} variant="h6">Pharmacy2</Typography>
                      { pharmacyListTags.length > 1 ? 
                        (<> 
                        <Typography variant="subtitle2">Name: {pharmacyListTags[1].Name}</Typography>
                        <Typography variant="subtitle2">Address: {pharmacyListTags[1].address}</Typography>
                        <Typography variant="subtitle2">City: {pharmacyListTags[1].City}</Typography>
                        <Typography variant="subtitle2">State: {pharmacyListTags[1].State}</Typography>
                        <Typography variant="subtitle2">Zip: {pharmacyListTags[1].PostCode}</Typography>
                        <Typography variant="subtitle2">Phone: {pharmacyListTags[1].Telephone}</Typography>
                        <Typography variant="subtitle2">Fax: {pharmacyListTags[1].Fax}</Typography>
                        <Typography variant="subtitle2">email address: {pharmacyListTags[1].email}</Typography>
                        <Typography variant="subtitle2">NCPDP</Typography>
                        </>) : ""
                      }
                  </div>
                  <div className = "pl-4 w-1/3">
                      <Typography style={{textDecoration:"underline"}} variant="h6">Pharmacy3</Typography>
                      { pharmacyListTags.length > 2 ? 
                        (<> 
                        <Typography variant="subtitle2">Name: {pharmacyListTags[2].Name}</Typography>
                        <Typography variant="subtitle2">Address: {pharmacyListTags[2].address}</Typography>
                        <Typography variant="subtitle2">City: {pharmacyListTags[2].City}</Typography>
                        <Typography variant="subtitle2">State: {pharmacyListTags[2].State}</Typography>
                        <Typography variant="subtitle2">Zip: {pharmacyListTags[2].PostCode}</Typography>
                        <Typography variant="subtitle2">Phone: {pharmacyListTags[2].Telephone}</Typography>
                        <Typography variant="subtitle2">Fax: {pharmacyListTags[2].Fax}</Typography>
                        <Typography variant="subtitle2">email address: {pharmacyListTags[2].email}</Typography>
                        <Typography variant="subtitle2">NCPDP</Typography>
                        </>) : ""
                      }
                  </div>
                </div>
                <hr style={{marginTop:"10px", marginBottom:"10px"}} />
                <div className="flex ">
                  <div  className = "pl-4 w-2/3">
                      <Typography style={{textDecoration:"underline"}} variant="h6">Electronic Communication</Typography>
                      <Typography variant="subtitle2">Do you wish to receive electronic communication from us? &nbsp;&nbsp;
                          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                          <FormControlLabel value="no" control={<Radio />} label="No" />
                      </Typography>
                      <Typography variant="subtitle2">Send information to
                      &nbsp;&nbsp;
                          <FormControlLabel value="self" control={<Radio />} label="self" />
                          <FormControlLabel value="other" control={<Radio />} label="other" />
                      </Typography>
                      <Typography variant="h6">Designee</Typography>
                      { detailInfo.demos.electronic &&
                        (<> 
                        <Typography variant="subtitle2">First Name: {detailInfo.demos.electronic.FirstName}</Typography>
                        <Typography variant="subtitle2">Last Name: {detailInfo.demos.electronic.LastName}</Typography>
                        <Typography variant="subtitle2">Region: {detailInfo.demos.electronic.AddressLine1}</Typography>
                        <Typography variant="subtitle2">Street: {detailInfo.demos.electronic.AddressLine2}</Typography>
                        <Typography variant="subtitle2">City: {detailInfo.demos.electronic.City}</Typography>
                        <Typography variant="subtitle2">Zip: {detailInfo.demos.electronic.PostCode}</Typography>
                        <Typography variant="subtitle2">Phone(Mobile): {detailInfo.demos.electronic.MobileNumber}</Typography>
                        <Typography variant="subtitle2">Phone(Work): {detailInfo.demos.electronic.WorkNumber}</Typography>
                        <Typography variant="subtitle2">Phone(Home): {detailInfo.demos.electronic.HomeNumber}</Typography>
                        </>)
                      }
                  </div>
                  <div  className = "pl-4 w-1/5">
                      <Typography style={{textDecoration:"underline"}} variant="h6">Insurance</Typography>
                      <Typography variant="subtitle2">Medcare</Typography>
                      <Typography variant="subtitle2">Medcaid</Typography>
                      <Typography variant="subtitle2">Sell Pay</Typography>
                      <Typography variant="subtitle2">Other</Typography>
                  </div>
                  <div className="flex">
                    <div>
                    </div>
                  </div>
                </div>
             </div>
            {/* </DialogContentText> */}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleModalClose} color="primary">
              Close
            </Button>
            {/* <Button onClick={handleModalClose} color="primary">
              Subscribe
            </Button>*/}
          </DialogActions> 
      </Dialog>
      </>
      )}
    </>
  )
}

export default PatientBanner;
