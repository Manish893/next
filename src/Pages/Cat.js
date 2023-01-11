import React from 'react'
import { useParams } from 'react-router-dom'
import Postdata from '../Data/Postdata';

export default function Cat() {
    let {id}=useParams();
    let display=Postdata.find((a)=>(a.id==id))
  return (
    <div>
        <img src={display.img}/>
      <h1>{display.title}</h1>
      <p>{display.desc}</p>
    </div>
  )
}
