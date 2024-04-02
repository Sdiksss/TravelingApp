import React from 'react'
import { useForm } from 'react-hook-form'
import useCrud from '../../hooks/useCrud'

const FormReview = ({reserveSelected, setReserveSelected}) => {

 const {handleSubmit, register, reset} =  useForm()

 const [,,createReview] = useCrud()

 const submit = data => {
    const obj = {
        ...data,
        hotelId: reserveSelected?.hotelId,
        rating: +data.rating
    }
    createReview("/reviews", obj)

    console.log(reserveSelected)
    reset({
        rating: "5",
        Comment: ""
    })
    setReserveSelected()
 }


  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <h3>Form Reviews</h3>
        <label htmlFor="">
            <span>
                <select {...register("rating")}>
                    <option value="5">⭐⭐⭐⭐⭐</option>
                    <option value="4">⭐⭐⭐⭐</option>
                    <option value="3">⭐⭐⭐</option>
                    <option value="2">⭐⭐</option>
                    <option value="1">⭐</option>
                </select>
            </span>
        </label>
        <label>
            <span>
                Comments
                <textarea {...register("comment")}/>
            </span>

        </label>
        <button>Submit </button>
      </form>
    </div>
  )
}

export default FormReview
