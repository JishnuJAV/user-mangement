import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CustomButton from "../../components/ui/button/button";
import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import user from "../../data";
import UserCard from "../../components/cards/card";
import SimpleModal from "../../components/modal/modal";
import Modal from "@material-ui/core/Modal";
import { Button } from "@material-ui/core";
import Addform from "../formpage/addform";
import Editform from "../formpage/editform";
import editform from "../formpage/editform";
import SecurityRoundedIcon from "@material-ui/icons/SecurityRounded";
import AssignmentRoundedIcon from "@material-ui/icons/AssignmentRounded";
import {useHistory} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    display: "flex",
    justifyContent: "space-between",
  },
  active: {
    backgroundColor: "green",
    "&:hover": {
      background: "none",
    },
  },
  iconStyle: {
    display: "flex",
  },
  card: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
const Main = () => {
  const history = useHistory()
  const classes = useStyles();
  const [isActive, setIsActive] = useState(false);
  const [cardModal, setCardModal] = useState(false);
  const buttonHandler = () => {
    setIsActive(true);
    history.push('/admin')
  };
  const cardHandle = (index, e) => {
    console.log("card handle", index);
    setCardModal(true);
  };

  const setButton = (
    <div>
      <button style={{borderStyle: "1px solid", borderColor: "green",color:"green",width:"150px",height:"50px",borderRadius:"357px"}}>+ New Admin</button>
</div>
  );
  const setCard = (details, index) => {
    return (
      <div>
        <UserCard
          className={classes.card}
          key={index}
          firstName={details.firstname}
          lastName={details.lastname}
          email={details.email}
          role={details.role}
        />
      </div>
    );
  };
  const body = <Addform />;
  const editForm = <Editform />;
const gotoAdmin =()=>{
  history.push('/admin')
}

const gotoHistory =()=>{
  history.push('/history')
}
const dashbord =()=>{
  history.push('/')
}
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={2} spacing={6}>
          <Paper className={classes.toColumn} elevation={0}>
            <div className={classes.iconStyle} onClick={buttonHandler}>
              <DashboardRoundedIcon />
              <CustomButton color="green">Dasboard</CustomButton>
            </div>
            <div className={classes.iconStyle} onClick={dashbord}>
              <SecurityRoundedIcon />
              <CustomButton >Admin </CustomButton>
            </div>
            <div className={classes.iconStyle} onClick={gotoHistory}>
              <AssignmentRoundedIcon />
              <CustomButton>Session History </CustomButton>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={10} style ={{background:"#e4e4e4e4"}}>
          <Grid>
            <Grid style={{ display: "flex", marginBottom: "0.2rem" }}>
              <div style ={{cursor:"pointer"}} onClick={gotoAdmin}>Admin </div>
              <div style={{ marginLeft: 6 }}>
                <SimpleModal settings={setButton} body={body} />
              </div>
            </Grid>
          </Grid>
          <div elevation={0} className={classes.paper}>
            <Grid container spacing={6}>
              {user.map((details, index) => {
                return (
                  <Grid
                    item
                    xs={3}
                    style={{ cursor: "pointer" }}
                    onClick={(e) => cardHandle(index, e)}
                    className={cardModal && classes.modal}
                  >
                    <SimpleModal
                      settings={setCard(details, index)}
                      body={editForm}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default Main;
