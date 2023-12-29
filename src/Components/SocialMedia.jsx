import React from 'react'
import './SocialMedia.css'
import facebookLogo from "./Images/facebook.png"
import whatsappLogo from "./Images/whatsapp.jpeg"
import linkedinLogo from "./Images/linkedin.png"
import pinterestLogo from "./Images/pinterest.png"
import messangerLogo from "./Images/messanger.jpeg"
import emailLogo from "./Images/email.png"
import whatsapp2Logo from "./Images/whatsapp2.jpeg"

const SocialMedia = () => {
    return (
        <>
            <div className="social-media-container">
                <a href='https://facebook.com' target="_blank" rel="noreferrer" className='Facebook social'><img className="social-icons" src={facebookLogo} alt="facebook logo"></img></a>
                <a href='https://wa.me/9581714834' target="_blank" rel="noreferrer" className='Whatsapp social'><img className="social-icons" src={whatsappLogo} alt="whatsapp logo"></img></a>
                <a href='https://in.linkedin.com' target="_blank" rel="noreferrer" className='Linkdin social'><img className="social-icons" src={linkedinLogo} alt="whatsapp logo"></img></a>
                <a href='google.com' target="_blank" rel="noreferrer" className='Messenger social'><img className="social-icons" src={messangerLogo} alt="whatsapp logo"></img></a>
                <a href='https://mail.google.com/mail/?view=cm&fs=1&to=soumyadeepbera0230b@gmail.com&su=Order a Sketch&body=&bcc=pencilmania.arts.official@gmail.com' target="_blank" rel="noreferrer" className='Email social'><img className="social-icons" src={emailLogo} alt="whatsapp logo"></img></a>
                <a href='https://pinterest.com' target="_blank" rel="noreferrer" className='Pinterest social'><img className="social-icons" src={pinterestLogo} alt="whatsapp logo"></img></a>
            </div>

            <a href='https://wa.me/9581714834' target="_blank" rel="noreferrer" className='whatsapp-btn'>
                <img className="whatsapp-icon" src={whatsapp2Logo} alt="whatsapp logo"></img>
            </a>
        
        </>
    )
}

export default SocialMedia
