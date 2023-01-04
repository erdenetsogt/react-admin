import api from '../../../../redux/ConfigAxios';//../config/axios'

export async function retrieveApartmentsDB() {
  return await api.get('/apartment')
}

export async function addApartmentDB(apartment) {
  return await api.post('/apartment', apartment)
}

export async function deleteApartmentDB(id) {
  return await api.delete(`/apartment/${id}`)
}

export async function editApartmentDB(apartment) {
  return await api.put(`/apartment/${apartment.id}`, apartment)
}
