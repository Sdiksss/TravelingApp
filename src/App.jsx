import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import UnknownPages from './pages/UnknownPages'
import HotelInfoPage from './pages/HotelInfoPage'
import HeaderShared from './Components/shared/HeaderShared'
import Reservation from './Components/HotelInfoPage/Reservation'
import ReservationsPage from './pages/ReservationsPage'

function App() {

  return (
    <>

    <div>
    <HeaderShared/>

    <Routes>
      <Route path='/' element={<HomePage/>}  />
      <Route path='/register' element={<RegisterPage/>} />
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/hotel/:id' element={<HotelInfoPage/>} />

      <Route path='/reservations' element={<ReservationsPage/>} />
      <Route path='*' element={<UnknownPages/>} />
    </Routes>

    </div>
    
    </>
  )
}

export default App
