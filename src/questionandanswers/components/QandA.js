import React from "react";

export default function Qna (props) {

    const [isTrue, setIsTrue] = React.useState(false)

    const toggle = () =>{
        setIsTrue((prevIsTrue)=> {
            return !prevIsTrue
        })
    }

    return (
        <div className="qstn-btn-container">
            <div>
                <p><b>Q: {props.question}</b></p>
                <br></br>
                <p>A: {isTrue && props.answer}</p>
            </div>
            <div>
                <button onClick={toggle}>{isTrue?"hide":"show"}</button>
            </div>
        </div>
        
    )
}