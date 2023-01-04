import api from '../../../../redux/ConfigAxios';//../config/axios'

export async function retrieveResidentsDB() {
  return await api.get('/resident')
}

export async function addResidentDB(resident) {
  return await api.post('/resident', resident)
}

export async function deleteResidentDB(id) {
  return await api.delete(`/resident/${id}`)
}

export async function editResidentDB(resident) {
  return await api.put(`/resident/${resident.id}`, resident)
}
