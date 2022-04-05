import React from "react";


export default function Main (props) {
    return (
            <div className="food">
                <img src={props.img}/>
                <p>{props.name}</p>
                <p>{props.price}</p>
                <p>{props.description}</p>
            </div>
    )
}