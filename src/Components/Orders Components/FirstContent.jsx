import React from "react"
import "../Orders Components/FirstContent.css"
let FirstContent = () => {
    return (
        <div className="Content">
            <h1 className="title">Order Portrait Sketch/Painting Online</h1>
            <p className="desc">Turn any Photo Into 100% Handmade sketch</p>
            <p className="firstpara"><span className="italics bold">Convert your photo</span> into <span className="bold">100% Handmade</span> Sketch/Painting with <span className="bold">Free home delivery</span> all over the India, Starting just from <span className="strikeoff">Rs.2000/-</span> <span className="price">Rs1199/-</span> only</p>
            <ul className="bullet-points">
                <li className="secondpara">
                    A <span className="bold">perfect, unique and Memorable gift</span> for your <span className="bold">Loved-ones,</span> surprise him/her with his/her sketch/Portrait Painting.
                </li>
                <li className="secondpara italics">
                    Decor Your Home with Personalize Handmade sketch/portrait painting done by Professional Artist.
                </li>
                <li className="secondpara">
                    Freeze <span className="bold">Your Special Moments for life time</span> as a sketch/Painting.
                </li>
                <li className="secondpara">
                    Unique And <span className="bold">Trending</span> Way to present a <span className="bold">Gift.</span>
                </li >
            </ul>
        </div>
    )
}

export default FirstContent