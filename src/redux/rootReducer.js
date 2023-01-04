import { all } from "redux-saga/effects";
import { combineReducers } from "redux";
// import { infosSlice } from "../app/modules/HR/_redux/people/info/infosSlice"
// import { addressSlice } from "../app/modules/HR/_redux/people/address/addressSlice"
import * as auth from "../app/modules/Auth/_redux/authRedux";
// import { LovSlice } from "../app/modules/HR/_redux/people/lov/LovSlice";
// import { peopleListSlice } from "../app/modules/HR/_redux/people/list/peopleListSlice";
// import { employeeListSlice } from "../app/modules/HR/_redux/employee/list/empoloyeeListSlice";
// import { clientSlice } from "../app/modules/Contract/_redux/client/Slice"
// import { contractSlice } from "../app/modules/Contract/_redux/contract/Slice"
// import { subContractSlice } from "../app/modules/Contract/_redux/subContract/Slice";
// import {contractTypeSlice} from "../app/modules/Contract/_redux/type/Slice"
import {apartmentReducer,deleteApartmentSaga,editApartmentSaga,retrieveApartmentsSaga,addApartmentSaga} from "../app/modules/Apartment/_redux";
import { residentReducer,deleteResidentSaga,editResidentSaga,retrieveResidentsSaga,addResidentSaga } from "../app/modules/Residents/_redux";
import { apartmentDoorReducer } from "../app/modules/ApartmentDoor/_redux/reducer";
//import apartmentSaga from '../app/modules/Apartment/_redux/saga'
export const rootReducer = combineReducers({
  // personLov: LovSlice.reducer,
  // personInfo: infosSlice.reducer,
  // personAddress: addressSlice.reducer,
  // personList: peopleListSlice.reducer,
  // employeeList: employeeListSlice.reducer,
  // clientList: clientSlice.reducer, 
  // contractList: contractSlice.reducer, 
  // contractType: contractTypeSlice.reducer,
  // subContractList: subContractSlice.reducer,

  auth: auth.reducer,
  apartment:apartmentReducer,
  resident:residentReducer,
  apartmentDoor:apartmentDoorReducer,
});
export function* rootSaga() {
  yield all([
    auth.saga(),
     retrieveApartmentsSaga(),
     addApartmentSaga(),
     deleteApartmentSaga(),
     editApartmentSaga(),

     retrieveResidentsSaga(),
     addResidentSaga(),
     deleteResidentSaga(),
     editResidentSaga(),

     

    //apartmentSaga
  ]);
}
