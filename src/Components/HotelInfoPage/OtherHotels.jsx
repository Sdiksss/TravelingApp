import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import HotelCard from '../HomePage/HotelCard'

const OtherHotels = ({ cityId, hotelId}) => {

    const url = `https://hotel-app-backend-1.onrender.com/hotels?cityId=${cityId}`

    const [hotels, getHotels] = useFetch(url)

    useEffect(() => {
        if(cityId){
        getHotels()
        }
        //cityId && getHotels ()
    }, [cityId])



  return (
    <div>
        <h2>Other Hotels in {hotels?.[0].city.name}</h2>
        <div className='card-container'>
            {
                hotels?.filter(hotelsInfo => hotelsInfo.id !== hotelId).map( hotelsInfo => (
                    <HotelCard 
                    key={hotelsInfo.id}
                    hotel={hotelsInfo}/>


                 ) )
            }
        </div>
    </div>
  )
}

export default OtherHotels
