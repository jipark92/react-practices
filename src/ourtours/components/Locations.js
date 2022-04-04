import React from "react";
import datas from '../data'

export default function Locations() {

    const [tours , setTours] = React.useState(datas)


    const removeContent = () => {
        console.log('clicked')
        console.log(tours)
        setTours (tours.splice(1))
    }

    //function
    const showData = tours.map((tour)=>{
        return (
            <div className="img-container">
                <img src={tour.img} />
                <div className="location-price-container">
                    <h3>{tour.tours}</h3>
                    <h3>{tour.price}</h3>
                </div>
                <div className="description-container">
                    <p>{tour.description}</p>
                </div>
                <div className="btns-container">
                    <button className="remove-btn" onClick={removeContent}>Not Intereseted</button>
                </div>
            </div>
        )
    })
    
    //render
    return (
        <div className="content">
            {showData}
        </div>
    )
}