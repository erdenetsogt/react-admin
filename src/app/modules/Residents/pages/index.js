import CreateResident from "./createResident";
import ListResident from "./listResident";
//import { downloadApartmentsAction } from "../_redux/actions";
export default function Resident(){  
  return (
    <div>
      <CreateResident />
      <ListResident />
    </div>
  );
}
