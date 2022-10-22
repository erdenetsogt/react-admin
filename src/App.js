import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scences/global/Topbar";
//import Sidebar from "./scenes/global/Sidebar";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Sidebar from "./scences/global/Sidebar";
// import { ProSidebarProvider } from "react-pro-sidebar";
// import { Dashboard } from "./scences/dashboard";
// import { Team } from "./scences/team";
// import { Invoices } from "./scences/invoices";
// import { Contracts } from "./scences/contracts";
// import { Bar } from "./scences/bar";
// import { Form } from "./scences/form";
// import { Line } from "./scences/line";
// import { Pie } from "./scences/pie";
// import { FAQ } from "./scences/faq";
// import { Geography } from "./scences/geography";
// import { Calendar } from "./scences/calendar";

function App() {
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
            {/* <Routes>
              <Route path="/" element={<Dashboard/>} />
              <Route path="/" element={<Team/>} />
              <Route path="/" element={<Invoices/>} />
              <Route path="/" element={<Contracts/>} />
              <Route path="/" element={<Bar/>} />
              <Route path="/" element={<Form/>} />
              <Route path="/" element={<Line/>} />
              <Route path="/" element={<Pie/>} />
              <Route path="/" element={<FAQ/>} />
              <Route path="/" element={<Geography/>} /> 
              <Route path="/" element={<Calendar/>} /> 
            </Routes> */}
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
