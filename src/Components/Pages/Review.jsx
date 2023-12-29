import React from 'react'
import {useParams} from "react-router-dom"

const Review = () => {
  let {id} = useParams()
  return (
    <div>
      Inside review {id}
    </div>
  )
}

export default Review
