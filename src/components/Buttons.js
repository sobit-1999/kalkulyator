import React, { useEffect, useState } from 'react'
import {  Button } from '@mui/material'


export default function Buttons({buttonOne, setvalue, value}) {

    const [style, setstyle] = useState({
        border: '2px solid black', 
        width: 50, 
        height: 50,
        transition: '1s', 
        fontSize: 25,    
        color: 'black',
        '&:hover': {
            cursor: 'pointer',
            transform: 'scale(1.1)',
            backgroundColor: 'lightblue',
          },
    })

useEffect(() => {

  if (buttonOne==='AC') {
      setstyle({
        ...style, 
        background: 'red', 
        transform: 'scale(1.1)',
        '&:hover': {
        backgroundColor: 'red',
        transform: 'scale(1.2)',
       },
    })
  }
  if (buttonOne==='=') {
    setstyle({
        ...style, 
        background: 'cornflowerblue', 
        transform: 'scale(1.1)',
        '&:hover': {
        backgroundColor: 'cornflowerblue',
        transform: 'scale(1.2)',
       },
    })
}

if (buttonOne==='/'||buttonOne==='F'||buttonOne==='-'||buttonOne==='+'||buttonOne==='*') {
    setstyle({
        ...style, 
        background: 'khaki', 
        '&:hover': {
        transform: 'scale(1.1)',
        backgroundColor: 'khaki',
       },
    })
}
}, [])
const arrButton=['+', '-', '*', '/']
const buttonValue = () => {
    
    if (buttonOne!=='=') {
        setvalue(value+buttonOne)

    } 

    // for (let i = 0; i < arrButton.length; i++) {
    //     if (value[value.length-1]===arrButton[i]&buttonOne===arrButton[i]||buttonOne===arrButton[i+1]||buttonOne===arrButton[i+2]||buttonOne===arrButton[i+3]){
    //         setvalue(value.slice(0, value.length-1)+buttonOne)
    //         console.log('button', value.slice(0, value.length-1)+buttonOne+'6');
    //         console.log('value',value[value.length-1]);
    //         console.log(value[value.length-1]===arrButton[i]);
    //     }

    // }
        
    if (buttonOne==='=') {
        for (let i = 0; i < value.length; i++) {
            if (value[i]==='F'){
                setvalue((eval(value.slice(i+1))*eval(value.slice(0,i))/100).toString())
            }  
            if ( value[i]==='+'& value[i+1]==='/'){
                //    arrButton.pop(buttonOne)
                   console.log(value[i], value[i+1]);
                }
        }
            setvalue((eval(value)).toString())          
        }

        if (buttonOne==='<') {
            setvalue(value.slice(0, -1))
        }
        if (buttonOne==='AC') {
            setvalue('')
        }

    }

  return (
         <Button 
            onClick={buttonValue}
            sx={style} 
         >
          {buttonOne}
        </Button>
  )
}
