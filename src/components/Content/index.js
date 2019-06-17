import React, { useState } from 'react'

import columns from '../../assets/icons/columns.svg';
import list from '../../assets/icons/list.svg';
import grid from '../../assets/icons/grid.svg';
import './index.scss';
import Table from '../Table/';
import Button from '../Button';
import Grid from '../Grid';

export default function Content() {
  const [view, setView] = useState('table');

  return (
    <main>
      <div className="card">
        <p>24 Introductions found!</p>
        <div className="right">
          <img src={list} alt="" onClick={() => setView('table')}/>
          <img src={grid} alt="" onClick={() => setView('grid')} />
          <img src={columns} alt=""/>
          <Button inverse>Compare</Button>
        </div>
      </div>

      {view === 'table' && <Table />}
      {view === 'grid' && <Grid />}
    </main>
  )
}
