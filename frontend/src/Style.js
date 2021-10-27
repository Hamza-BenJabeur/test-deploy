
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    container:{
      padding:"150px",
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
  paper: {
    width:'500px',
    
  },
  form: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));
