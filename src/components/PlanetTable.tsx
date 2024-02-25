import { useContext, useState } from 'react';
import PlanetzContext from '../util/PlanetContext';
import PlanetzSearch from './SearchFilter';
import TableHeader from './tableHeader';
import SelectFilter from './SelectFilter';

export default function PlanetTable() {
  const { Planetzlistz } = useContext(PlanetzContext);
  const [filteredPlanetz, setFilteredPlanetz] = useState(Planetzlistz);

  const handleFilter = (searchText: string) => {
    const filtered = Planetzlistz.filter((planet) => {
      return planet.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilteredPlanetz(filtered);
    console.log(filteredPlanetz);
  };
  if (filteredPlanetz.length > 0) {
    return (
      <div data-testid="planet-table">
        <PlanetzSearch data-testid="planetz-search" onfilter={ handleFilter } />
        <SelectFilter data-testid="select-filter" />
        <div data-testid="filtered-planetz">
          <table data-testid="table">
            <TableHeader data-testid="table-header" />
            <tbody>
              {filteredPlanetz.map((planet) => (
                <tr key={ planet.name }>
                  <td>{planet.name}</td>
                  <td>{planet.climate}</td>
                  <td>{planet.terrain}</td>
                  <td>{planet.gravity}</td>
                  <td>{planet.diameter}</td>
                  <td>{planet.population}</td>
                  <td>{planet.orbital_period}</td>
                  <td>{planet.rotation_period}</td>
                  <td>{planet.surface_water}</td>
                  <td>
                    {planet.films.map((film:any) => (
                      <p key={ film }>{film}</p>
                    ))}
                  </td>
                  <td>{planet.created}</td>
                  <td>{planet.edited}</td>
                  <td>{planet.url}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  return (
    <div data-testid="planet-table">
      <PlanetzSearch data-testid="planetz-search" onfilter={ handleFilter } />
      <SelectFilter data-testid="select-filter" />
      <div data-testid="filtered-planetz">
        <table data-testid="table">
          <TableHeader data-testid="table-header" />
          <tbody>
            {Planetzlistz.map((planet) => (
              <tr key={ planet.name }>
                <td>{planet.name}</td>
                <td>{planet.climate}</td>
                <td>{planet.terrain}</td>
                <td>{planet.gravity}</td>
                <td>{planet.diameter}</td>
                <td>{planet.population}</td>
                <td>{planet.orbital_period}</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.surface_water}</td>
                <td>
                  {planet.films.map((film:any) => (
                    <p key={ film }>{film}</p>
                  ))}
                </td>
                <td>{planet.created}</td>
                <td>{planet.edited}</td>
                <td>{planet.url}</td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}
