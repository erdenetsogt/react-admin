import React,{useEffect,useRef} from 'react'
import { useSelector, shallowEqual } from 'react-redux';
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../../../theme"//"../../theme";
//import {mockDataTeam} from "../../../../data/mockData"//"../../data/mockData";
import  AdminPanelSettingsOutlinedIcon  from "@mui/icons-material/AdminPanelSettingsOutlined";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { downloadResidentsAction } from "../_redux/actions";
import IconButton from '@mui/material/IconButton';

//import Header from "../../compon"
//console.log(mockDataTeam);

const ListApart = (props) =>{

  
  
  
  const firstRenderRef = useRef(true)  
  useEffect(   
    () => {
      if(firstRenderRef.current){
        firstRenderRef.current=false
        return
      }
      (async () => await downloadResidentsAction())()   
    }, [props.id]  
  )
  const loading = useSelector(state => state.resident.loading)
  const error = useSelector(state => state.resident.error)
  let resident = useSelector(state => state.resident.residents,shallowEqual)
  //let resident = null
  
  
  //console.log(resident.data);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


  const columns = [
    {field:"id",headerName:"ID"},
    {field:"name",headerName:"Нэр", flex:1, cellClassName:"name-column--cell"},
    {field:"phoneNumber",headerName:"Утас",flex:1},
    
    { 
      headerName:"",
      flex:1,
      renderCell:() => {
        return (
          <Box
            width="60%"
            m = "0 auto"
            p = "5px"
            display = "flex"
            justifyContent="center"
            backgroundColor={
              colors.greenAccent[700]
  
            }
            borderRadius="4px"
            >
            <EditOutlinedIcon/>
            
            </Box>
        )
      }
    },
  ]
  if(!resident) return false;
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
        <Box style={{ height: 600, width: "100%" }}>
          
          <DataGrid
            rows={resident}
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

export default ListApart
