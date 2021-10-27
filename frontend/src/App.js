import React ,{useState,useEffect}from 'react';
import { TextField, Button, Typography, Paper,CssBaseline, Container } from '@material-ui/core';
import useStyles from './Style.js';
import {Registration} from './api/index.js'

function App() {
  const [creditData, setCreditData] = useState({ name: '', favorite_color: '',pet_type:''});
  const[checked,setCheked]=useState(false)
  const[dupName,setDupName]=useState("")
  const[duplicated,setDuplicated]=useState(false)
  const classes = useStyles();

  const handleCreate = async (e) => {
    e.preventDefault();
     Registration(creditData)
     .then((data)=>{
     if(data.data==="duplicated"){
      setDuplicated(true)
     }
    
    })
      clear();
      setDuplicated(false)
  };

  
  const clear = () => {
    setCreditData({ name:'', favorite_color:'',pet_type:''});
  };


 const check  = () => {
     const isNotEmpty = (currentValue) => !currentValue;
     setCheked(Object.values(creditData).some(isNotEmpty))
                       }
  useEffect(()=>{
    check()
    
  })
  return (
    <Container >
    <div className={classes.container}>
    <Paper className={classes.paper}>
    <CssBaseline/>
      <form autoComplete="off" noValidate className={classes.form} >
        
        <Typography variant="h6" color="primary">REGISTRATION</Typography>
        {duplicated?
        <TextField
        error
        name="name"
        variant="outlined"
        fullWidth 
        id="outlined-error-helper-text"
        label="Name"
        helperText={`${dupName} is a Duplicated name so please try another name`}
        onChange={(e) => setCreditData({ ...creditData, name: e.target.value })}
        required
      />
      :<TextField name="name" variant="outlined" label="Name" fullWidth  required={true} value={creditData.name} onChange={(e) => {
        setCreditData({ ...creditData, name: e.target.value })
        setDupName(e.target.value)
        
        
      }}/>
      }
        <TextField name="favorite_color" variant="outlined" label="Favorite Color"  fullWidth  value={creditData.favorite_color} onChange={(e) => setCreditData({ ...creditData, favorite_color: e.target.value })} required/>  
        <TextField name="pet_type" variant="outlined" label="Pet Type"  fullWidth  value={creditData.pet_type} onChange={(e) => setCreditData({ ...creditData, pet_type: e.target.value })} required/>  
        <Button className={classes.buttonSubmit} variant="contained" disabled={checked?true:false} color="primary" size="large" type="submit" fullWidth onClick={handleCreate}>Create</Button>
        <Button variant="contained" color="secondary" size="large" fullWidth onClick={clear}>Clear</Button>
      
      </form>
    </Paper>
    
    </div>
    </Container>
    
  );
}

export default App;
