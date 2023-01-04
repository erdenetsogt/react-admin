import { Routes, Route, Outlet } from "react-router-dom";
import ListApartDoor from "../../ApartmentDoor/pages/listApartDoor";
import CreateResident from "./createResident";
import ListResident from "./createResident";

export default function RouteResident() {

  return (
    <>
    <Routes>
      <Route path="/new" element={<CreateResident />} />
      <Route path="/edit/:id" element={<CreateResident />} />
      <Route path="/list" element={<ListResident />} />
      <Route path="/door/list/:aprtID" element={<ListApartDoor/>}/>
    </Routes>
    <Outlet/>
    </>
  );
}
