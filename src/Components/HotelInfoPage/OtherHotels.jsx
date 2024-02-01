import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import HotelCard from '../HomePage/HotelCard'

const OtherHotels = ({ cityId, hotelId}) => {

    const url = `https://hotels-api.academlo.tech/hotels?cityId=${cityId}`

    const [hotels, getHotels] = useFetch(url)

    useEffect(() => {
        if(cityId){
        getHotels()
        }
        //cityId && getHotels ()
    }, [cityId])



  return (
    <div>
        <h2>Other Hotels in {hotels?.results[0].city.name}</h2>
        <div className='card-container'>
            {
                hotels?.results.filter(hotelsInfo => hotelsInfo.id !== hotelId).map( hotelsInfo => (
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
