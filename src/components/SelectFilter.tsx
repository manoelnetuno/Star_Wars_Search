import { useContext } from 'react';
import PlanetzContext from '../util/PlanetContext';

const columnsOptions = [
  'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
];

const operatorOption = [
  'maior que', 'menor que', 'igual a',
];

function SelectFilter() {
  const {
    QuantityFilter,
    ComparasionFilter,
    setQuantityFilter,
  } = useContext(PlanetzContext);

  const handleSubmit = () => {
    ComparasionFilter(QuantityFilter);
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setQuantityFilter({ ...QuantityFilter, value: (e.target.value) });
  };

  return (
    <form id="form-filter">
      <label htmlFor="column">Ordenar</label>
      <select
        id="column"
        name="column"
        value={ QuantityFilter.column }
        onChange={ ({ target }) => setQuantityFilter(
          { ...QuantityFilter, column: target.value },
        ) }
        data-testid="column-filter"
      >
        {columnsOptions.map((option:any) => (
          <option
            key={ option }
            value={ option }
          >
            {option}
          </option>))}
      </select>

      <label htmlFor="comparison">Operator</label>
      <select
        name="comparison"
        id="comparison"
        data-testid="comparison-filter"
        onChange={ ({ target }) => setQuantityFilter(
          { ...QuantityFilter, comparison: target.value },
        ) }
      >
        {operatorOption.map((option) => (
          <option
            key={ option }
            value={ option }
          >
            {option}
          </option>))}
      </select>

      <input
        type="number"
        name="value"
        value={ QuantityFilter.value }
        onChange={ handleChange }
        data-testid="value-filter"
      />

      <button
        data-testid="button-filter"
        type="button"
        onClick={ (e) => {
          e.preventDefault();
          handleSubmit();
        } }
      >
        Filtrar Numéricamente
      </button>
    </form>
  );
}

export default SelectFilter;
