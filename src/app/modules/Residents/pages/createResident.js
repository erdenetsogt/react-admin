import { Box, Button, TextField } from "@mui/material";
import {Formik} from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../../../components/Header";
const initialValues = {
  id:0,
  name:"",
  address:"",  
  doorID:0,
}

const phoneRegExp = 
/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const residentSchema = yup.object().shape({
  name:yup.string().required("required"),
  phoneNumber:yup.string()
                .required("required")
                .matches(phoneRegExp,"Утасны дугаар оруулна уу"),  
})
const ListResident =() =>{
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const handleFormSubmit = (values) =>{
    console.log(values);
  }
  return <Box m="20px">
    <Header title="CREATE USER" subtitle="Create a New User Profile"/>
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValues}
      validationSchema = {residentSchema}
      >
      {
      ({values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
      })=>(
        <form onSubmit={handleSubmit}>
          <Box
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
            }}
          >
            <input
              type="hidden"
              name="id"
              value={values.id}
            />
            <input
              type="hidden"
              name="doorID"
              value={values.doorID}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Нэр"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.name}
              name="name"
              error={!!touched.name && !!errors.name}
              helperText={touched.name && errors.name}
              sx = {{ gridColumn: "span 2"}}
              />
              <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Утасны дугаар"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.phoneNumber}
              name="phoneNumber"
              error={!!touched.phoneNumber && !!errors.phoneNumber}
              helperText={touched.phoneNumber && errors.phoneNumber}
              sx = {{ gridColumn: "span 2"}}
              />
          </Box>
          <Box display="flex" justifyContent="end" mt="20px">
            <Button type="submit" color="secondary" variant="contained">
              Хадгалах
            </Button>
          </Box>
        </form>
      )
      }
    </Formik>
  </Box>
}
export default ListResident;