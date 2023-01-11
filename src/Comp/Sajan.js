import React from 'react'

export default function Sajan(props) {
  return (
    <div className='col-lg-4 box'>
        <i className={props.icon}></i>
       <h1>{props.title}</h1>
        <p>{props.desc}</p>
    </div>
  )
}
