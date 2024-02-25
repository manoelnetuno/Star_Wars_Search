import { useState } from 'react';

type PlanetzSearchProps = {
  onfilter: (searchText: string) => void;
};

function PlanetzSearch({ onfilter }: PlanetzSearchProps) {
  // const { Planetzlistz } = useContext(PlanetzContext);
  const [searchText, setSearchText] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    onfilter(e.target.value);
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
      {/* <div>
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

      </div> */}
    </div>
  );
}
export default PlanetzSearch;
