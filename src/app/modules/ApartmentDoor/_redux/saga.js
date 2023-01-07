import { put, takeEvery, all, call } from 'redux-saga/effects'
import Swal from 'sweetalert2'
import {
  ADD_APARTMENTDOOR,
  BEGIN_APARTMENTDOORS_DOWNLOAD,
  RETRIEVE_APARTMENTDOOR_DELETE,
  BEGIN_EDIT_APARTMENTDOOR,
} from './types'

import {
  downloadApartmentDoorsOkAction,
  downloadApartmentDoorsErrorAction,
  addApartmentDoorOkAction,
  addApartmentDoorErrorAction,
  deleteApartmentDoorOkAction,
  deleteApartmentDoorErrorAction,
  editApartmentDoorOkAction,
  editApartmentDoorErrorAction
} from './actions'

import {
  retrieveApartmentDoorsDB,
  addApartmentDoorDB,
  deleteApartmentDoorDB,
  editApartmentDoorDB
} from './crud'

// Retrieve apartments
// worker saga
function* retrieveApartmentDoors(apartmentID) {
  try {
    const {data} = yield call(retrieveApartmentDoorsDB,apartmentID)
    yield downloadApartmentDoorsOkAction(data)
  } catch (error) {
    yield put(downloadApartmentDoorsErrorAction())
  }
}

// watcher saga
export function* retrieveApartmentDoorsSaga() {
  yield takeEvery(BEGIN_APARTMENTDOORS_DOWNLOAD, retrieveApartmentDoors)
}


// Create new apartment
// worker saga
function* addApartmentDoor(action) {
  
  const apartment = action.apartment
  try {
    yield call(addApartmentDoorDB, apartment)
    
   /* const response = await axiosClient.post('/apartments', apartment)*/
    yield addApartmentDoorOkAction(apartment) // download actualized apartments
      // Alert
    Swal.fire({
      title: 'Added!',
      text: 'The apartment has been added successfully',
      icon: 'success',
      confirmButtonColor: '#62a086'
    })
  } catch (error) {
    //console.log(error.response.data.status)
    yield addApartmentDoorErrorAction(true)
    Swal.fire({
      icon: 'error',
      title: 'Алдаа гарлаа',//error.name.response.data.status,
      text: error.response.data.status
    })
  }
}

// watcher saga
export function* addApartmentDoorSaga() {
  yield takeEvery(ADD_APARTMENTDOOR, addApartmentDoor)
}


// Delete apartment
// worker saga
function* deleteApartmentDoor(action) {
  const id = action.payload
  try {
    yield call(deleteApartmentDoorDB, id)
    yield deleteApartmentDoorOkAction()
    Swal.fire({
      title: 'Deleted!',
      text: 'The apartment has been deleted.',
      icon: 'success',
      confirmButtonColor: '#62a086'
    })
  } catch (error) {
    yield deleteApartmentDoorErrorAction()
  }
}

// watcher saga
export function* deleteApartmentDoorSaga() {
  yield takeEvery(RETRIEVE_APARTMENTDOOR_DELETE, deleteApartmentDoor)
}


// Edit apartment
// worker saga
function* editApartmentDoor(action) {
  const apartment = action.apartment
  try {
    yield call(editApartmentDoorDB, apartment)
    yield editApartmentDoorOkAction(apartment)
     // Alert
    Swal.fire({
      title: 'Updated!',
      text: 'The apartment has been updated.',
      icon: 'success',
      confirmButtonColor: '#62a086'
    })
  } catch (error) {
    yield editApartmentDoorErrorAction()
  }
}

// watcher saga
export function* editApartmentDoorSaga() {
  yield takeEvery(BEGIN_EDIT_APARTMENTDOOR, editApartmentDoor)
}

// Export all sagas
export default function* apartmentSaga() {
  yield all([
    retrieveApartmentDoorsSaga(),
    addApartmentDoorSaga(),
    deleteApartmentDoorSaga(),
    editApartmentDoorSaga()
  ])
}
