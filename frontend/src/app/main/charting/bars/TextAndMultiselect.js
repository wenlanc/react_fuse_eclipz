import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import TextField from '@material-ui/core/TextField';
import * as Actions from '../store/actions';
import { useDispatch, useSelector } from 'react-redux';
// import { handleInputChange } from 'react-select/src/utils';
import FuseChipSelect from '@fuse/core/FuseChipSelect';
import Tooltip from '@material-ui/core/Tooltip';
import Popover from '@material-ui/core/Popover';
import Paper from '@material-ui/core/Paper';

function TextAndMultiselect(props) {
  const dispatch = useDispatch();
  const { title, tagvalues, suggestionValues, onChangeTags } = props;
  
  const [inputOpen, setInputOpen] = React.useState(false);
  const [tags, setTags] = React.useState(tagvalues);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover1' : undefined;

  function handleChipChange(value) {
    setTags(value);
    onChangeTags(value);
  }
  const handlePopupClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div className="w-full py-4 px-8" >
      <Tooltip style={{ maxWidth: 500, }} title={<span style={{ fontSize: "1.5em",}}>{tags.map((item) => (item.value)).join()}</span>}>
        <Typography onClick={handlePopupClick} noWrap={true} className="cursor-pointer" variant="subtitle1"><b>{title}:</b>{tags.map((item) => (item.value)).join()}</Typography>
      </Tooltip>
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
              }}
              className="w-full"
              
              >

              <Typography style={{minWidth:400}} className="text-center p-4 bg-orange-300"><b>{title}</b></Typography>

              <div className="w-full py-4 px-8" style={{minHeight:300}}>
                <FuseChipSelect
                  className="w-full my-16"
                  value={tags}
                  onChange={handleChipChange}
                  placeholder="Select multiple tags"
                  textFieldProps={{
                    //label: 'Tags',
                    InputLabelProps: {
                      shrink: true,
                    },
                    variant: 'standard',
                  }}
                  options={suggestionValues}
                  isMulti
                /> 
              </div>
          </Popover>
    </div>    
  )
}

export default TextAndMultiselect;
