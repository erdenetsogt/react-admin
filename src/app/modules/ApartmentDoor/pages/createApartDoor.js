import { Box, Button, TextField } from "@mui/material";
import {Formik} from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../../../components/Header";
import {addApartmentDoorAction} from "../../ApartmentDoor/_redux/actions"

const initialValues = {
  id:0,
  name:"",
  address:"",  
  doorCount:0,
}

const residentSchema = yup.object().shape({
  name:yup.string().required("required"),
  address:yup.string()
                .required("required")
                //.matches(phoneRegExp,"Утасны дугаар оруулна уу")
})
const CreateApartDoor =() =>{
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const handleFormSubmit = (values) =>{
    //console.log(values);
    const newapartment = addApartmentDoorAction(values)
    console.log(newapartment)
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
              sx = {{ gridColumn: "span"}}
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
              sx = {{ gridColumn: "span 2"}}
              />
              <TextField
              fullWidth
              variant="filled"
              type="number"
              label="Айл өрхийн тоо"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.doorCount}
              name="residentCount"
              error={!!touched.doorCount && !!errors.doorCount}
              helperText={touched.doorCount && errors.doorCount}
              sx = {{ gridColumn: "span"}}
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
export default CreateApartDoor;