
import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', 
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    photoCircle:{
      height: '90px',
      width: '75px',
      backgroundColor: '#bbbb',
      borderRadius: '50%',
      display: 'table',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
   
  }),
);

const UserCard=({firstName,lastName,email,role})=> {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const photo = () =>  <span className={classes.photoCircle} />;
  
  return (
    <Card className={classes.root}>
      <CardHeader
        
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        // title="Shrimp and Chorizo Paella"
        // subheader="September 14, 2016"
      
      >
        </CardHeader>
        <span className={classes.photoCircle} />
      <CardContent>

        <Typography variant="body2" component="p" style ={{color:"black",fontWeight:"bold"}}>
         {firstName} {lastName}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
         {role}
        </Typography>
        <Typography variant="h7" component="p" style={{color:"black"}}>
         {email}
        </Typography>
      </CardContent>
    </Card>
  );
}
export default UserCard;