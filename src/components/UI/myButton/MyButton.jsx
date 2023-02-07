import React from 'react'
import  "./MyButton.scss"

export default function MyButton({children,...props}) {
  return (
    <button {...props} className="custom-btn btn-3"><span>{children}</span></button>
  )
}