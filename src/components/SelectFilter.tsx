import { useContext, useState } from 'react';
import PlanetzContext from '../util/PlanetContext';
import { QuantityFilterType } from '../util/types/Quantityfilter';

const columnsOptions = [
  'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
];
const operatorOption = [
  'maior que', 'menor que', 'igual a',
];

function SelectFilter() {
  const {
    QuantityFilter,
    setQuantityFilter,
  } = useContext(PlanetzContext);
  const [form, setForm] = useState<QuantityFilterType>(
    {
      column: columnsOptions[0],
      comparison: 'maior que',
      value: '0',
    },
  );

  const handleSubmit = () => {
    setQuantityFilter([...QuantityFilter, form]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form id="form-filter">
      <label htmlFor="column">Ordenar</label>
      <select
        id="column"
        name="column"
        onChange={ handleChange }
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
        onChange={ handleChange }
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
        value={ form.value }
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
