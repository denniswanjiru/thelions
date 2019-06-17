import React from 'react'
import GridCard from './GridCard';
import './index.scss';

export default function Grid() {
  const renderCard = () => {
    const data = [];

    for (let i = 0; i < 25; i++) {
      data.push(<GridCard key={i} />);
    }

    return data;
  }

  return (
    <section className="grid">
      {renderCard().map(data => data)}
    </section>
  )
}
