import React, {useEffect, useState} from 'react'
import "../Gallery Components/gallery.css"
import drawing_img from "../Images/img1.jpg"
import Image_display from "../Gallery Components/imageDisplay.jsx"
import axios from "axios"




const Gallery = (props) => {
  const [loading, setLoading] = useState(false)

  
  

  let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
  return (
  <div>
    
    <div className='gallery-container'>
      {
        arr.map(
          (i) => <Image_display image={drawing_img}/>
        )
        
      }
    </div>

    </div>
    
    
  )
}

export default Gallery
