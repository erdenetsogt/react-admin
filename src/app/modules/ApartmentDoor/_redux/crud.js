import api from '../../../../redux/ConfigAxios';//../config/axios'

export async function retrieveApartmentDoorsDB(apartmentID) {
  
  return await api.get(`/apartmentDoor/${apartmentID}`)
}

export async function addApartmentDoorDB(apartmentDoor) {
  return await api.post('/apartmentDoor', apartmentDoor)
}

export async function deleteApartmentDoorDB(id) {
  return await api.delete(`/apartmentDoor/${id}`)
}

export async function editApartmentDoorDB(apartmentDoor) {
  return await api.put(`/apartmentDoor/${apartmentDoor.id}`, apartmentDoor)
}
export async function addAllApartmentDoorDB(apartmentAllDoor){
  return await api.post('/apartmentDoor/all',apartmentAllDoor)
}