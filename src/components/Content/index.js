import React from 'react'

import search from '../../assets/icons/search.svg';
import headphones from '../../assets/icons/headphones.svg';
import folder from '../../assets/icons/folder.svg';
import user from '../../assets/icons/user.svg';
import columns from '../../assets/icons/columns.svg';
import playlist from '../../assets/icons/play-circle.svg';
import list from '../../assets/icons/list.svg';
import grid from '../../assets/icons/grid.svg';
import './index.scss';
import Row from './Row';

export default function Content() {
  const renderRow = () => {
    const data = [];

    for(let i = 0; i < 25; i++) {
      data.push(<Row />);
    }

    return data;
  }

  return (
    <main>
      <div className="card">
        <p>24 Introductions found!</p>
        <div className="right">
          <img src={list} clasName="icon" alt=""/>
          <img src={grid} clasName="icon" alt=""/>
          <img src={columns} alt=""/>
        </div>
      </div>

      <div className="row heading">
        <h5>Owner</h5>
        <h5>Manager</h5>
        <h5>Lion</h5>
        <h5>Job</h5>
        <h5 className="large">Notes</h5>
        <h5 className="mid">Interview When</h5>
        <h5>Stage</h5>
        <h5>Changed</h5>
        <h5>Lost</h5>
      </div>
      {renderRow().map(data => data)}
    </main>
  )
}
