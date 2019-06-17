import React from 'react'

export default function GridCard() {
  return (
    <div className="card">
      <div className="left">
        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" className="avatar"/>

        <div className="details">
          <h5>John Doe</h5>
          <p>Software Engineer</p>
          <p>at TheLions</p>
        </div>

        <div className="links">
          <img src="http://www.theredbrickroad.com/wp-content/uploads/2017/05/linkedin-logo-copy.png" alt="linkedin" className="icon" />
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/83/Salesforce_logo.svg/1200px-Salesforce_logo.svg.png" alt="salesforce" className="icon"/>
        </div>
      </div>
      <div className="right">
        <div className="select">
          <select name="Stage" id="">
            <option>Approval</option>
            <option>Pending</option>
            <option>Screen</option>
            <option>Introduction</option>
            <option>Meeting</option>
            <option>Hire</option>
            <option>Lost</option>
          </select>
        </div>

        <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, necessitatibus provident dolor consequuntur voluptate velit</p>

        <div className="info">
          <div>
            <h5>Owner</h5>
            <p>Ben Jones</p>
          </div>
          <div>
            <h5>Interview</h5>
            <p>Tuesday, May 27th, 2019</p>
          </div>
          <div>
            <h5>Manager</h5>
            <p>Nick Yeng</p>
          </div>
          <div>
            <h5>Changed</h5>
            <p>27/5/2019</p>
          </div>
        </div>
      </div>
    </div>
  )
}
