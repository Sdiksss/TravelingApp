import React, { useEffect } from 'react'
import useCrud from '../../hooks/useCrud'

const CommetsSection = ({hotelId}) => {

const [ reviews, getReviews ] = useCrud()

     useEffect(()=> {
        if(hotelId){
        getReviews(`/reviews?hotelId=${hotelId}`)
        }
     }, [hotelId]) //ojo error por undefined url

     console.log(reviews)

  return (
    <div>
        <div>
            {
                reviews?.results.map(reviewInfo => (
                 <div key={reviewInfo.id}>
                    <div>{reviewInfo.rating}⭐</div>
                    <p> {reviewInfo.comment}</p>
                </div>
                )
                    )
            }
        </div>
        CommetsSection
      
    </div>
  )
}

export default CommetsSection
