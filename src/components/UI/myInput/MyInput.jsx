import React from 'react'
import  "./MyInput.scss"

export default function MyInput(props) {
  return (
    <input className='myInput'  {...props}/>
  )
}