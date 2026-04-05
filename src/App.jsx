import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import axios from 'axios';

export const ServerUrl = "http://localhost:4000/api/io-ai/v1";

const App = () => {
  useEffect(() => {
    const getUser = async () => {
      try {
        const result = await axios.get(ServerUrl + "/current-user",
          { withCredentials: true }
        );
        console.log('result -> ', result);
      } catch (error) {
        console.error(error);

      }
    }
    getUser()
  },[]);

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/auth' element={<Auth />} />

    </Routes>
  )
}

export default App