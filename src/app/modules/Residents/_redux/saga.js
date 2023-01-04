import { put, takeEvery, all, call } from 'redux-saga/effects'
import Swal from 'sweetalert2'
import {
  ADD_RESIDENT,
  BEGIN_RESIDENTS_DOWNLOAD,
  RETRIEVE_RESIDENT_DELETE,
  BEGIN_EDIT_RESIDENT,
} from './types'

import {
  downloadResidentsOkAction,
  downloadResidentsErrorAction,
  addResidentOkAction,
  addResidentErrorAction,
  deleteResidentOkAction,
  deleteResidentErrorAction,
  editResidentOkAction,
  editResidentErrorAction
} from './actions'

import {
  retrieveResidentsDB,
  addResidentDB,
  deleteResidentDB,
  editResidentDB
} from './crud'

// Retrieve residents
// worker saga
function* retrieveResidents() {
  try {
    const {data} = yield call(retrieveResidentsDB)
    yield downloadResidentsOkAction(data)
  } catch (error) {
    yield put(downloadResidentsErrorAction())
  }
}

// watcher saga
export function* retrieveResidentsSaga() {
  yield takeEvery(BEGIN_RESIDENTS_DOWNLOAD, retrieveResidents)
}


// Create new resident
// worker saga
function* addResident(action) {
  const resident = action.resident
  try {
    yield call(addResidentDB, resident)
   /* const response = await axiosClient.post('/residents', resident)*/
    yield addResidentOkAction(resident) // download actualized residents
      // Alert
    Swal.fire({
      title: 'Added!',
      text: 'The resident has been added successfully',
      icon: 'success',
      confirmButtonColor: '#62a086'
    })
  } catch (error) {
    yield addResidentErrorAction(true)
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'An error ocurred. Please, try it again.'
    })
  }
}

// watcher saga
export function* addResidentSaga() {
  yield takeEvery(ADD_RESIDENT, addResident)
}


// Delete resident
// worker saga
function* deleteResident(action) {
  const id = action.payload
  try {
    yield call(deleteResidentDB, id)
    yield deleteResidentOkAction()
    Swal.fire({
      title: 'Deleted!',
      text: 'The resident has been deleted.',
      icon: 'success',
      confirmButtonColor: '#62a086'
    })
  } catch (error) {
    yield deleteResidentErrorAction()
  }
}

// watcher saga
export function* deleteResidentSaga() {
  yield takeEvery(RETRIEVE_RESIDENT_DELETE, deleteResident)
}


// Edit resident
// worker saga
function* editResident(action) {
  const resident = action.resident
  try {
    yield call(editResidentDB, resident)
    yield editResidentOkAction(resident)
     // Alert
    Swal.fire({
      title: 'Updated!',
      text: 'The resident has been updated.',
      icon: 'success',
      confirmButtonColor: '#62a086'
    })
  } catch (error) {
    yield editResidentErrorAction()
  }
}

// watcher saga
export function* editResidentSaga() {
  yield takeEvery(BEGIN_EDIT_RESIDENT, editResident)
}

// Export all sagas
export default function* residentSaga() {
  yield all([
    retrieveResidentsSaga(),
    addResidentSaga(),
    deleteResidentSaga(),
    editResidentSaga()
  ])
}
