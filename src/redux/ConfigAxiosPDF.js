import axios from 'axios'
import { API_URL } from './ConfigAxios';
const apiPDF = axios.create({
    baseURL: API_URL,
    //baseURL: 'https://jsonplaceholder.typicode.com',
    header:{
        'Content-Type':'application/pdf'
    },
})
apiPDF.interceptors.request.use(
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
export default apiPDF
