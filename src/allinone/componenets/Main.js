import React from "react";
import data from "../data";
//
export default function Main(props) {
    //
    const [isTrue, setIsTrue] = React.useState(false)
    const [showText, setShowText] = React.useState({
        output: "text output!"
    })
    const [index, setIndex] = React.useState(0)
    //

    const checkLast = () =>{
        if (index === 6 ){
            setIndex(0)
        } else if (index === -1)
            setIndex(5)
    }
    checkLast()
    //
    const nextBtns = () => {
        // console.log('clicked')
        setIndex((prevIndex)=>{
            let number =  prevIndex + 1;
            console.log(number)
            return number
        })
    }
    //
    const prevBtns = () => {
        setIndex((prevIndex)=>{
            let number = prevIndex - 1;
            console.log(number)

            return number
        })
    }
    const toggle = () => {
        setIsTrue((prevIsTrue)=>{
            return !prevIsTrue
        })
    }
    //
    const displayText = (e) => {
        const {name, value} = e.target
        setShowText((prevText)=>({
            ...prevText,
            [name]:value
        }))
    }
    //
    const showDisplay2 = props.datas2.map((data2)=>{
        return (
            <div className="button-practice">
                {data2.name}
                {data2.age}
                {data2.birthday}
                <img src={data2.img}/>
                <div>
                    <button onClick={prevBtns}>prev</button>
                    <button onClick={nextBtns}>next</button>

                </div>
            </div>
        )
    })
    //
    return(
        <div className="card-container">
            {/* show info from objects practice*/}
            <img src={isTrue? props.img: ""}/>
            <p>{isTrue && props.name}</p>
            <p>{isTrue && props.job}</p>
            <p>{isTrue && props.description}</p>
            <button onClick={toggle}>{isTrue?"hide":"show"}</button>
            {/* input  to output text practice*/}
            <input 
                type="text" 
                placeholder="text input"
                onChange={displayText}
                value={showText.output}
                name="output"
                />
            <p>{showText.output}</p>

            {showDisplay2[index]}
        </div>
    )
}