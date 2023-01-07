import * as React from 'react';
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
//import SuccessAlert from '../../../../components/Alert'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Header from "../../../../components/Header";
import { addApartmentAction,retrieveApartmentAddAction } from "../../../modules/Apartment/_redux/actions";
import { addApartmentAllDoorsAction } from "../../ApartmentDoor/_redux/actions";

import { useState } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { useEffect } from 'react';
const initialValues = {
  id: 0,
  name: "",
  address: "",
  residentCount: 0,
};

const residentSchema = yup.object().shape({
  name: yup.string().required("required"),
  address: yup.string().required("required"),
  //.matches(phoneRegExp,"Утасны дугаар оруулна уу")
});

const Alert = React.forwardRef(function Alert(props, ref) {
  
  return   <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  
})

const CreateApart = () => {

  
  const [open,setOpen] = useState(false);
  

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };  

  // let apartment = useSelector(state => state.apartment,shallowEqual)
  
  // useEffect(()=>{
  //   console.log(apartment)
  // },[open])


  const getAddedApartmentID = (residentCount) =>{
    //let apartment = useSelector(state => state.apartment.apartments,shallowEqual)
    
    //return ({apartmentID:apartment.actionApartment.id,doorCount:residentCount});
  }

  const isNonMobile = useMediaQuery("(min-width:600px)");
  const handleFormSubmit = (values) => {
    console.log(values);
    try{

      addApartmentAction(values);
      //const apartment1 = retrieveApartmentAddAction();
      //console.log(apartment)
      //addApartmentAllDoorsAction(values);
      //addApartmentOkAction({id:newapartment.apartment.id,name:newapartment.apartment.name,address:newapartment.apartment.address});
      //console.log(newapartment)
      setOpen(true)

    }
    catch(e){

    }
    //downloadApartmentsOkAction
    //const newapartment = addApartmentOkAction();

    //const  alldoor = {apartmentID:newapartment.apartment.id,doorCount:values.residentCount}
    //addApartmentAllDoorsAction(alldoor)
    //console.log(alldoor);
  };
  return (
    <Box m="20px">
      <Header
        title="Шинэ Барилга"
        subtitle="СӨХ-ийн үйл ажиллагаанд шинэ байр нэмэх"
      />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={residentSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <input type="hidden" name="id" value={values.id} />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Барилгын нэр"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                name="name"
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: "span" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Хаяг"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address}
                name="address"
                error={!!touched.address && !!errors.address}
                helperText={touched.address && errors.address}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Айл өрхийн тоо"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.residentCount}
                name="residentCount"
                error={!!touched.residentCount && !!errors.residentCount}
                helperText={touched.residentCount && errors.residentCount}
                sx={{ gridColumn: "span" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Хадгалах
              </Button>
            </Box>
          </form>
        )}
      </Formik>
      {/* <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical:'bottom',horizontal:'right'}}>
      <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
        This is a success message 
      </Alert>
    </Snackbar> */}
    </Box>
  );
};
export default CreateApart;
