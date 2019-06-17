import React from 'react'

import menu from '../../assets/icons/menu.svg';
import search from '../../assets/icons/search.svg';
import './index.scss'
import Button from '../Button';

export default function Nav({ handleClose, handleExpandSidebar }) {
  return (
    <header>
      <nav>
        <img src={menu} className="icon" alt="" onClick={handleExpandSidebar} />
        <div className="search-input">
          <img src={search} alt="" />
          <input className="search" placeholder="Search"/>
        </div>

        <div className="right">
          <Button handleClick={handleClose}>Advanced</Button>
          <img src="https://lh5.googleusercontent.com/-V6XNf3iCNvo/AAAAAAAAAAI/AAAAAAAAAAc/8GGsfiPhTlc/photo.jpg?sz=50" alt="Avatar" className="avatar" />
        </div>
      </nav>
    </header>
  )
}
