import React from 'react'

import columns from '../../assets/icons/columns.svg';
import list from '../../assets/icons/list.svg';
import grid from '../../assets/icons/grid.svg';
import './index.scss';
import Row from './Row';
import Button from '../Button';

export default function Content() {
  const renderRow = () => {
    const data = [];

    for(let i = 0; i < 25; i++) {
      data.push(<Row key={i} />);
    }

    return data;
  }

  return (
    <main>
      <div className="card">
        <p>24 Introductions found!</p>
        <div className="right">
          <img src={list} alt=""/>
          <img src={grid} alt=""/>
          <img src={columns} alt=""/>
          <Button inverse>Compare</Button>
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
