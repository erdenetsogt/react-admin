import {
  ADD_RESIDENT,
  ADD_RESIDENT_ERROR,
  BEGIN_RESIDENTS_DOWNLOAD,
  RESIDENTS_DOWNLOAD_OK,
  RESIDENTS_DOWNLOAD_ERROR,
  RETRIEVE_RESIDENT_DELETE,
  RESIDENT_DELETED_OK,
  RESIDENT_DELETED_ERROR,
  RETRIEVE_RESIDENT_EDIT,
  BEGIN_EDIT_RESIDENT,
  RESIDENT_EDITED_OK,
  RESIDENT_EDITED_ERROR
} from './types'
import store from '../../../../redux/store'


// Download residents actions
const downloadResidents = () => ({
  type: BEGIN_RESIDENTS_DOWNLOAD,
  payload: true
})

const downloadResidentsOk = residents => ({
  type: RESIDENTS_DOWNLOAD_OK,
  payload: residents
})

const downloadResidentsError = () => ({
  type: RESIDENTS_DOWNLOAD_ERROR,
  payload: true
})

export const downloadResidentsAction = () => store.dispatch(downloadResidents())

export const downloadResidentsOkAction = residents => store.dispatch(downloadResidentsOk(residents))

export const downloadResidentsErrorAction = () => store.dispatch(downloadResidentsError())


// Create new residents
const addResident = resident => ({
  type: ADD_RESIDENT,
  payload: true,
  resident: resident
})

const addResidentOk = () => ({
  type: BEGIN_RESIDENTS_DOWNLOAD,
  payload: true
})

const addResidentError = state => ({
  type: ADD_RESIDENT_ERROR,
  payload: state
})

export const addResidentAction = resident => store.dispatch(addResident(resident))

export const addResidentOkAction = () => store.dispatch(addResidentOk())

export const addResidentErrorAction = state => store.dispatch(addResidentError(state))


// Delete residents
const retrieveResidentDelete = id => ({
  type: RETRIEVE_RESIDENT_DELETE,
  payload: id
})

const deleteResidentOk = () => ({
  type: RESIDENT_DELETED_OK
})

const deleteResidentError = () => ({
  type: RESIDENT_DELETED_ERROR,
  payload: true
})

export const deleteResidentAction = id => store.dispatch(retrieveResidentDelete(id))

export const deleteResidentOkAction = () => store.dispatch(deleteResidentOk())

export const deleteResidentErrorAction = () => store.dispatch(deleteResidentError())


// Edit resident
const retrieveResidentAction = resident => ({
  type: RETRIEVE_RESIDENT_EDIT,
  payload: resident
})

const editResident = resident => ({
  type: BEGIN_EDIT_RESIDENT,
  resident: resident
})

const editResidentOk = resident => ({
  type: RESIDENT_EDITED_OK,
  payload: resident
})

const editResidentError = () => ({
  type: RESIDENT_EDITED_ERROR,
  payload: true
})

export const retrieveResidentEditAction = resident => store.dispatch(retrieveResidentAction(resident))

export const editResidentAction = resident => store.dispatch(editResident(resident))

export const editResidentOkAction = resident => store.dispatch(editResidentOk(resident))

export const editResidentErrorAction = () => store.dispatch(editResidentError())
