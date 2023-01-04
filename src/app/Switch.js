import React from 'react'
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import BasePage from './BasePage';
import Login from './modules/Auth/Login'
//import Layout from './pages/Layout';


export default function Switch() {
  const dateNow = new Date();
  const {isAuthorized} = useSelector(
    ({auth}) => ({
        isAuthorized: (auth.authToken!=null)?((jwt_decode(auth.authToken).exp<dateNow.getTime()/1000)?null:auth.authToken):null,
    }),
    shallowEqual
);
const location = useLocation();
//console.log()
  return (
    <>
      {isAuthorized?(
        // <Routes>
            <BasePage/>
        // </Routes>
      ):
      (
      
        <div className='app'>
          <main className='content'>
            <Routes>              
            <Route path='/login' element={<Login/>} />
            <Route path={location.pathname} element = {!isAuthorized?<Navigate to='/login' replace />:<BasePage/>}/>              
            </Routes>                        
            </main>
        </div>
        
      )
      }
    </>
  )
}
