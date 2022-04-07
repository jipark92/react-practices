import React from 'react'
import Main from './componenets/Main'
import datas from './data'
import datas2 from './data2'
//
export default function App () {
  //
  const newDatas = datas.map((data)=>{
    return (
      <Main 
        key={data.id}
        id={data.id}
        img={data.img}
        name={data.name}
        job={data.job}
        description={data.description}
        datas={datas}
        datas2={datas2}
      />
    )
  })
  //
  return (
    <div className="container">
      {newDatas}
    </div>
  )
}