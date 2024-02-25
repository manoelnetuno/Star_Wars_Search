import { useEffect, useState } from 'react';
import PlanetzContext from './PlanetContext';
import { PlanetzType } from './types/contextypes';

type PlanetzProviderProps = {
  children: React.ReactNode;
};

function PlanetzProvider({ children }: PlanetzProviderProps) {
  const [Planetzlistz, setPlanetzListz] = useState<PlanetzType[]>([]);
  const [QuantityFilter, setQuantityFilter] = useState(
    { column: 'population',
      comparison: 'maior que',
      value: '0' },
  );

  useEffect(() => {
    const fetchApi = async () => {
      const url = 'https://swapi.dev/api/planets';
      const response = await fetch(url);
      const result = await response.json();
      const planetz = result.results.map((planet: any) => {
        const { residents, ...notResidents } = planet;
        return notResidents;
      });
      setPlanetzListz(planetz);
      console.log(planetz);
    };
    fetchApi();
  }, []);
  const AllValues = () => {
    const { column, comparison, value } = QuantityFilter;
    console.log(comparison, value);
    switch (comparison) {
      case 'maior que':
        return Planetzlistz.filter(
          (planet:any) => Number(planet[column]) > Number(value),
        );
      case 'menor que':
        return Planetzlistz.filter(
          (planet:any) => Number(planet[column]) < Number(value),
        );
      default:
        return Planetzlistz.filter(
          (planet:any) => (Number(planet[column]) === Number(value)),
        );
    }
  };

  const ComparasionFilter = () => {
    const filter = AllValues();
    setPlanetzListz(filter);
  };
  return (
    <PlanetzContext.Provider
      value={ { Planetzlistz, QuantityFilter, ComparasionFilter, setQuantityFilter } }
    >
      <div>
        {children}
      </div>
    </PlanetzContext.Provider>
  );
}

export default PlanetzProvider;
