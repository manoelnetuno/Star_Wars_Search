import { useContext, useState } from 'react';
import PlanetzContext from '../util/PlanetContext';
import PlanetzSearch from './SearchFilter';
import TableHeader from './tableHeader';
import SelectFilter from './SelectFilter';
import '../table.css';

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
          <table className="styleTable" data-testid="table">
            <TableHeader data-testid="table-header" />
            <tbody className="style-table">
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
        <table className="style-table" data-testid="table">
          <TableHeader data-testid="table-header" />
          <tbody>
            {Planetzlistz.map((planet) => (
              <tr className="style-table" key={ planet.name }>
                <td className="style-table">{planet.name}</td>
                <td className="style-table">{planet.climate}</td>
                <td className="style-table">{planet.terrain}</td>
                <td className="style-table">{planet.gravity}</td>
                <td className="style-table">{planet.diameter}</td>
                <td className="style-table">{planet.population}</td>
                <td className="style-table">{planet.orbital_period}</td>
                <td className="style-table">{planet.rotation_period}</td>
                <td className="style-table">{planet.surface_water}</td>
                <td className="style-table">
                  {planet.films.map((film:any) => (
                    <p key={ film }>{film}</p>
                  ))}
                </td>
                <td className="style-table">{planet.created}</td>
                <td className="style-table">{planet.edited}</td>
                <td className="style-table">{planet.url}</td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}
