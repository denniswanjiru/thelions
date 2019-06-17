import React from 'react'
import './index.scss'

export default function Button({ inverse, children, handleClick }) {
  return (
    <button onClick={handleClick} className={inverse ? 'inverse' : ''}>
      { children }
    </button>
  )
}
