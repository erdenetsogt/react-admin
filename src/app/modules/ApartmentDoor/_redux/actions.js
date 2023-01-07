import {
  ADD_APARTMENTDOOR,
  ADD_ALL_APARTMENTDOORS,
  ADD_APARTMENTDOOR_ERROR,
  BEGIN_APARTMENTDOORS_DOWNLOAD,
  APARTMENTDOORS_DOWNLOAD_OK,
  APARTMENTDOORS_DOWNLOAD_ERROR,
  RETRIEVE_APARTMENTDOOR_DELETE,
  APARTMENTDOOR_DELETED_OK,
  APARTMENTDOOR_DELETED_ERROR,
  RETRIEVE_APARTMENTDOOR_EDIT,
  BEGIN_EDIT_APARTMENTDOOR,
  APARTMENTDOOR_EDITED_OK,
  APARTMENTDOOR_EDITED_ERROR
} from './types'
import store from '../../../../redux/store'


// Download apartmentDoors actions
const downloadApartmentDoors = (apartmentID) => ({
  type: BEGIN_APARTMENTDOORS_DOWNLOAD,
  payload: apartmentID
})

const downloadApartmentDoorsOk = apartmentDoors => ({
  type: APARTMENTDOORS_DOWNLOAD_OK,
  payload: apartmentDoors
})

const downloadApartmentDoorsError = () => ({
  type: APARTMENTDOORS_DOWNLOAD_ERROR,
  payload: true
})

export const downloadApartmentDoorsAction = (apartmentID) => store.dispatch(downloadApartmentDoors(apartmentID))

export const downloadApartmentDoorsOkAction = apartmentDoors => store.dispatch(downloadApartmentDoorsOk(apartmentDoors))

export const downloadApartmentDoorsErrorAction = () => store.dispatch(downloadApartmentDoorsError())

// Create new all apartmentAllDoors
const addApartmentAllDoors = apartmentAllDoors => ({
  type: ADD_ALL_APARTMENTDOORS,
  payload: apartmentAllDoors
})

// Create new apartmentDoorDoors
const addApartmentDoor = apartmentDoor => ({
  type: ADD_APARTMENTDOOR,
  payload: true,
  apartmentDoor: apartmentDoor
})

const addApartmentDoorOk = () => ({
  type: BEGIN_APARTMENTDOORS_DOWNLOAD,
  payload: true
})

const addApartmentDoorError = state => ({
  type: ADD_APARTMENTDOOR_ERROR,
  payload: state
})
export const addApartmentAllDoorsAction = apartmentAllDoors => store.dispatch(addApartmentAllDoors(apartmentAllDoors))

export const addApartmentDoorAction = apartmentDoor => store.dispatch(addApartmentDoor(apartmentDoor))

export const addApartmentDoorOkAction = () => store.dispatch(addApartmentDoorOk())

export const addApartmentDoorErrorAction = state => store.dispatch(addApartmentDoorError(state))


// Delete apartmentDoors
const retrieveApartmentDoorDelete = id => ({
  type: RETRIEVE_APARTMENTDOOR_DELETE,
  payload: id
})

const deleteApartmentDoorOk = () => ({
  type: APARTMENTDOOR_DELETED_OK
})

const deleteApartmentDoorError = () => ({
  type: APARTMENTDOOR_DELETED_ERROR,
  payload: true
})

export const deleteApartmentDoorAction = id => store.dispatch(retrieveApartmentDoorDelete(id))

export const deleteApartmentDoorOkAction = () => store.dispatch(deleteApartmentDoorOk())

export const deleteApartmentDoorErrorAction = () => store.dispatch(deleteApartmentDoorError())


// Edit apartmentDoor
const retrieveApartmentDoorAction = apartmentDoor => ({
  type: RETRIEVE_APARTMENTDOOR_EDIT,
  payload: apartmentDoor
})

const editApartmentDoor = apartmentDoor => ({
  type: BEGIN_EDIT_APARTMENTDOOR,
  apartmentDoor: apartmentDoor
})

const editApartmentDoorOk = apartmentDoor => ({
  type: APARTMENTDOOR_EDITED_OK,
  payload: apartmentDoor
})

const editApartmentDoorError = () => ({
  type: APARTMENTDOOR_EDITED_ERROR,
  payload: true
})

export const retrieveApartmentDoorEditAction = apartmentDoor => store.dispatch(retrieveApartmentDoorAction(apartmentDoor))

export const editApartmentDoorAction = apartmentDoor => store.dispatch(editApartmentDoor(apartmentDoor))

export const editApartmentDoorOkAction = apartmentDoor => store.dispatch(editApartmentDoorOk(apartmentDoor))

export const editApartmentDoorErrorAction = () => store.dispatch(editApartmentDoorError())
