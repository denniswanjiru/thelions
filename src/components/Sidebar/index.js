import React, { useEffect } from 'react'

import home from '../../assets/icons/home.svg';
import activity from '../../assets/icons/activity.svg';
import anchor from '../../assets/icons/anchor.svg';
import users from '../../assets/icons/users.svg';
import mix from '../../assets/icons/mix.svg';
import playlist from '../../assets/icons/play-circle.svg';
import cast from '../../assets/icons/cast.svg';
import briefcase from '../../assets/icons/briefcase.svg';
import chevronRight from '../../assets/icons/chevron-right.svg';
import './index.scss'

export default function Sidebar({ expandSidebar }) {
  useEffect(() => {
    isActive();
  }, [])

  const isActive = () => {
    const linksContainer = document.getElementsByClassName("links");

    // Get all buttons with class="btn" inside the container
    const links = document.getElementsByClassName("link");

    // Loop through the buttons and add the active class to the current/clicked button
    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener("click", () => {
        const current = document.getElementsByClassName("active");
        console.log(current.length > 0, 'CURRENT')
        if(current.length > 0) current[0].className = current[0].className.replace(" active", "");
        links[i].className += " active";
      });
    }
  }
  return (
    <aside className={expandSidebar ? '' : 'shrink' }>
      <div className="brand">
        <img src="https://media.glassdoor.com/sql/350600/the-lions-squarelogo-1416875946875.png" alt="logo"/>
        {expandSidebar && <h1>TheLions</h1>}
      </div>
      <ul className="links">
        <li className="link">
          <div>
            <img src={home} alt="" />
            {expandSidebar && <p>Home</p>}
          </div>
        </li>

        <li className="link">
          <div>
            <img src={users} alt="" />
            {expandSidebar && <p>Lions</p>}
            {expandSidebar && <img src={chevronRight} alt="" />}
          </div>

          {expandSidebar && <ul className="nolist">
            <li>
              <p>In Pipeline</p>
            </li>
            <li>
              <p>With Role</p>
            </li>
            <li>
              <p>Selling Into</p>
            </li>
            <li>
              <p>In Geography</p>
            </li>
          </ul>}
        </li>

        <li className="link">
          <div>
            <img src={briefcase} alt="" />
            {expandSidebar && <p>Jobs</p>}
            {expandSidebar && <img src={chevronRight} alt="" />}
          </div>

          {expandSidebar && <ul className="nolist">
            <li>
              <p>To Pitch</p>
            </li>
            <li>
              <p>Geography</p>
            </li>
          </ul>}
        </li>

        <li className="link">
          <div>
            <img src={cast} alt="" />
            {expandSidebar && <p>Introductions</p>}
            {expandSidebar && <img src={chevronRight} alt="" />}
          </div>

          {expandSidebar && <ul className="nolist">
            <li>
              <p>Of My Lions</p>
            </li>
            <li>
              <p>Stage</p>
            </li>
            <li>
              <p>Geography</p>
            </li>
          </ul>}
        </li>

        <li className="link">
          <div>
            <img src={anchor} alt="" />
            {expandSidebar && <p>Leaders</p>}
          </div>
        </li>

        <li className="link">
          <div>
            <img src={mix} alt="" />
            {expandSidebar && <p>Accounts</p>}
          </div>
        </li>

        <li className="link">
          <div>
            <img src={activity} alt="" />
            {expandSidebar && <p>Analytics</p>}
          </div>
        </li>
      </ul>
    </aside>
  )
}
