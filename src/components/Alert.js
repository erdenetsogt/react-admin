import * as React from 'react'
//import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useState } from 'react';



const Alert = React.forwardRef(function Alert(props, ref) {
  
  return   <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  
})



const SuccessAlert = (props) => {
  const [open,setOpen] = useState(false);
  console.log(props.isShow);

   React.useEffect(
     ()=>{
      handleOpen();
  },[props.isShow]);
  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false)
  };
  
  const handleOpen=()=> {
      setOpen(true)
      }
    
  
  
  return (
    <>
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical:'bottom',horizontal:'right'}}>
      <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
        This is a success message 
      </Alert>
    </Snackbar>
    </>
  )
};

export default SuccessAlert





