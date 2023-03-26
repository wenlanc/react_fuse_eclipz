import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

function PhoneTypeMenu(props) {
  const {title, value, menus, processMenuChange} = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(value);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
    processMenuChange(index);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <span variant="subtitle1" style={{ display: "inline", width: "max-content"}} className="cursor-pointer" onMouseOver={handleMenuClick}> {menus[selectedIndex]}</span>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
      >
        {menus.map((option, index) => (
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

export default PhoneTypeMenu;
