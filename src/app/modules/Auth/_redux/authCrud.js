import axios from "axios";
import { API_URL } from "../../../../redux/ConfigAxios";
export const URL = API_URL;
export const LOGIN_URL = URL+"/user/login";
export const REGISTER_URL = "/user/register";
export const ME_URL = URL+"/user/me";
export const ME_INFO = URL+"/user/info/";
export const REQUEST_PASSWORD_URL = "users/forgot-password";

export function login(email, password) {
  return axios.post(LOGIN_URL, { email, password })
}

export function register(email, fullname, username, password) {
  return axios.post(REGISTER_URL, { email, fullname, username, password });
}
export function getUserByToken(token) {
  // Authorization head should be fulfilled in interceptor.
  return axios.get(ME_URL,{
    headers:{
      'Authorization': token
    }
  });
}
export function getUserInfo(token,pid){
  return axios.get(ME_INFO+pid,{
    headers:{
      'Authorization': token
    }
  });
} 
export function getInfoMe(token){  
  return axios.get(ME_URL,{
    'Authorization': token
  })
}
export function requestPassword(email) {
    return axios.post(REQUEST_PASSWORD_URL, { email });
  }
