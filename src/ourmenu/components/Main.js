import React from "react";

export default function Main (props) {
    return (
            <div className="food">
                <div className="img-container">
                    <img src={props.img}/>
                </div>
                <div className="info-container">
                    <p>{props.name}</p>
                    <br></br>
                    <p>{props.price}</p>
                    <br></br>

                    <p>{props.description}</p>
                </div>
            </div>
    )
}