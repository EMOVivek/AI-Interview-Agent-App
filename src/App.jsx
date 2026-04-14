import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUserData } from './redux/userSlice';
import Step1SetUp from './components/Step1SetUp';

export const ServerUrl = "http://localhost:4000/api/io-ai/v1";

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const getUser = async () => {
      try {
        const result = await axios.get(ServerUrl + "/current-user",
          { withCredentials: true }
        );
        dispatch(setUserData(result.data))
      } catch (error) {
        console.error(error);
        dispatch(setUserData(null))

      }
    }
    getUser()
  }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/auth' element={<Auth />} />
      <Route path='/interview' element={<Step1SetUp />} />

    </Routes>
  )
}

export default App