import React, { useState } from "react";
import datas from "../data"

export default function MainContent () {

    const [number, setNumber] = useState(datas)

    console.log(number)

    const people = number.map((num)=>{
        return (
            <div className="info-container">
                <div className="img-container">
                    <img src={num.img}/>
                </div>
                <div className="info">
                    <p><b>{num.name}</b></p>
                    <p><i>{num.age}</i></p>
                    <p>{num.birthday}</p>
                </div>
            </div>
        )
    })



    const clearAllBtns = () => {
        console.log('clicked')
        setNumber([])
    }

    return (
        <div className="card-container"> 
            <header className="title-container">
                <h1><span className="noti-number">{people.length} </span>birthdays today</h1>
            </header>

            <div className="people-container">
                {people}
            </div>

            <div className="btns-container">
                <button onClick={clearAllBtns}>Clear All</button>
            </div>
        </div>
    )
}