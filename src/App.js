import React from 'react';

import SideHeader from './components/SideHeader';
import WorkSpace from './components/WorkSpaces';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <SideHeader />
      <WorkSpace />
      <Dashboard />
    </div>
  );
}

export default App;
