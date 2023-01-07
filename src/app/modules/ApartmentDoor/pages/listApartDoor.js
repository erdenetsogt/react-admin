import React,{useEffect,useRef} from 'react'
import { useSelector, shallowEqual } from 'react-redux';
import { Box, 
  //useTheme
 } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
//import { tokens } from "../../../../theme"//"../../theme";
import { downloadApartmentDoorsAction } from "../_redux/actions";
import { useParams } from 'react-router-dom';


//import Header from "../../compon"
//console.log(mockDataTeam);

const ListApartDoor = (props) =>{  
  let {aprtID} = useParams();
  console.log(aprtID)
  
  const firstRenderRef = useRef(true)  
  useEffect(   
    () => {
      if(firstRenderRef.current){
        firstRenderRef.current=false
        return
      }
      (async () => await downloadApartmentDoorsAction(aprtID))()   
    }, [aprtID]  
  )
  //const loading = useSelector(state => state.apartmentDoor.loading)
  //const error = useSelector(state => state.apartmentDoor.error)
  let apartment = useSelector(state => state.apartmentDoor.apartmentDoors,shallowEqual)
  
  
  
  //console.log(apartment.data);
  //const theme = useTheme();
  //const colors = tokens(theme.palette.mode);


  const columns = [
    {field:"id",headerName:"ID"},
    {field:"doorNumber",headerName:"Хаалга", flex:1, cellClassName:"name-column--cell"},
    
    
    // {headerName:"Access level",
    //   flex:1,
    //   renderCell:({ row: {access}}) => {
    //     return (
    //       <Box
    //         width="60%"
    //         m = "0 auto"
    //         p = "5px"
    //         display = "flex"
    //         justifyContent="center"
    //         backgroundColor={
    //           access === "admin"
    //             ? colors.greenAccent[600]
    //             : colors.greenAccent[700]
  
    //         }
    //         borderRadius="4px"
    //         >
    //         <AdminPanelSettingsOutlinedIcon/>
            
    //         </Box>
    //     )
    //   }
    // },
  ]
  if(!apartment) return false;
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
        <Box style={{ height: 600, width: "100%" }}>
          
          <DataGrid
            rows={apartment}
            //rows={mockDataTeam}
            columns={columns}
            //pageSize={20}
            //rowsPerPageOptions={[5,10,20]}
            // checkboxSelection
            // disableSelectionOnClick
            // experimentalFeatures={{ newEditingApi: true }}          
        />
        </Box>
    </Box>
  )

}

export default ListApartDoor
