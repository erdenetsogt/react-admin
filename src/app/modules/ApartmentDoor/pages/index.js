
//import { useEffect,useCallback } from "react";
import CreateApart from "./createApart";
import ListApart from "./listApart";
//import { downloadApartmentsAction } from "../_redux/actions";
export default function Apartment(){  
  return (
    <div>
      <CreateApart />
      <ListApart />
    </div>
  );
}
