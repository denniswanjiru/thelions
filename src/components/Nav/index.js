import React from 'react'

import menu from '../../assets/icons/menu.svg';
import bell from '../../assets/icons/bell.svg';
import search from '../../assets/icons/search.svg';
import './index.scss'

export default function Nav({ handleExpandSidebar }) {
  return (
    <header>
      <nav>
        <img src={menu} className="icon" alt="" onClick={handleExpandSidebar} />
        <div className="search-input">
          <img src={search} alt="" />
          <input className="search" placeholder="Search"/>
        </div>

        <div className="account">
          <img src={bell} className="notify" alt="" />
          <img src="https://lh5.googleusercontent.com/-V6XNf3iCNvo/AAAAAAAAAAI/AAAAAAAAAAc/8GGsfiPhTlc/photo.jpg?sz=50" alt="Avatar" className="avatar" />
        </div>
      </nav>
    </header>
  )
}
