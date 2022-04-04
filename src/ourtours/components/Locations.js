import React from "react";
import datas from '../data'



export default function Locations() {

    //function
    const showData = datas.map((data)=>{
        return (
            <div className="img-container">
                <img src={data.img} />
                <div className="location-price-container">
                    <h3>{data.tours}</h3>
                    <h3>{data.price}</h3>
                </div>
                <div className="description-container">
                    <p>{data.description}</p>
                </div>
                <div className="btns-container">
                    <button>Not Intereseted</button>
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