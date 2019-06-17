import React from 'react';
import Row from './Row'

export default function index() {
  const renderRow = () => {
    const data = [];

    for (let i = 0; i < 78; i++) {
      data.push(<Row key={i} />);
    }

    return data;
  }

  return (
    <React.Fragment>
      <div className="row heading">
        <h5>Owner</h5>
        <h5>Manager</h5>
        <h5>Lion</h5>
        <h5 className="min-mid">Job</h5>
        <h5 className="large">Notes</h5>
        <h5 className="mid">Interview When</h5>
        <h5>Stage</h5>
        <h5>Changed</h5>
        <h5>Lost</h5>
      </div>
      {renderRow().map(data => data)}
    </React.Fragment>
  )
}
