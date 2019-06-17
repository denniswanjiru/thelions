import React from 'react'

import x from '../../assets/icons/x.svg';
import './index.scss'

export default function AdvancedSidebar({ show, handleClose }) {
  return (
    <div className={show ? 'advanced' : 'advanced hidden'}>
      <div className="title">
        <div onClick={handleClose} className="close">
          <img src={x} alt="" />
        </div>
        <h1>Advanced</h1>
      </div>
    </div>
  )
}
