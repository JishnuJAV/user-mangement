import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

const rand=()=> {
  return Math.round(Math.random() * 20) - 10;
}

const getModalStyle=()=> {

  const top = 50 + rand();
  const left = 50 + rand();
  const width = '6rem' +rand();
  const height= '8rem' +rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 600,
    height:500,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

const SimpleModal=({ body, settings })=> {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [openTru, setOpenTrue] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const bodyContent = (
    <div style={modalStyle} className={classes.paper}>
     {body}
    </div>
  );

  return (
      <>
      <div onClick={handleOpen}>{settings}</div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {bodyContent}
      </Modal>
   
    </>
  );
}
export default SimpleModal;