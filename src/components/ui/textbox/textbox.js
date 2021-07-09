import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  textSetings:{
    borderRadius:'6%',
    width:'250px',
    height:'3rem',
    backgroundColor:"#E4E4E4",
    border:'none'
  },
}));

const InputTextFields=({labelName,onChange,name,type})=> {
  const classes = useStyles();

  return (
    <Fragment>
    <div>
        <label for="fname">{labelName} </label>
    </div>
   <input type={type}  className = {classes.textSetings} name={name}
   onChange={onChange}
   />
   </Fragment>
  );
}
export default InputTextFields;