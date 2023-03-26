import React, {useState, useEffect} from 'react';

import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Icon from '@material-ui/core/Icon';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import ButtonBase from "@material-ui/core/ButtonBase";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import moment from "moment";
import PatientBanner from './PatientBanner';
import ButtonGroups from './ButtonGroups';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import withReducer from 'app/store/withReducer';
import * as Actions from '../store/actions';
import reducer from '../store/reducers';
import clsx from 'clsx';
import TabScrollButton from '@material-ui/core/TabScrollButton';
import { withStyles} from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';

import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import jwtService from 'app/services/jwtService';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabPanelBox: {
      padding: 0
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(0.3),
    color: theme.palette.grey[500],
  },
  bannerToolBox: {
    display: 'flex',
    flex:0.3,
    color: theme.palette.grey[500],
  },
  title: {
    flex: 1,
    flexDirection: 'column',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  spacer: {
      flex: 1,
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box className="pt-8 bg-white">
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function PatientToolbar(){

  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [tags, setTags] = useState([]);
  const [patients, setPatients] = useState([]);
  const [openedPatients, setOpenedPatients] = useState([]);
  const dispatch = useDispatch();
  const { selectedPerson, isFixed, isHidden } = useSelector(({ patientToolbar }) => patientToolbar.selectedPerson)
  const {foldedOpen} = useSelector(({ fuse }) => fuse.navbar)
  const {searchPatientText, setSearchPatientText} = useState(""); 
  const [tabChanged, setTabChanged] = useState(false);

  const getAxios = [
    {
      AccountNumber: "ABBPEG0001",
      AddressLine1: "431 Edgar Circle",
      AddressLine2: "",
      City: "Thomson",
      Created: "2016-10-15 10:29:18",
      CreatedBy: 0,
      DateOfBirth: "03/27/1963",
      DOLE: "01/21/2021",
      FirstName: "Peggy",
      HomeNumber: "",
      Id: 2,
      IsActive: 1,
      LastName: "Abbott",
      MiddleName: "",
      MobileNumber: "706-323-7867(M)",
      Emergency: "706-546-9807(F)",
      Modified: "2016-10-15 10:29:18",
      ModifiedBy: 0,
      PostCode: "30824",
      RaceId: 1,
      SN: "",
      Sex: "F",
      State: "GA",
      WorkNumber: "",
      consultant: 0,
      email: "",
      Location: "Home",
      primaryPhysicianId: 4194243,
      profile: "",
      racename: "American Indian or Alaska Native",
      Demo: 'WM'
    },
    {
      AccountNumber: "ABBPEG0001",
      AddressLine1: "431 Edgar Circle",
      AddressLine2: "",
      City: "Thomson",
      Created: "2016-10-15 10:29:18",
      CreatedBy: 0,
      DateOfBirth: "03/27/1963",
      DOLE: "01/21/2021",
      FirstName: "Peggy",
      HomeNumber: "",
      Id: 2,
      IsActive: 1,
      LastName: "Abbott",
      MiddleName: "",
      MobileNumber: "706-323-7867(M)",
      Emergency: "706-546-9807(F)",
      Modified: "2016-10-15 10:29:18",
      ModifiedBy: 0,
      PostCode: "30824",
      RaceId: 1,
      SN: "",
      Sex: "F",
      State: "GA",
      WorkNumber: "",
      consultant: 0,
      email: "",
      Location: "Home",
      primaryPhysicianId: 4194243,
      profile: "",
      racename: "American Indian or Alaska Native",
      Demo: 'WM'
    },
    {
      AccountNumber: "ABBPEG0001",
      AddressLine1: "431 Edgar Circle",
      AddressLine2: "",
      City: "Thomson",
      Created: "2016-10-15 10:29:18",
      CreatedBy: 0,
      DateOfBirth: "03/27/1963",
      DOLE: "01/21/2021",
      FirstName: "Peggy",
      HomeNumber: "",
      Id: 2,
      IsActive: 1,
      LastName: "Abbott",
      MiddleName: "",
      MobileNumber: "706-323-7867(M)",
      Emergency: "706-546-9807(F)",
      Modified: "2016-10-15 10:29:18",
      ModifiedBy: 0,
      PostCode: "30824",
      RaceId: 1,
      SN: "",
      Sex: "F",
      State: "GA",
      WorkNumber: "",
      consultant: 0,
      email: "",
      Location: "Home",
      primaryPhysicianId: 4194243,
      profile: "",
      racename: "American Indian or Alaska Native",
      Demo: 'WM'
    }
  ];

  useEffect(() => {
    getPatients();
  }, [])

  
  const MyTabScrollButton = React.forwardRef((props, ref) => {
    const { direction, ...other } = props;
      return (
      <ButtonBase
        component="div"
        ref={ref}
        style={{ opacity: other.disabled ? 0 : 1 }}
        {...other}
      >
        {direction === "left" ? (
          <ArrowBackIcon fontSize="small" />
        ) : (
          <ArrowForwardIcon fontSize="small" />
        )}
      </ButtonBase>
    );
  });

  const MyTabScrollButton1 = withStyles(theme => ({
    root: {
      width: 28,
      overflow: 'hidden',
      transition: 'width 0.5s',
      '&.Mui-disabled': {
        width: 0,
      },
    },
  }))(TabScrollButton);
  
  const getPatients = () => {
    /**
     * Getting all patients data from Api
     */
    jwtService
      .getAllPatients()
      .then(response => {
        if(response.length > 0){
          setPatients(response);
          try{
            const recent_patients = localStorage.getItem('recent_patients'); 
            if(recent_patients != null){
              var recent_patient_ids = JSON.parse(recent_patients)["patient_ids"]; 
              for(var i=0;i<response.length;i++){
                if(recent_patient_ids.includes(response[i].Id) ){
                  openedPatients.push(response[i]);
                }
              }
              setOpenedPatients(openedPatients);
              if( openedPatients.length > 0){
                dispatch(Actions.setPerson(openedPatients[0]))
                setValue(0);
              }
            } 
          } catch (err) {
            console.log("Error on getting recent patients from localstorage.");
          }
        }
      })
      .catch(error => {

      });
  }

  const handleChange = (event, newValue) => {
    if (newValue < openedPatients.length){
      dispatch(Actions.setPerson(openedPatients[newValue]))
      setValue(newValue);
    }
  };

  const handleClose = ( event, tabToDelete, tabIndex) => {
    // stop event from propagating to the target element's parent
    event.stopPropagation(); 
    const updatedTabs = openedPatients.filter((tab, index) => {
      return index !== tabIndex;
    });
    if(openedPatients.length > 1){
      if( tabIndex == openedPatients.length-1 ){
        tabIndex = 0;
      } 
      setOpenedPatients(updatedTabs);
      dispatch(Actions.setPerson(updatedTabs[tabIndex]));
      setValue(tabIndex);
    } else {
      dispatch(Actions.setPerson({}));
      //setValue(previousTab);
      setOpenedPatients(updatedTabs);
    } 
  };

  const onTagsChange = (event, values) => {
    if(values && !openedPatients.some(item => (values.FirstName === item.FirstName && values.LastName === item.LastName && values.DateOfBirth == item.DateOfBirth))){
      openedPatients.push(values);
      setOpenedPatients(openedPatients);
      dispatch(Actions.setPerson(values));
      setValue(openedPatients.length-1);
      try{
        const recent_patients = localStorage.getItem('recent_patients');
        if(recent_patients === null){
          localStorage.setItem('recent_patients', JSON.stringify( {'patient_ids' : [ values.Id ]} ));
        } else {
          var ids_arr = JSON.parse(recent_patients)["patient_ids"];
          if(ids_arr.length < 5){
            ids_arr.push(values.Id);
          } else {
            ids_arr.shift();
            ids_arr.push(values.Id);
          }
          localStorage.setItem('recent_patients', JSON.stringify( {'patient_ids' : ids_arr} ));
        }
      } catch (err) {
        console.log("Error on getting recent patients from localstorage.");
      }
    }
  };

  console.log("KJS_FIX--------------",foldedOpen)
  return(
    <>
      {/* <div className={clsx(classes.root, "fixed")} style={{zIndex: 9998}}> */}
      <AppBar position="static" style={{ flexDirection: 'row'}}>
        <Tabs 
          value={value} 
          onChange={handleChange} 
          aria-label="simple tabs example" 
          variant="scrollable"  
          scrollButtons="auto" 
          ScrollButtonComponent={MyTabScrollButton1} style={{flex:1}}>
          { 
            openedPatients.length && openedPatients.map((patient, index) => 
              <Tab key={index} label={ <span> {patient && (patient.FirstName + " " + patient.LastName) } &nbsp; &nbsp; &nbsp; &nbsp;
              <CloseIcon onClick={(event) => { handleClose(event, patient, index) }} className={classes.closeButton} size="small" /> </span> } {...a11yProps(index)} />
            )
          }
        </Tabs>
        <div className={classes.bannerToolBox}>
          {/* <Paper
            className="flex items-center w-2/3 m-auto h-32 sm:h-32 mt-8 p-16 ltr:pl-4 lg:ltr:pl-16 rtl:pr-4 lg:rtl:pr-16 rounded-8"
            elevation={1}
          >
            <Icon color="action">search</Icon>
            <Input
              placeholder="Search"
              className="px-8"
              disableUnderline
              fullWidth
              value={''}
              inputProps={{
                'aria-label': 'Search'
              }}
              onChange={ev => {}}
            />
          </Paper> */}
          <Autocomplete
          //  multiple
            options={patients}
            getOptionLabel={option => option.FirstName + " " + option.LastName + "(" + moment(option.DateOfBirth).format("MM-DD-YYYY") + ")" }
            //defaultValue={patients[0]?patients[0]:null}
            onChange={onTagsChange}
            style={{flex:0.8, backgroundColor:'white', paddingLeft:'5px'}}
            renderInput={params => (
              <TextField
                {...params}
                variant="standard"  //outlined standard
                label="Search Patient"
                placeholder="Type patient name"
                //margin="normal"
                //fullWidth
                className=""
              />
            )}
          />
          <Fab onClick={() => dispatch(Actions.setHidden(!isHidden))} size="small" color="primary" aria-label="add" className="z-9999" style={{position:'absolute',top:"5px", right:"5px"}}>
            <Icon>line_style</Icon>
          </Fab>
        </div>
      </AppBar>
        {
          openedPatients.length && openedPatients.map((patient, index) => {
            const date = new Date();
            const year = date.getFullYear();
            //const age = year - patient.DateOfBirth.split("-")[0];
            return (
              <TabPanel className={clsx(isHidden && " hidden", "p-0 mt-0")} key={index} value={value} index={index} style={{zIndex: 99999, right:0, left:0}}>
                <PatientBanner patient={selectedPerson} />
                {/* <div className="flex">
                  <div className="w-2/6">
                    <PatientAvatar name={patient.FirstName + " " + patient.LastName} birthday={patient.DateOfBirth} age={age + "y/o"} gender={patient.Sex === "F" ? "Female" : "Male"} require="Amil $ 20 100% X-Rays Requirments"/>
                  </div>
                  <div className="w-4/6 mt-12">
                    <ButtonGroups />
                  </div>
                </div> */}
              </TabPanel>
            )
          })
        }
      {/* </div> */}
      {!isHidden ? <div className="h-16"></div> : <div className="h-16"></div>}
    </>
  )
}

export default withReducer('patientToolbar', reducer)(PatientToolbar);
