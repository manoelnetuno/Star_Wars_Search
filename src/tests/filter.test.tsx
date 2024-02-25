import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PlanetTable from '../components/PlanetTable';

describe('PlanetTable component', () => {
  it('renders PlanetzSearch inside the div', () => {
    const { getByTestId } = render(<PlanetTable />);
    const planetSearchComponent = getByTestId('planetz-search');
    const tableElement = getByTestId('planet-table');

    // Check if the PlanetzSearch component is inside the div
    expect(planetSearchComponent).toBeInTheDocument();
    expect(planetSearchComponent).toBeDefined();

    // Check if the table element is inside the div
    expect(tableElement).toBeInTheDocument();
    expect(tableElement).toBeDefined();
    // Check if filteredPlanetz is defined before checking its length
    const filteredPlanetz = getByTestId('filtered-planetz');
    if (filteredPlanetz) {
      expect(filteredPlanetz.children.length).toBeGreaterThan(0);
    }


  });
});