import { put, takeEvery, all, call } from 'redux-saga/effects'
import Swal from 'sweetalert2'
import {
  ADD_APARTMENT,
  BEGIN_APARTMENTS_DOWNLOAD,
  RETRIEVE_APARTMENT_DELETE,
  BEGIN_EDIT_APARTMENT,
} from './types'
import { ADD_ALL_APARTMENTDOORS } from '../../ApartmentDoor/_redux/types'
import { addAllApartmentDoorDB,retrieveApartmnetDoorsDB } from '../../ApartmentDoor/_redux/crud'

import {
  downloadApartmentsOkAction,
  downloadApartmentsErrorAction,
  //addApartmentOkAction,
  addApartmentErrorAction,
  deleteApartmentOkAction,
  deleteApartmentErrorAction,
  editApartmentOkAction,
  editApartmentErrorAction
} from './actions'

import {
  retrieveApartmentsDB,
  addApartmentDB,
  deleteApartmentDB,
  editApartmentDB
} from './crud'

// Retrieve apartments
// worker saga
function* retrieveApartments() {
  try {
    const {data} = yield call(retrieveApartmentsDB)
    yield downloadApartmentsOkAction(data)
  } catch (error) {
    yield put(downloadApartmentsErrorAction())
  }
}

// watcher saga
export function* retrieveApartmentsSaga() {
  yield takeEvery(BEGIN_APARTMENTS_DOWNLOAD, retrieveApartments)
}


// Create new apartment
// worker saga
function* addApartment(action) {
  
  const apartment = action.apartment
  try {
    const newApartment = yield call(addApartmentDB, apartment)    
    const doors =  yield call(addAllApartmentDoorDB,({apartmentID:newApartment.data.id,doorCount:apartment.residentCount}))
    yield call(retrieveApartmnetDoorsDB,newApartment.data.id)
    console.log(doors)
    // Alert
    Swal.fire({
      title: 'Нэмэгдсэн!',
      text: 'Шинээр барилга нэмэгдлээ',
      icon: 'success',
      confirmButtonColor: '#62a086'
    })
  } catch (error) {
    console.log(error)
    yield addApartmentErrorAction(true)
    Swal.fire({
      icon: 'error',
      title: 'Алдаа гарлаа',//error.name.response.data.status,
      text: error
    })
  }
}

// watcher saga
export function* addApartmentSaga() {
  yield takeEvery(ADD_APARTMENT, addApartment)

}


// Delete apartment
// worker saga
function* deleteApartment(action) {
  const id = action.payload
  try {
    yield call(deleteApartmentDB, id)
    yield deleteApartmentOkAction()
    Swal.fire({
      title: 'Deleted!',
      text: 'The apartment has been deleted.',
      icon: 'success',
      confirmButtonColor: '#62a086'
    })
  } catch (error) {
    yield deleteApartmentErrorAction()
  }
}

// watcher saga
export function* deleteApartmentSaga() {
  yield takeEvery(RETRIEVE_APARTMENT_DELETE, deleteApartment)
}


// Edit apartment
// worker saga
function* editApartment(action) {
  const apartment = action.apartment
  try {
    yield call(editApartmentDB, apartment)
    yield editApartmentOkAction(apartment)
     // Alert
    Swal.fire({
      title: 'Updated!',
      text: 'The apartment has been updated.',
      icon: 'success',
      confirmButtonColor: '#62a086'
    })
  } catch (error) {
    yield editApartmentErrorAction()
  }
}

// watcher saga
export function* editApartmentSaga() {
  yield takeEvery(BEGIN_EDIT_APARTMENT, editApartment)
}

// Export all sagas
export default function* apartmentSaga() {
  yield all([
    retrieveApartmentsSaga(),
    addApartmentSaga(),
    deleteApartmentSaga(),
    editApartmentSaga()
  ])
}
