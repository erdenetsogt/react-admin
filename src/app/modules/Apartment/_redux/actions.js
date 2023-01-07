import {
  ADD_APARTMENT,
  ADD_APARTMENT_ERROR,
  ADDED_APARTMENT_OK,
  BEGIN_APARTMENTS_DOWNLOAD,
  APARTMENTS_DOWNLOAD_OK,
  APARTMENTS_DOWNLOAD_ERROR,
  RETRIEVE_APARTMENT_DELETE,
  APARTMENT_DELETED_OK,
  APARTMENT_DELETED_ERROR,
  RETRIEVE_APARTMENT_EDIT,
  BEGIN_EDIT_APARTMENT,
  APARTMENT_EDITED_OK,
  APARTMENT_EDITED_ERROR
} from './types'
import store from '../../../../redux/store'


// Download apartments actions
const downloadApartments = () => ({
  type: BEGIN_APARTMENTS_DOWNLOAD,
  payload: true
})

const downloadApartmentsOk = apartments => ({
  type: APARTMENTS_DOWNLOAD_OK,
  payload: apartments
})

const downloadApartmentsError = () => ({
  type: APARTMENTS_DOWNLOAD_ERROR,
  payload: true
})

export const downloadApartmentsAction = () => store.dispatch(downloadApartments())

export const downloadApartmentsOkAction = apartments => store.dispatch(downloadApartmentsOk(apartments))

export const downloadApartmentsErrorAction = () => store.dispatch(downloadApartmentsError())


// Create new apartments
const addApartment = apartment => ({
  type: ADD_APARTMENT,
  payload: true,
  apartment: apartment
})

const addApartmentOk = apartment => ({
  type: ADDED_APARTMENT_OK,
  payload: apartment

})

const addApartmentError = state => ({
  type: ADD_APARTMENT_ERROR,
  payload: state
})

export const addApartmentAction = apartment => store.dispatch(addApartment(apartment))

export const addApartmentOkAction = apartment => store.dispatch(addApartmentOk(apartment))

export const addApartmentErrorAction = state => store.dispatch(addApartmentError(state))


// Delete apartments
const retrieveApartmentDelete = id => ({
  type: RETRIEVE_APARTMENT_DELETE,
  payload: id
})

const deleteApartmentOk = () => ({
  type: APARTMENT_DELETED_OK
})

const deleteApartmentError = () => ({
  type: APARTMENT_DELETED_ERROR,
  payload: true
})

export const deleteApartmentAction = id => store.dispatch(retrieveApartmentDelete(id))

export const deleteApartmentOkAction = () => store.dispatch(deleteApartmentOk())

export const deleteApartmentErrorAction = () => store.dispatch(deleteApartmentError())


// Edit apartment
const retrieveApartmentAction = apartment => ({
  type: RETRIEVE_APARTMENT_EDIT,
  payload: apartment
})

const editApartment = apartment => ({
  type: BEGIN_EDIT_APARTMENT,
  apartment: apartment
})

const editApartmentOk = apartment => ({
  type: APARTMENT_EDITED_OK,
  payload: apartment
})

const editApartmentError = () => ({
  type: APARTMENT_EDITED_ERROR,
  payload: true
})

export const retrieveApartmentEditAction = apartment => store.dispatch(retrieveApartmentAction(apartment))

export const editApartmentAction = apartment => store.dispatch(editApartment(apartment))

export const editApartmentOkAction = apartment => store.dispatch(editApartmentOk(apartment))

export const editApartmentErrorAction = () => store.dispatch(editApartmentError())
