import React from 'react'
import GetDaysFromDates from '../../services/GetDaysFromDates'
import useCrud from '../../hooks/useCrud'
import "../ReservationPage/ReserveCard.css"

const ReserveCard = ({reserve, deleteReservation}) => {

    console.log(reserve)

    const reservationsDays = GetDaysFromDates(reserve.checkIn, reserve.checkOut)
    
    const handleDelete = () => {
        deleteReservation("/bookings", reserve.id)
    }


  return (
    <article className='reserve__container'>
        <header className='reserve__header'>
            <img className='reserve__img' src={reserve.hotel.images[0].url} alt="" />
        </header>
        <section className='reserver__section'>
            <h3>{reserve.hotel.name}</h3>
            <div>{reserve.hotel.city.name}, {reserve.hotel.city.country}</div>
            <div>
                <span>Reservations days:</span>
                 <span>{reservationsDays}</span> 
            </div>
            <div>
                <span>Subtotal Price:</span>
                <span>{Number(reserve.hotel.price) * reservationsDays}</span>
            </div>
            <button onClick={handleDelete}>Delete</button>
        </section>
    </article>
  )
}

export default ReserveCard
