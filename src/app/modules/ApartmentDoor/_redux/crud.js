import api from '../../../../redux/ConfigAxios';//../config/axios'

export async function retrieveApartmnetDoorsDB() {
  return await api.get('/apartmentdoor')
}

export async function addApartmnetDoorDB(apartmentDoor) {
  return await api.post('/apartmentdoor', apartmentDoor)
}

export async function deleteApartmnetDoorDB(id) {
  return await api.delete(`/apartmentdoor/${id}`)
}

export async function editApartmnetDoorDB(apartmentDoor) {
  return await api.put(`/apartmentdoor/${apartmentDoor.id}`, apartmentDoor)
}
export async function addAllApartmentDoorDB(apartmentAllDoor){
  return await api.post('/apartmentdoor/all',apartmentAllDoor)
}