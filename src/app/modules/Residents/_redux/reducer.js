import {
  ADD_RESIDENT,
  ADD_RESIDENT_OK,
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

const initialState = {
  residents: [],
  error: false,
  loading: false,
  deleteResident: null
}
export function residentReducer (state = initialState, action) {
  switch(action.type) {

    case BEGIN_RESIDENTS_DOWNLOAD:
    case ADD_RESIDENT:
    case BEGIN_EDIT_RESIDENT:
      return {
        ...state,
        loading: action.payload,
        RESIDENT: action.RESIDENT
      }

    case ADD_RESIDENT_OK:
      return {
        ...state,
        loading: false
      }

    case ADD_RESIDENT_ERROR:
    case RESIDENTS_DOWNLOAD_ERROR:
    case RESIDENT_DELETED_ERROR:
    case RESIDENT_EDITED_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    case RESIDENTS_DOWNLOAD_OK:
      return {
        ...state,
        loading: false,
        error: null,
        residents: action.payload
      }

    case RETRIEVE_RESIDENT_DELETE:
      return {
        ...state,
        deleteResident: action.payload
      }

    case RESIDENT_DELETED_OK:
      return {
        ...state,
        residents: state.residents.filter(RESIDENT => RESIDENT.id !== state.deleteResident),
        deleteResident: null
      }

    case RETRIEVE_RESIDENT_EDIT:
      return {
        ...state,
        editResident: action.payload
      }

    case RESIDENT_EDITED_OK:
      return {
        ...state,
        editResident: null,
        residents: state.residents.map(RESIDENT =>
          RESIDENT.id === action.payload.id ? RESIDENT = action.payload : RESIDENT
        )
      }

    default:
      return state
  }
}
//export default residentReducer;