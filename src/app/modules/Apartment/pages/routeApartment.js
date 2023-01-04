import { Routes, Route, Outlet } from "react-router-dom";
import ListApartDoor from "../../ApartmentDoor/pages/listApartDoor";
import CreateApart from "./createApart";
import ListApart from "./listApart";

export default function RouteApartment() {

  return (
    <>
    <Routes>
      <Route path="/new" element={<CreateApart />} />
      <Route path="/edit/:id" element={<CreateApart />} />
      <Route path="/list" element={<ListApart />} />
      <Route path="/door/list/:aprtID" element={<ListApartDoor/>}/>
    </Routes>
    <Outlet/>
    </>
  );
}
