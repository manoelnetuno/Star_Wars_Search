import { useEffect, useState } from 'react';
import { PlanetzType } from '../util/PlanetContext';

export default function PlanetTable() {
  const [planets, setPlanets] = useState([] as any as PlanetzType[]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://swapi.dev/api/planets/')
      .then((res) => res.json())
      .then((data) => {
        setPlanets(data.results);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <span>Loading...</span>;
  }

  return (
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
        {planets.map((planet) => (
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
            <td>{planet.films}</td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.url}</td>
          </tr>
        ))}
      </tbody>

    </table>
  );
}
