import {
  ADD_APARTMENT,
  ADD_APARTMENT_OK,
  ADD_APARTMENT_ERROR,
  RETRIEVE_APARTMENT_ADD,
  //ADDED_APARTMENT_OK,

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
import {ADD,EDIT,DELETE,DOWNLOAD} from '../../actionType'
const initialState = {
  apartments: [],
  error: false,
  loading: false,
  action:null,
  actionApartment: null
}
export function apartmentReducer (state = initialState, action) {
  switch(action.type) {

    case ADD_APARTMENT_OK:      
      state.apartments.push(action.payload.data)
      //console.log(action.payload.data)
      return {
        ...state,
        loading:false,
        error:null,
        action:ADD,
        actionApartment:action.payload.data
        //apartments:state.apartments.push(action.payload.data),
      }
    case BEGIN_APARTMENTS_DOWNLOAD:
      //console.log( )
    case ADD_APARTMENT:
      //console.log(action.apartment)
      // return {
      //   ...state,
      //   loading:false,
      //   error:false,
      //   apartments:state.apartments.push(action.payload)
      // }
    case BEGIN_EDIT_APARTMENT:
      return {
        ...state,
        loading: action.payload,
        apartment: action.apartment
      }

    // case ADD_APARTMENT_OK:
    //   console.log(action.payload)
    //   return {
    //     ...state,
    //     loading: false
    //   }
    
    case ADD_APARTMENT_ERROR:
    case APARTMENTS_DOWNLOAD_ERROR:
    case APARTMENT_DELETED_ERROR:
    case APARTMENT_EDITED_ERROR:
      //console.log('APARTMENT_EDITED_ERROR')
      //console.log(action.payload.status)
      return {
        ...state,
        loading: false,
        status:action.payload.status,
        error: action.payload.status
      }

    case APARTMENTS_DOWNLOAD_OK:
      //console.log('APARTMENTS_DOWNLOAD_OK')
      return {
        ...state,
        loading: false,        
        error: null,        
        apartments: action.payload
      }

    case RETRIEVE_APARTMENT_DELETE:
      //console.log('RETRIEVE_APARTMENT_DELETE')
      return {
        ...state,
        actionApartment: action.payload
      }
    case RETRIEVE_APARTMENT_ADD:
      return {
        ...state,
        
      }
    case APARTMENT_DELETED_OK:
      //console.log('APARTMENT_DELETED_OK')
      return {
        ...state,
        apartments: state.apartments.filter(APARTMENT => APARTMENT.id !== state.actionApartment),
        actionApartment: null,
        action:'DELETE'
      }

    case RETRIEVE_APARTMENT_EDIT:
      //console.log('RETRIEVE_APARTMENT_EDIT')
      return {
        ...state,
        editApartment: action.payload
      }

    case APARTMENT_EDITED_OK:
      //console.log('APARTMENT_EDITED_OK')
      return {
        ...state,
        editApartment: null,
        apartments: state.apartments.map(APARTMENT =>
          APARTMENT.id === action.payload.id ? APARTMENT = action.payload : APARTMENT
        )
      }

    default:
      return state
  }
}
//export default apartmentReducer;