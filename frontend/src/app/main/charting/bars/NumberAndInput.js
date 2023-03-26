import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import TextField from '@material-ui/core/TextField';
import * as Actions from '../store/actions';
import { useDispatch, useSelector } from 'react-redux';
// import { handleInputChange } from 'react-select/src/utils';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
function NumberAndInput(props) {
  const dispatch = useDispatch();
  const { title, initialValue, onChangeValue, unit } = props;
  const [value, setValue] = React.useState(initialValue);
  const [inputOpen, setInputOpen] = React.useState(false);

  const handleClickText = () => {
    setInputOpen(true);
  }

  function handleClickAway(ev) {
    setInputOpen(false)
  }
  function handleInputChange(e) {
    setValue(e.target.value);
    onChangeValue(e.target.value);
  }

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Typography variant="subtitle1" onClick={handleClickText}>
        <b>{title}: </b>
        {inputOpen ?
       <span variant="subtitle1" style={{ display: "inline", width: "max-content"}} >   
        <input 
          type="text" 
          style={{fontFamily: `Muli,Roboto,"Helvetica",Arial,sans-serif`}} 
          className="text-16 font-400" 
          autoFocus={true} 
          value={value} 
          onChange={handleInputChange}></input>
        <IconButton aria-label="Increase" color="secondary" style={{margin:0,padding:0}} onClick={()=>{ 
          onChangeValue(value * 1 + 1);
          setValue(value * 1 + 1);
          }}>
          <AddIcon />
        </IconButton>
        <IconButton color="secondary" aria-label="Decrease" style={{margin:0,padding:0}} onClick={()=>{ 
          if(value > 0){
            onChangeValue(value - 1);  
            setValue(value - 1);
          }
          }}>
          <RemoveIcon />
        </IconButton>
       </span>    
          : `${value} lbs (${(value * 0.45359237).toFixed(1)} Kg)`}
      </Typography>
    </ClickAwayListener>
  )
}

export default NumberAndInput;
