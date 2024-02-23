import { useState } from 'react';

type PlanetzSearchProps = {
  onfilter: (searchText: string) => void;
};

function PlanetzSearch({ onfilter }: PlanetzSearchProps) {
//   const { Planetzlistz } = useContext(PlanetzContext);
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
      <select>
        <option value="diameter">Diameter</option>
        <option value="population">Population</option>
        <option value="orbital_period">Orbital Period</option>
        <option value="rotation_period">Rotation Period</option>
        <option value="surface_water">Surface Water</option>
      </select>
    </div>
  );
}
export default PlanetzSearch;
