import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    'buttonPackage': {
        // color: 'rgba(12, 0, 0, 1)',
        minWidth: '0.25rem',
        padding: '8px 8px 9px 8px',
        fontSize:'0.6rem',
        fontWeight:'bold',
       
    },
});

const CustomButton = ({children,varainat,bcolor,color}) => {
    // console.log(outlined)
    const classes = useStyles();

    return (
           <div >
            <Button  style ={{ backgroundColor:bcolor,color:color}} variant={varainat} className={classes.buttonPackage}>
                {children}
            </Button>
           </div>
    );
};

export default CustomButton;