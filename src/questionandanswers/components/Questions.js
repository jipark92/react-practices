import React from 'react' 
import datas from '../data'
import Qna from './QandA'

export default function Questions () {

    const [info, setInfo] = React.useState(datas)

    const showInfo = info.map((prevInfo)=>{
        return(
            <Qna 
                key={prevInfo.id}
                question={prevInfo.question}
                answer={prevInfo.answer}
            />
        )
    })

    return (
        <div className="questions-container"> 
            <div className="q-a">
                {showInfo}
            </div>
        </div>
    )
}