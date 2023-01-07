import {
  ADD_APARTMENTDOOR,
  ADD_APARTMENTDOOR_OK,
  ADD_APARTMENTDOOR_ERROR,
  ADD_ALL_APARTMENTDOORS,
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

const initialState = {
  apartmentDoors: [],
  error: false,
  loading: false,
  status:null,
  deleteApartmentDoor: null
}
export function apartmentDoorReducer (state = initialState, action) {
  switch(action.type) {

    case BEGIN_APARTMENTDOORS_DOWNLOAD:
    case ADD_APARTMENTDOOR:
    case BEGIN_EDIT_APARTMENTDOOR:

      return {
        ...state,
        loading: action.payload,
        APARTMENTDOOR: action.APARTMENTDOOR
      }

    case ADD_APARTMENTDOOR_OK:
      //console.log('ADD_APARTMENTDOOR_OK')
      return {
        ...state,
        loading: false
      }
    case ADD_ALL_APARTMENTDOORS:
    case ADD_APARTMENTDOOR_ERROR:
    case APARTMENTDOORS_DOWNLOAD_ERROR:
    case APARTMENTDOOR_DELETED_ERROR:
    case APARTMENTDOOR_EDITED_ERROR:
      //console.log('APARTMENTDOOR_EDITED_ERROR')
      //console.log(action.payload.status)
      return {
        ...state,
        loading: false,
        status:action.payload.status,
        error: action.payload.status
      }

    case APARTMENTDOORS_DOWNLOAD_OK:
      //console.log('APARTMENTDOORS_DOWNLOAD_OK')
      return {
        ...state,
        loading: false,        
        error: null,        
        apartmentDoors: action.payload
      }

    case RETRIEVE_APARTMENTDOOR_DELETE:
      //console.log('RETRIEVE_APARTMENTDOOR_DELETE')
      return {
        ...state,
        deleteApartmentDoor: action.payload
      }

    case APARTMENTDOOR_DELETED_OK:
      //console.log('APARTMENTDOOR_DELETED_OK')
      return {
        ...state,
        apartmentDoors: state.apartmentDoors.filter(APARTMENTDOOR => APARTMENTDOOR.id !== state.deleteApartmentDoor),
        deleteApartmentDoor: null
      }

    case RETRIEVE_APARTMENTDOOR_EDIT:
      //console.log('RETRIEVE_APARTMENTDOOR_EDIT')
      return {
        ...state,
        editApartmentDoor: action.payload
      }

    case APARTMENTDOOR_EDITED_OK:
      //console.log('APARTMENTDOOR_EDITED_OK')
      return {
        ...state,
        editApartmentDoor: null,
        apartmentDoors: state.apartmentDoors.map(APARTMENTDOOR =>
          APARTMENTDOOR.id === action.payload.id ? APARTMENTDOOR = action.payload : APARTMENTDOOR
        )
      }

    default:
      return state
  }
}
//export default apartmentDoorReducer;