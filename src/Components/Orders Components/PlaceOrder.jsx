import React from 'react'
import "./PlaceOrder.css"

const PlaceOrder = () => {
    return (
    <div className='Content2'>
        <p className="Content2-heading">How to <span className='orange'>Place Your Order ?</span></p>
        <p className="Content2-subheading">Simply <span className="green">fill the below </span>order form.</p>
        <div className='steps'>
            <p className='step1'><span className='green bold'>Step 1.</span> Choose your <span className='blue'>Art Type</span> And <span className='blue'>Size</span></p>
            <p className='step1'><span className='green bold'>Step 2.</span> Upload your <span className='blue'>Photo</span> and <span className='blue'>Shipping Address</span></p>
            <p className='step1'><span className="green bold">Step 3.</span> Click on <span className='orange'>Order Now</span> button, Make your payment & <span className='bold'>Confirm</span> the Order.</p>
            <p className='step1'>And <span className='green bold'>Relax :</span> Your Masterpiece 100% Handmade sketch will be delivered to you in <span className='bold'>5-7 Business Days.</span> No hidden cost.<span className='bold'> Delivery is Free,</span> , all across the India. Contact us on <span className='green'>WhatsApp</span> for <span className='bold'>3 days</span> fast delivery/any suggestion.</p>
        </div>
    </div>
    )
}

export default PlaceOrder
