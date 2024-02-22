import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import PlanetzProvider from './util/PlanetzProvider';

ReactDOM
  .createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <PlanetzProvider>
      <App />
    </PlanetzProvider>,
  );
