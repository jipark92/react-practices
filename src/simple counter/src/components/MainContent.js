import React from "react";

export default function MainContent() {

    const [count, setCount] = React.useState(0)

    const increase = () => {
        return (
            setCount((prevCount) => prevCount + 1)
        )
    }

    const decrease = () => {
        return (
            setCount((prevCount) => prevCount - 1)
        )
    }

    const reset = () => {
        return (
            setCount((prevCount) => prevCount = 0)
        )
    }

    return(
        <div className="counter">
            <h1>Simple Counter</h1>
            <div className="btns-container">
                <button onClick={decrease}>-</button>
                <span>{count}</span>
                <button onClick={increase}>+</button>
            </div>
            <button className="reset-btn" onClick={reset}>Reset</button>
        </div>
        
    )
}