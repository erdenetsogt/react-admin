import { useState } from "react";
import { Routes, Route,Navigate } from "react-router-dom";
import Topbar from "../scenes/global/Topbar";
import Sidebar from "../scenes/global/Sidebar";
import Dashboard from "../scenes/dashboard";

import Invoices from "../scenes/invoices";
//import Contacts from "../scenes/contacts";
import Bar from "../scenes/bar";
import Form from "../scenes/form";
import Line from "../scenes/line";
import Pie from "../scenes/pie";
import FAQ from "../scenes/faq";
import Geography from "../scenes/geography";
import Calendar from "../scenes/calendar";
//import Apartment from "./modules/Apartment/pages";
import RouteApartment from "./modules/Apartment/pages/routeApartment";
import Resident from "./modules/Residents/pages"
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../theme";
//import { shallowEqual, useSelector } from "react-redux";




export default function BasePage() {
  //var dateNow = new Date();
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  
  return (
    
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />

            <Routes>              
              <Route path="/login" element={<Navigate to='/' replace />} />
              <Route path="/" element={<Dashboard />} />
              {/* <Route path="/apart" element={<Apartment />} /> */}
              <Route path="/apart/*" element={<RouteApartment/>} />
              
              <Route path="/resident" element={<Resident />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />            
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
    

  );
}
