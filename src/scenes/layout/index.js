
import { useState } from "react";
import {  Routes, Route } from "react-router-dom";
import Topbar from "../global/Topbar";
//import Sidebar from "./scenes/global/Sidebar";
import { ColorModeContext, useMode } from "../../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Sidebar from "../global/Sidebar";

// import { ProSidebarProvider } from "react-pro-sidebar";
import  Dashboard  from "../dashboard";
import  Team  from "../team";
import  Invoices  from "../invoices";
import  Contracts  from "../contracts";


const Layout = () =>{
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
          
            {/* <ProSidebarProvider > */}
              <Sidebar isSidebar={isSidebar} />
            {/* </ProSidebarProvider> */}
            <main className="content">
  
              <Topbar setIsSidebar={setIsSidebar} />
                <Routes>
                
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/team" element={<Team/>} />
                <Route path="/invoices" element={<Invoices/>} />
                <Route path="/contracts" element={<Contracts/>} />
                {/* <Route path="/bar" element={<Bar/>} />
                <Route path="/form" element={<Form/>} />
                <Route path="/line" element={<Line/>} />
                <Route path="/pie" element={<Pie/>} />
                <Route path="/faq" element={<FAQ/>} />
                <Route path="/geography" element={<Geography/>} /> 
                <Route path="/calendar" element={<Calendar/>} />  */}
                </Routes>
            </main>
            
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
)
}
export default Layout;