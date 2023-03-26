import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {crciOptions, getCrciIndex} from '../../../services/helper';
function CrciMenu(props) {
  const {age} = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const { isFixed, weight, height, creatin } = useSelector(({ patientToolbar }) => patientToolbar.selectedPerson)

  var value = 0
  if (age && weight && creatin) {
    value = ((140 - age) * (weight * 0.45359237) * 0.85 / 72 / creatin).toFixed(0)
  }

  var initialIndex = getCrciIndex(value);
  
  const [selectedIndex, setSelectedIndex] = React.useState(initialIndex);

  React.useEffect(() => { 
     setSelectedIndex(initialIndex);
  }, [initialIndex]);

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <span variant="subtitle1" style={{width: "max-content", marginLeft: "3px"}} className="cursor-pointer" onMouseOver={handleMenuClick}>{crciOptions[selectedIndex]}</span>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
      >
        {crciOptions.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>

    </>
  )
}

export default CrciMenu;
