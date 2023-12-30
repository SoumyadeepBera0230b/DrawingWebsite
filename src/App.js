import React from "react"
import {useState, useEffect, CSSProperties} from "react"
import BeatLoader from "react-spinners/BeatLoader";
import axios from "axios"

import {BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams} from "react-router-dom"
import Loading from "./Loading.jsx"
import Header from "./Components/Header.jsx"
import Footer from "./Components/Footer.jsx"
import logo from "./Components/Images/naruto.jpg"
import SocialMedia from "./Components/SocialMedia.jsx"
import Home from "./Components/Pages/Home.jsx"
import Orders from "./Components/Pages/Orders.jsx"
import ErrorPage from "./Components/Pages/Error.jsx"
import Gallery from "./Components/Pages/Gallery.jsx"
import AboutUs from "./Components/Pages/AboutUs.jsx"
import Review from "./Components/Pages/Review.jsx"
import ContactUs from "./Components/Pages/ContactUs.jsx"
import SubmittionSuccess from "./Components/Pages/Submittion_Success.jsx"

const override: CSSProperties = {
        position: "fixed",
        margin: "0 auto",
        borderColor: "red",
        top: "50%",
        left: "50%",
        color: "blue",
      };


function App() {
        const [images, setImages] = useState([])
        const accessKey = "https://api.unsplash.com/photos/?client_id=1FDPEFvk4PYOvMirhug-r2Qnko0Bt0MwLP6MAXmFnIk"

        const [loading, setLoading] = useState(false)
                useEffect(
                        () => {
                        setLoading(true)
                        setTimeout(
                                // async ()=> {
                                // const response = await axios.get(accessKey)
                                // const data = await response.data
                                // console.log(data[0].urls.full)
                                // setImages(data)
                                () => { setLoading(false)
                        }, 1000
                        )
                                

                        },[]
                      )
        return (
                <>
                {
                        loading?
                        <BeatLoader
                        color="green"
                        size={15}
                        cssOverride={override}
                        />: 
                
                        <Router>
                                <Header company_logo={logo}
                                        company_name="Pencilmania"
                                        company_title="Order the Sketch/Painting Online..."
                                        first_link='Home'
                                        second_link='Order Portrait'
                                        third_link='Contact Us'
                                        fourth_link='About Us'
                                        fifth_link="Gallery"
                                        sixth_link="Review"/>
                                <Routes>
                
                                        <Route path="/pencilmaniaArts/" element={<Home />}></Route>
                                        <Route path="/pencilmaniaArts/home" element={<Home />}></Route>
                                        <Route path="/pencilmaniaArts/gallery" element={<Gallery images={images}/>}></Route>
                                        <Route path="/pencilmaniaArts/orders" element={<Orders />}></Route>
                                        <Route path="/pencilmaniaArts/aboutUs" element={<AboutUs/>}></Route>
                                        <Route path="/pencilmaniaArts/contactUs" element={<ContactUs />}></Route>
                                        <Route path="/pencilmaniaArts/review" element={<Review />}></Route>
                                        <Route path="/pencilmaniaArts/success" element={<SubmittionSuccess />}></Route>
                                        <Route path="/pencilmaniaArts/review/:id" element={<Review />}></Route>
                                        <Route path="*" element={<ErrorPage />}></Route>
                                </Routes>
                        <SocialMedia />
                        <Footer email="pencilmania.arts.official@gmail.com"
                                phnumber="+919581714834"/>
                        </Router>
                }
        
        </>
    )
}

export default App;
