//basic imports
import FusePageSimple from '@fuse/core/FusePageSimple';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

//components
import NoteToolbar from './bars/NoteToolbar';
import PatientToolbar from './bars/PatientToolbar';
import ChartingApp from './ChartingApp';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import AddIcon from '@material-ui/icons/Add';
import * as Actions from './store/actions';

import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  layoutRoot: {},
  toolbar: {
    width : '100%'
  },
	content: {
		width: '100%'
	}
}));

function Charting(props) {
	const classes = useStyles(props);
	const dispatch = useDispatch();
	const {isHidden} = useSelector(({patientToolbar}) => patientToolbar.selectedPerson)
	return (
		<FusePageSimple
			classes={{
				root: classes.layoutRoot
			}}
			content={
				<div className="relative">

					<PatientToolbar />
					<br />
					<NoteToolbar />
					<br />
					<ChartingApp section={props}/>
				</div>
			}
		/>
	);
}

export default Charting;
