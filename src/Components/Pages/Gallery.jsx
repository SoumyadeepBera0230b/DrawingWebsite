import React, {useEffect, useState} from 'react'
import "../Gallery Components/gallery.css"
import drawing_img from "../Images/img1.jpg"
import Image_display from "../Gallery Components/imageDisplay.jsx"
import axios from "axios"




const Gallery = () => {
  const [images, setImages] = useState([])
  const accessKey = "https://api.unsplash.com/photos/?client_id=1FDPEFvk4PYOvMirhug-r2Qnko0Bt0MwLP6MAXmFnIk"

  let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
  useEffect(
    () => {
      console.log("Use effect is executed")
      const fetchAPI = async () => {
        const response = await axios.get(accessKey)
        const data = await response.data
        console.log(data)
        setImages(data)
        // e.target.style.display="none"
      }
      fetchAPI()
    }, []
    
    )
    const fetchAPI = async (e) => {
      const response = await axios.get(accessKey)
      const data = await response.data
      console.log(data)
      setImages(data)
      e.target.style.display="none"
    }


  return (
  <div>
    
    <div className='gallery-container'>
      {/* <button onClick={fetchAPI}>Show /Portraits</button> */}
      {
        images.map(
          (i) => <Image_display image={i.urls.full}/>
        )
        
      }
    </div>

    </div>
    
    
  )
}

export default Gallery
