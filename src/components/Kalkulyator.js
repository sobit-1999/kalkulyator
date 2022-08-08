import React, { useState } from 'react'
import Buttons from './Buttons'

export default function Kalkulyator() {
    const button = [
        'AC', '<', 'F', '/', 
        '7', '8', '9', '*', 
        '4', '5', '6', '-', 
        '1', '2', '3', '+', 
        '(', '0', ')', '='
    ]
    const [value, setvalue] = useState('')
    return (
    <div className='kalkulyator'>
        <hr/>
        <input 
        className='input'
        value={value}
        onChange={(e) => setvalue(e.target.value)}
        />
        <hr/>
        <div className='card'>
        {button.map((item, i ) => {return <Buttons key={i} buttonOne = {item} setvalue={setvalue} value={value} />
        })}</div>
     <hr/>
    </div>
  )
}
