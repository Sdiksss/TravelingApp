import React from 'react'
import { useForm } from 'react-hook-form'
import useCrud from '../../hooks/useCrud'
import "../HotelInfoPage/Reservation.css"

const Reservation = ({hotelId}) => {

    const {handleSubmit, register, reset} = useForm()

    const [ ,,createReservation ] = useCrud()

   const submit = data => {
    const obj ={
        ...data,
        hotelId: hotelId
    }
    
    createReservation("/bookings", obj)
    }

   
  return (

    <form className='Reservation__form' onSubmit={handleSubmit(submit)}>
        
        <label>
          <span>Check-in</span>
          <input {...register( "checkIn")} type="date" />
        </label>
        <label>
          <span>Check-out</span>
          <input {...register( "checkOut")} type="date" />
        </label>
        <button>Submit</button>
      
      
    </form>
  )
  }

export default Reservation
