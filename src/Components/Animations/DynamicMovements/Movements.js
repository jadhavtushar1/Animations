import React from 'react'
import './Movements.css'
import mario from '../../../Assets/mario.png'
import luigi from '../../../Assets/luigi.png'
import cloud from '../../../Assets/cloud.png'
function Movements() {
  return (
    <div className='parent-movements'>
        <div className='sky'>
            <img src={cloud} className='cloud' alt='cloude'/>
            <img src={cloud} className='cloud' alt='cloude'/>
            <img src={cloud} className='cloud' alt='cloude'/>
        </div>
        <div className='garden'></div>
        <div className='road'>
            <img src={mario} className='mario' alt='mario'></img>
            <hr className='line'></hr>
            <img src={luigi} className='luigi' alt='luigi'></img>
        </div>
    </div>
  )
}

export default Movements