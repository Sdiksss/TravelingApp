import React from 'react'
import { useForm } from 'react-hook-form'
import "../HomePage/styles/FilterPrice.css"

const FilterPrice = ({setFromTo}) => {

    const { handleSubmit, register, reset } = useForm()

    const submit = data => {
        const obj = {
            from: +data.from,
            to: +data.to === 0 ? Infinity : +data.to
        }
        setFromTo(obj)

    }
  return (
    <div>
      <h3> Filter price </h3>
      <form onSubmit={handleSubmit(submit)} >
        <label>
          <span>From</span>
          <input {...register("from")}  type="number" />
        </label>
        <label>
          <span>To</span>
          <input {...register("to")} type="number" />
        </label>
        <button className='filterPrice__btn'>Apply</button>
      </form>
    </div>
  )
}

export default FilterPrice
