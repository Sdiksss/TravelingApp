import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { getHotelsThunk } from '../../store/states/hotels.state'
import { useDispatch } from 'react-redux'

const FilterCities = () => {

    const url = "https://hotel-app-backend-1.onrender.com/cities"
    const [cities, getCities] = useFetch(url)

    useEffect(() => {
        getCities()
    }, [])

    const dispatch = useDispatch()

    console.log(cities)

    const handleFilterCities = (id) => {
        let url = "https://hotel-app-backend-1.onrender.com/hotels"
        if(id !== "all cities"){
            url = `https://hotel-app-backend-1.onrender.com/hotels?cityId=${id}`
    
        }
        dispatch(getHotelsThunk(url))
    }

  return (
    <div>
      <h3>Cities</h3>
      <ul>
        <li onClick={() => handleFilterCities("all cities")}>All cities</li>
        {
            cities?.map(city => (
                <li onClick={() => handleFilterCities(city.id)} key={city.id}>  {city.name}  </li>
            ) )
        }
      </ul>
    </div>
  )
}

export default FilterCities
