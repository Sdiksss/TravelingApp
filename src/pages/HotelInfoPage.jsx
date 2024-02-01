import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { Map, Marker} from 'pigeon-maps'
import OtherHotels from '../Components/HotelInfoPage/OtherHotels'
import Reservation from '../Components/HotelInfoPage/Reservation'
import SliderImgs from '../Components/HotelInfoPage/SliderImgs'
import "../pages/style/HotelInfoPage.css"


const HotelInfoPage = () => {

    const {id} = useParams()

    const url = `https://hotels-api.academlo.tech/hotels/${id}`
    const [hotel, getHotel] = useFetch(url)

    useEffect(() => {
        getHotel()
    }, [url])


  return (
    <div> 
     <header className='HotelInfo__header'>
       <h2>{hotel?.name}</h2>
       <span>Rating</span>
     </header>

  
    <SliderImgs hotel={hotel}/>
     <div className='HotelInfo__container'>
        <div>
            <span>{hotel?.city.name}</span>
            <span>{hotel?.city.country}</span>
        </div>
        <div>
            <p>
            <i className='bx bx-map'></i>
            <span>{hotel?.address}</span>
            </p>
        </div>
        <p>{hotel?.description}</p>

        <div className='HotelInfo__map-img'>
     <div className='HotelInfo__div-img'>
        <img className='HotelInfo__img' src={hotel?.images[0].url} alt="" />
     </div>
     <div className='HotelInfo__div-map'>
        {
        hotel && (
            <Map defaultCenter={[+hotel.lat, +hotel.lon]} height={300} zoom={13}>
            <Marker 
            width={50} 
            color='#5312'
            anchor={[Number(hotel.lat), +hotel.lon]}/>
        </Map>
        )
        }
     </div>
    </div>
     </div>
     <Reservation
     hotelId={hotel?.id}/>
     <OtherHotels 
      cityId={hotel?.city.id}
      hotelId={hotel?.id} />
    </div>
  )
}

export default HotelInfoPage
