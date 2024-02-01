import React, { useEffect } from 'react'
import useCrud from '../hooks/useCrud'
import ReserveCard from '../Components/ReservationPage/ReserveCard'
import "../pages/style/Reservations.css"

const ReservationsPage = () => {
     const [reservations, getReservations, , deleteReservation] = useCrud ()

     useEffect (() => {
        getReservations("/bookings")
     },[])

     console.log(reservations)

  return (
    <section>
    <div className='reservation__container'>
      <h2 className='reservation__h2'>reservations</h2>
      <div className='reservation__card'>
        {
            reservations?.map(reserve => (
                <ReserveCard
                    key={reserve.id}
                    reserve={reserve}
                    deleteReservation={deleteReservation}/>

            ))
        }
      </div>
    </div>
    </section>
  )
}

export default ReservationsPage
