import React, { useState, useEffect, useRef  } from 'react';
import Typography from '@material-ui/core/Typography';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import TextField from '@material-ui/core/TextField';
import * as Actions from '../store/actions';
import { useDispatch, useSelector } from 'react-redux';
// import { handleInputChange } from 'react-select/src/utils';
import NumberFormat from 'react-number-format';
import PhoneTypeMenu from './PhoneTypeMenu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

function TextPhoneAndInput(props) { 
  const dispatch = useDispatch();
  const { title, menuValues, onChange, initialMenuValue, values} = props;
  const [itemValues, setItemValues] = React.useState(values);
  const [inputOpen, setInputOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(initialMenuValue);
  
  const handleClickText = () => {
    setInputOpen(true);
  }

  function handleClickAway(ev) {
    setInputOpen(false)
  }
  
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => { 
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Typography variant="subtitle1" onClick={handleClickText}>
        <b>{title}: </b>
        {inputOpen ?
          <NumberFormat 
            format="(###) ###-####" //  +(#) (###) ###-####
            mask="_" 
            //customInput={TextField} 
            prefix={'$'}
            autoFocus={true}
            allowEmptyFormatting  
            style={{fontFamily: `Muli,Roboto,"Helvetica",Arial,sans-serif`}} 
            value={itemValues[selectedIndex]} 
            onSelect={(event) => event.target.focus()} 
            onLoad={(event) => event.target.focus()} 
            onValueChange={(values) => {
              const { formattedValue, value } = values;
              // formattedValue = $2,223
              // value ie, 2223
              //this.setState({ profit: formattedValue });
              itemValues[selectedIndex] = formattedValue;
              setItemValues(itemValues);
              onChange(itemValues);
            }} >
          </NumberFormat>
          : `${itemValues[selectedIndex]}`}
           {/* <PhoneTypeMenu value={menuValue} menus={menuValues} processMenuChange={onMenuChange} />  */}
           <span variant="subtitle1" style={{ display: "inline", width: "max-content"}} className="cursor-pointer" onMouseOver={handleMenuClick}> {menuValues[selectedIndex]}</span>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            MenuListProps={{ onMouseLeave: handleClose }}
          >
            {menuValues.map((option, index) => (
              <MenuItem
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
      </Typography>
    </ClickAwayListener>
  )
}

export default TextPhoneAndInput;
