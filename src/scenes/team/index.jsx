import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import {mockDataTeam} from "../../data/mockData";
import  AdminPanelSettingsOutlinedIcon  from "@mui/icons-material/AdminPanelSettingsOutlined";
import  LockOpenOutlinedIcon  from "@mui/icons-material/LockOpenOutlined";
import  SecurityOutlinedIcon  from "@mui/icons-material/SecurityOutlined";
//import Header from "../../compon"
console.log(mockDataTeam);




const Team = () =>{
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    {field:"id",headerName:"ID"},
    {field:"name",headerName:"Name", flex:1, cellClassName:"name-column--cell"},
    {field:"age",headerName:"Age",type:"number", headerAlign:"left",align:"left"},
    {field:"phone",headerName:"Phone Number",flex:1},
    {field:"email",headerName:"Email"},
    {field:"access",headerName:"Access level",
      flex:1,
      renderCell:({ row: {access}}) => {
        return (
          <Box
            width="60%"
            m = "0 auto"
            p = "5px"
            display = "flex"
            justifyContent="center"
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : colors.greenAccent[700]
  
            }
            borderRadius="4px"
            >
            {access==="admin"&&<AdminPanelSettingsOutlinedIcon/>}
            {access==="manager"&&<SecurityOutlinedIcon/>}
            {access==="user"&&<LockOpenOutlinedIcon/>}
            </Box>
        )
      }
    },
  ]
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
        <Box style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={mockDataTeam}
            columns={columns}
            pageSize={5}
            // rowsPerPageOptions={[5]}
            // checkboxSelection
            // disableSelectionOnClick
            // experimentalFeatures={{ newEditingApi: true }}
          />
          
        </Box>
    </Box>
  )

}

export default Team;
