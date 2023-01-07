import axios from 'axios'
//export const API_URL="http://192.168.1.17:5000";
export const API_URL="http://localhost:5000";
const api = axios.create({
    baseURL: API_URL,
    //baseURL: 'https://jsonplaceholder.typicode.com',
    header:{
        'Content-Type':'application/json'
    },
})
api.interceptors.request.use(
    config =>{
        const token = localStorage.getItem('token')        
        if(token)
        {
            config.headers['Authorization']=`Token ${token}`
        }
        return config
    },
    error => Promise.reject(error)    
)
export default api
