import React from "react";

export default function Image_display(props) {
    return (
            <div className='gallery-container-img'>
                <img className="drawing-images" src={props.image} alt="Drawing Images" />
            </div>
    )
}
