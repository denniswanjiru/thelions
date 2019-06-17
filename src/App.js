import React, { useState } from 'react';
import Nav from './components/Nav';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import AdvancedSidebar from './components/AdvancedSidebar';

const App = () => {
  const [expandSidebar, setExpandSidebar] = useState(true);
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <div className={`${!expandSidebar ? 'expand' : ''} page-wrapper`}>
      <Nav
        handleExpandSidebar={() => setExpandSidebar(!expandSidebar)}
        handleClose={() => setShowAdvanced(!showAdvanced)}
      />
      <Content />
      <Sidebar expandSidebar={expandSidebar} />
      <AdvancedSidebar show={showAdvanced} handleClose={() => setShowAdvanced(!showAdvanced)} />
    </div>
  );
}

export default App;
