import React, {useState} from "react";

export default function Tabs(props) {
    return (
        <div className="tabs-container">
            <button onClick={props.all}>ALL</button>
            <button onClick={props.breakfast}>Breakfast</button>
            <button onClick={props.lunch}>Lunch</button>
            <button onClick={props.dinner}>Dinner</button>
            <button onClick={props.dessert}>Dessert</button>
        </div>
    )
}