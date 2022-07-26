import React from 'react'
import Picture from '../katie-zaferes.png'
import Star from "../star.png"

export default function Card() {
  return (
    <div className='card--main'>
      <img src={Picture} alt='Profile of Katie' />
      <div className='card--review'>
        <img src={Star} alt='rating star' className='card--star'/>
        <p>5.0</p>
        <p>(6).USA</p>
      </div>
      <p className='card-info'>Life lessons with Katie Zaferes</p>
      <p><st>From $136 </st>/ person</p>
    </div>
  )
}
