import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import DehazeIcon from '@material-ui/icons/Dehaze';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import {useStyles} from './headerStyle';
import { IconButton } from "@material-ui/core";

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={0} className={classes.paper}>
            <div className={classes.titles}>
              <div style={{ float: "left" }}>Logo</div>
            </div>
                <span style={{ marginLeft:"110px",backgroundColor:"#e4e4e4e4"}}><DehazeIcon /></span>
              <div  style={{display:"flex", marginRight:"480px"}}>
            <Paper component="form" className={classes.searchBar}>
              <IconButton
                type="submit"
                className={classes.iconButton}
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
              <InputBase
                className={classes.input}
                placeholder="Search "
                inputProps={{ "aria-label": "search " }}
              />
            </Paper>
            </div>
            <div style={{display:'flex', justifyContent:'space-between'}} >
            <div style={{display:'flex', justifyContent:'space-between',marginRight: '25px' }}>
            <AccountCircleRoundedIcon /><span>Ahmed Tomi</span>
            </div>
            <div style={{display:'flex', justifyContent:'space-between'}}>
            <ExitToAppIcon/><span>LogOut</span>
            </div>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
export default Header;
