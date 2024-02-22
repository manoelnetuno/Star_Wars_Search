import { useContext, useState } from 'react';
import PlanetzContext from '../util/PlanetContext';

export default function PlanetTable() {
  const { Planetzlistz } = useContext(PlanetzContext);
  const [searchText, setSearchText] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };
  const filteredPlanetz = Planetzlistz.filter((planet) => {
    return planet.name.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        placeholder="Search Planets..."
        value={ searchText }
        onChange={ handleSearch }
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Climate</th>
            <th>Terrain</th>
            <th>Gravity</th>
            <th>Diameter</th>
            <th>Population</th>
            <th>Orbital Period</th>
            <th>Rotation Period</th>
            <th>Surface Water</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>Url</th>
          </tr>
        </thead>
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
  );
}
