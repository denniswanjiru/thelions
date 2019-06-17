import React, { useEffect } from 'react'

import home from '../../assets/icons/home.svg';
import activity from '../../assets/icons/activity.svg';
import anchor from '../../assets/icons/anchor.svg';
import users from '../../assets/icons/users.svg';
import mix from '../../assets/icons/mix.svg';
import cast from '../../assets/icons/cast.svg';
import briefcase from '../../assets/icons/briefcase.svg';
import chevronRight from '../../assets/icons/chevron-right.svg';
import './index.scss'

export default function Sidebar({ expandSidebar }) {
  useEffect(() => {
    isActive();
  }, [])

  const isActive = () => {
    // Get all buttons with class="btn" inside the container
    const links = document.getElementsByClassName("link");

    // Loop through the buttons and add the active class to the current/clicked button
    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener("click", () => {
        const current = document.getElementsByClassName("active");
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
        <li className="link active">
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
              <ul className="sub-menu">
                <li>
                  <strong>in Pipeline 🚀</strong>
                  <p>Your Lions with active Introductions</p>
                </li>
                <li>
                  <strong>to PITCH ⚾</strong>
                  <p>Your Lions Profiled as “Active” or “Reactive”</p>
                </li>
                <li>
                  <strong>to Profile 💪</strong>
                  <p>Your Lions Hunting but NOT Profiled</p>
                </li>
                <li>
                  <strong>to Hunt ⛏</strong>
                  <p>Your Lion Prospects to Hunt ASAFP</p>
                </li>
                <li>
                  <strong>we Placed 🌈</strong>
                  <p>Your Lions with Friends to Hunt #Winning</p>
                </li>
                <li>
                  <strong>to Poach 🐘👀</strong>
                  <p>All owned Lions with 5+ months ZERO Activity</p>
                </li>
                <li>
                  <strong>at Pasture 🐑</strong>
                  <p>All unowned Lions ready for you to CLAIM</p>
                </li>
                <li>
                  <strong>to Patrol 🚔</strong>
                  <p>Suspect Lions LESS likely worth Claiming</p>
                </li>
              </ul>
            </li>
            <li>
              <p>With Role</p>
              <ul className="sub-menu">
                <li>
                  <strong>Sales Development 🍭</strong>
                  <p>Junior Lions who Hunt but DON’T Close</p>
                </li>
                <li>
                  <strong>Inside AE 📟</strong>
                  <p>Junior Lions who Close over the phone</p>
                </li>
                <li>
                  <strong>Hybrid AE 🏆</strong>
                  <p>Midlevel Lions who Close some deals in Field</p>
                </li>
                <li>
                  <strong>Sales Engineers 🐬</strong>
                  <p>Technical Lions who help Field AEs on BIG deals</p>
                </li>
                <li>
                  <strong>Operations ⛑</strong>
                  <p>Smart Lions who build management systems</p>
                </li>
                <li>
                  <strong>to Poach 🐘👀</strong>
                  <p>All owned Lions with 5+ months ZERO Activity</p>
                </li>
                <li>
                  <strong>Success 💨💣</strong>
                  <p>“Farmer” Lions who support existing customers</p>
                </li>
                <li>
                  <strong>Partnerships</strong>
                  <p>Strategic Lions who negotiate business Partnerships</p>
                </li>
              </ul>
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
