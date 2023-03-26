import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {bmiOptions, getBmiIndex} from '../../../services/helper';

function BMIMenu(props) {
  const {value} = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const { weight, height } = useSelector(({ patientToolbar }) => patientToolbar.selectedPerson)
  var bmi = (703 * (weight / (height * height))).toFixed(2);
  var initialIndex = getBmiIndex(bmi);
  
  const [selectedIndex, setSelectedIndex] = React.useState(initialIndex);

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  React.useEffect(() => { 
    setSelectedIndex(initialIndex);
  }, [initialIndex]);

  return (
    <>
      <span variant="subtitle1" style={{width: "max-content", marginLeft: "3px"}} className="cursor-pointer" onMouseOver={handleMenuClick}> {bmiOptions[selectedIndex]}</span>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
      >
        {bmiOptions.map((option, index) => (
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

export default BMIMenu;
