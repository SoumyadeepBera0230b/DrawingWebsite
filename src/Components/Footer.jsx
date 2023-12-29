import React from 'react'
import "./Footer.css"

const Footer = (props) => {
    return (
        <footer>
        <div className='foo1'>
            <div className="foo-pages">
                <p className='foo-head'>Pages</p>
                <p>Home</p>
                <p>Order Portrait</p>
                <p>Gallery</p>
                <p>Reviews</p>
            </div>
            <div className="contact-us">
                <p className='foo-head'>Contact-us</p>
                <p>{props.email}</p>
                <p>Call : {props.phnumber}</p>
                <p>Whatsapp us</p>
                <p>Reviews</p>
            </div>
            <div className="footer-email">
                <p className='foo-head'>Email</p>
                <input type='email'></input>
                <button>Subscribe now</button>
            </div>
            <div className='gstin'>
                <p>GSTIN: 453sdf09534983902odg</p>
            </div>
        </div>

        <div className='foo foo2'>
            <p>Home | Order Sketch | Mail us | Whatsapp us | Refund Policy | Terms & conditions | Privacy Policy | About us</p>
        </div>
        <div className='foo foo3'>
            <p>Copyright © 2021-present | All Rights Reserved.</p>
        </div>
        </footer>
    )
}

export default Footer
