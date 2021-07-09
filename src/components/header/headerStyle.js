import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
      display:"flex",
      justifyContent: "space-between",
      alignItems:"center"
    },
  
    searchBar: {
      backgroundColor: "#e4e4e4e4",
      display: 'flex',
      width: 400,
      borderRadius:"10px"
    },
    input: {
      marginLeft: theme.spacing(1),
      backgroundColor: "#e4e4e4e4",
      borderRadius:"10px",
      flex: 1,
    },
  }));

