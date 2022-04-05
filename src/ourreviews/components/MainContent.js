import React from 'react'
import ReviewCard from './ReviewCard'
import datas from '../data'



export default function MainContent () {
    const [ simpsons, setSimpsons] = React.useState(0)

    const {id, img, name, job, description} = datas[simpsons]

    const checkNumber = (number) => {
        if ( number > datas.length -1 ) {
            return 0
        } else if ( number < 0){
            return datas.length -1
        } else {
            return number
        }
    }

    const increase = () => {
        console.log('clicked')
        setSimpsons((simpson)=> {
            let whichSimpson = simpson + 1
            return checkNumber(whichSimpson)
        })
    }

    const decrease = () => {
        console.log('clicked')
        setSimpsons((simpson)=> {
            let whichSimpson = simpson - 1
            return checkNumber(whichSimpson)
        })
    }

    

    const random = () => {
        console.log('clicked random')

        let randomNumber = Math.ceil(Math.random()*3)
        console.log(randomNumber)
        setSimpsons (randomNumber)
    }

    return (
        <div className="card-container">
            <ReviewCard 
                key={id}
                img={img}
                name={name}
                job={job}
                description={description}
            />
            <div className="button-container">
                <button className="prev-btn" onClick={decrease}>PREV</button>
                <button className="random-btn" onClick={random}> Random</button>
                <button className="next-btn" onClick={increase}>NEXT</button>
            </div>
        </div>
    )
}