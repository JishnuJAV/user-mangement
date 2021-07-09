import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputTextFields from "../ui/textbox/textbox";
import CustomButton from "../ui/button/button";
import { Grid, Paper } from "@material-ui/core";

const useStyles = makeStyles({
  photoCircle: {
    height: "90px",
    width: "75px",
    backgroundColor: "#bbbb",
    borderRadius: "50%",
    display: "table",
    marginLeft: "auto",
    marginRight: "auto",
  },
  btnStyle: {
    backgroundColor: "green",
    display: "inline-block",
    bordeRadius: "29px",
    marginLeft: "246px",
    borderRadius: ".37rem",
    justifyContent: "center",
  },
  roleButton: {
    backgroundColor: "green",
    width: "124px",
    height: "46px",
    display: "flex",
    borderRadius: ".37rem",
  },
});

const Form = ({onSubmit,title}) => {
  const classes = useStyles();



 const [details,setDetails]= useState({
  firstname:'',
  lastname:'',
  email:'',
  role:'',
  password:'',
  confirm:''
 })

  const formSubmit = () => {
    console.log(details,'+++++++++++++')
    onSubmit(details)
  };
 
  const photoDraw = () => {
    console.log("picture");
  };
  return (
    <div>
      <form >
        <Grid container spacing={2} style={{ textAlign: "center" }}>
          <Grid item xs={12}>
            <span className={classes.photoCircle} />
            <h4> {title}</h4>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <InputTextFields
             onChange={e => setDetails({...details,firstname:e.target.value})}
              labelName="First Name"
              name="firstname"
              type="text"
              value={details.firstname}
            />
          </Grid>

          <Grid item xs={6}>
            <InputTextFields
            onChange={e => setDetails({...details,
              lastname:e.target.value})}
              labelName="Last Name"
              name="lastname"
              type="text"
              value={details.lastname}
            />
          </Grid>

          <Grid item xs={6}>
            <InputTextFields
              onChange={e => setDetails({...details,email:e.target.value})}
              labelName="email"
              name="email"
              type="text"
              value={details.email}
            />
          </Grid>

          <Grid item xs={6} style={{ display: "flex", marginTop: "24px" }}>
            <div style={{ display: "flex" }}>
              <div className={classes.roleButton} onClick={e => setDetails({...details,role:'super admin'})}>
                <CustomButton bcolor="green" color="white">
                  Super Admin 
                </CustomButton>
              </div>
              <div className={classes.roleButton} onClick={e => setDetails({...details,role:'moderator'})}>
                <CustomButton bcolor="green" color="white">
                  Moderator
                </CustomButton>
              </div>
            </div>
          </Grid>

          <Grid item xs={6}>
            <InputTextFields
                onChange={e => setDetails({...details,password:e.target.value})}
              labelName=" password"
              name="password"
              type="password"
            />
          </Grid>
          <Grid item xs={6}>
            <InputTextFields
              labelName=" ConfirmPassword"
              onChange={e => setDetails({...details,confirm:e.target.value})}
              name="Confirm"
              type="password"
            />
          </Grid>
          <Grid item xs={12}>
            <div className={classes.btnStyle} onClick={formSubmit}>
              <CustomButton bcolor="green" color="white">
                Add Admin
              </CustomButton>
            </div>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};
export default Form;
