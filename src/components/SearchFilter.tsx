import { useState, useContext } from 'react';
import PlanetzContext from '../util/PlanetContext';

type PlanetzSearchProps = {
  onfilter: (searchText: string) => void;
};

function PlanetzSearch({ onfilter }: PlanetzSearchProps) {
//   const { Planetzlistz } = useContext(PlanetzContext);
  const [searchText, setSearchText] = useState('');
  const
    { QuantityFilter, setQuantityFilter, ComparasionFilter } = useContext(PlanetzContext);
  const columnz = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];
  const comparizon = ['maior que', 'menor que', 'igual a'];

  const handleSubmit = () => {
    ComparasionFilter(QuantityFilter);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    onfilter(e.target.value);
  };
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setQuantityFilter({ ...QuantityFilter, column: e.target.value });
  };

  return (
    <div>

      <input
        data-testid="name-filter"
        type="text"
        placeholder="Search Planets..."
        value={ searchText }
        onChange={ handleSearch }
      />
      <div>
        <select
          data-testid="column-filter"
          id="column-filter"
          name="column"
          value={ QuantityFilter.column }
          onChange={ ({ target }) => setQuantityFilter(
            { ...QuantityFilter, column: target.value },
          ) }
          required
        >
          {columnz.map((column) => (
            <option
              key={ column }
              value={ column }
            >
              {column}
            </option>))}
        </select>
        <select
          data-testid="comparison-filter"
          id="comparison-filter"
          name="comparison"
          value={ QuantityFilter.comparison }
          onChange={ ({ target }) => setQuantityFilter(
            { ...QuantityFilter, comparison: target.value },
          ) }
          required
        >
          {comparizon.map((compz) => (
            <option
              key={ compz }
              value={ compz }
            >
              {compz}
            </option>))}
        </select>
        <input
          data-testid="value-filter"
          type="number"
          placeholder="Value"
          required
          value={ QuantityFilter.value }
          onChange={ handleSelect }
        />
        <button
          data-testid="button-filter"
          type="button"
          onClick={ (e) => {
            e.preventDefault();
            handleSubmit();
          } }
        >
          Filter
        </button>
      </div>
      <div>
        <select data-testid="column-sort">
          <option value="population">Population</option>
          <option value="orbital_period">Orbital Period</option>
          <option value="rotation_period">Rotation Period</option>
          <option value="diameter">Diameter</option>
          <option value="surface_water">Surface Water</option>
        </select>
        <input
          type="radio"
          name="Increase"
          data-testid="column-sort-input-asc"
          value="ASC"
          id="ASC"
        />
        {' '}
        ASC
        <input
          type="radio"
          name="Increase"
          data-testid="column-sort-input-desc"
          value="DESC"
          id="DESC"
        />
        {' '}
        DESC

      </div>
    </div>
  );
}
export default PlanetzSearch;
