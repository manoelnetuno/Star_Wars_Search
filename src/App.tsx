import React from 'react';
import './App.css';
import PlanetTable from './components/PlanetTable';
import PlanetzProvider from './util/PlanetzProvider';

function App() {
  return (
    <div className="app">
      <h1>Star Wars Planets Searching</h1>
      <PlanetzProvider>
        <PlanetTable />
      </PlanetzProvider>
    </div>
  );
}

export default App;
