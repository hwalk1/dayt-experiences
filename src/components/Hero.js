import React from 'react'
import image from "../photo-grid.png"

export default function Hero() {
  return (
    <div className='hero--main'>
      <img src={image} alt='A number of experiences' className='hero--img'/>
      <div className='hero--content'>
        <h1>Online Experiences</h1>
        <p>Explore unique interactive activities discovered by locals without leaving home.</p>
      </div>
    </div>
  )

}
