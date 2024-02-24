import { useEffect, useState } from 'react';
import PlanetzContext from './PlanetContext';
import { PlanetzType } from './types/contextypes';

type PlanetzProviderProps = {
  children: React.ReactNode;
};

function PlanetzProvider({ children }: PlanetzProviderProps) {
  const [Planetzlistz, setPlanetzListz] = useState<PlanetzType[]>([]);
  const [QuantityFilter, setQuantityFilter] = useState(
    { column: '', comparison: '', value: '' },
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
  const AllValues = ({ columnz, comparison, value }: any) => {
    const comparator = (planet: any) => {
      switch (comparison) {
        case 'maior que':
          return Number(planet[columnz]) > value;
        case 'menor que':
          return Number(planet[columnz]) < value;
        default:
          return Number(planet[columnz]) === Number(value);
      }
    };
    return Planetzlistz.filter(comparator);
  };
  const ComparasionFilter = () => {
    setPlanetzListz(AllValues(QuantityFilter));
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
