import React, { useEffect, useRef } from 'react'
import { getHotelsThunk } from '../store/states/hotels.state'
import { useDispatch, useSelector } from 'react-redux'
import ListHotels from '../Components/HomePage/ListHotels'
import FilterName from "../Components/HomePage/FilterName"
import FilterCities from '../Components/HomePage/FilterCities'
import FilterPrice from '../Components/HomePage/FilterPrice'
import { useState } from 'react'
import "../pages/style/HomePage.css"

const HomePage = () => {

   const [nameInput, setNameInput] = useState("")

   const [fromTo, setFromTo] = useState({
    from: 0,
    to: Infinity
    })

   

   const hotels = useSelector( states => states.hotels )

    const dispatch = useDispatch()

    useEffect ( () => {
        const url = "https://hotel-app-backend-1.onrender.com/hotels"
        dispatch(getHotelsThunk(url))

    }, [])

  

    const hotelsFiltered = hotels?.filter( hotelInfo => {
      //Filter name
      const filterName = hotelInfo.name.toLowerCase().includes(nameInput)

      //Filter price
      const priceHotel = +hotelInfo.price
      const filterPrice = fromTo.from <= priceHotel && priceHotel <= fromTo.to
      

      return filterName && filterPrice
    } )

  


  return (
    <section className='HomePage__container'>
    <div className='HomePage__div-search' >
      <h2>proximo viaje</h2>
      <FilterName setNameInput={setNameInput}/>
      <FilterCities />
      <FilterPrice setFromTo={setFromTo}/>
    </div>
    <div>  <ListHotels hotels={hotelsFiltered} /></div>
    </section>
  )
}

export default HomePage
