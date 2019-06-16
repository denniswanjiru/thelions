import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Content from './components/Content';
import Sidebar from './components/Sidebar';

const App = () => {
  const [expandSidebar, setExpandSidebar] = useState(true);

  useEffect(() => {
    console.log(expandSidebar);
  }, [expandSidebar])

  return (
    <div className={`${!expandSidebar ? 'expand' : ''} page-wrapper`}>
      <Nav handleExpandSidebar={() => setExpandSidebar(!expandSidebar)} />
      <Content />
      <Sidebar expandSidebar={expandSidebar} />
    </div>
  );
}

export default App;
