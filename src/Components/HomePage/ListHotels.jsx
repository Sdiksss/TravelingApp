import React from 'react'
import HotelCard from './HotelCard'
import "./styles/ListHotels.css"

const ListHotels = ({hotels}) => {
  return (
    <div className='card-container'>
       {
          !hotels || hotels?.length === 0 
          ? (<h2>No existe hoteles</h2>)
          : (
            hotels?.map(hotel => (
            <HotelCard
            key={hotel.id}
            hotel={hotel}
                />
              ) )
            )
       }

    </div>
  )
}

export default ListHotels
